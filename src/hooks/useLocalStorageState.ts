import { useEffect, useState } from 'react';

function useLocalStorageState<T>(
	key: string, 
	initialValue: T,
	opts?: {
		serialize?: (v: T) => string;
		deserialize?: (s: string) => T;
	}
) {
	const serialize = opts?.serialize ?? JSON.stringify;
	const deserialize = opts?.deserialize ?? (JSON.parse as (s: string) => T);
	const isBrowser = typeof window !== 'undefined';

	const [state, setState] = useState<T>(() => {
		if (!isBrowser) return initialValue;
		try {
			const stored = localStorage.getItem(key);
			return stored ? deserialize(stored) : initialValue;
		} catch {
			return initialValue;
		}
	});

	useEffect(() => {
		if (!isBrowser) return;
		try {
			localStorage.setItem(key, serialize(state));
		} catch {}
	}, [isBrowser, key, serialize, state]);

	useEffect(() => {
		if (!isBrowser) return;
		const onStorage = (e: StorageEvent) => {
			if (e.storageArea !== localStorage || e.key !== key) return;
			try {
				setState(e.newValue != null ? deserialize(e.newValue) : initialValue);
			} catch {
				setState(initialValue)
			}
		};
		window.addEventListener('storage', onStorage);
		return () => window.removeEventListener('storage', onStorage);
	}, [isBrowser, key, deserialize, initialValue]);

	return [state, setState] as const;
}

export default useLocalStorageState;