import { ExperienceLevelFilter, Filter, PlatformFilter } from 'domain/jobPosting/filters';
import { JobPosting } from 'domain/jobPosting/JobPosting';
import { useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Slider } from './Slider';
import { JobPostingItemProps } from 'props/JobPostingItemProps';

function PlatformItem({
  filter,
  selectedKey,
  value,
  onChange,
  jobPostings
}: { 
  filter: PlatformFilter;
  selectedKey: Filter['key'] | undefined;
  value: any;
  onChange: (value: any) => void;
  jobPostings: JobPostingItemProps[];
}) {
  const countsByOption = useMemo<Map<string, number>>(() => {
    const counts = new Map<string, number>();
    const optionSet = new Set<string>(filter.options);
    for (const jobPosting of jobPostings) {
      const option = jobPosting.platform
      if (optionSet.has(option)) counts.set(option, (counts.get(option) ?? 0) + 1);
    }
    return counts;
  }, [jobPostings, filter.options]);

  const optionsToShow = useMemo<string[]>(() => {
    const isActive = selectedKey == 'platform';
    return isActive
      ? filter.options
      : filter.options.filter((o) => value === o);
  }, [selectedKey, filter.options, value]);
  
  return (
    <div className='flex items-end'>
      <AnimatePresence initial={false}>
        {optionsToShow.map((option) => (
          <motion.button
            key={option}
            initial={{ width: 0, opacity: 0, marginRight: 0 }}
            animate={{ width: 'auto', opacity: 1, marginRight: 8 }}
            exit={{ width: 0, opacity: 0, marginRight: 0, pointerEvents: 'none' }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => onChange(option)}
            className={clsx(
              'flex overflow-hidden whitespace-nowrap items-center hover:text-blue-500',
              value === option ? 'text-blue-500' : 'text-gray-400'
            )}>
              <div className='text-sm mr-0.5'>
                {option}
              </div>
              <div className='text-xs'>
                {countsByOption.get(option) ?? 0}
              </div>
          </motion.button>
        ))}
      </AnimatePresence>
    </div>
  );
}

function ExperienceLevelItem({
  selectedKey,
  selectKey,
  value,
  onChange
}: { 
  selectedKey: Filter['key'] | undefined;
  selectKey: (key: Filter['key'] | undefined) => void;
  value: any;
  onChange: (value: any) => void;
}) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer: (timeout: number) => void = ( timeout ) => {
    selectKey('experienceLevel');
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      selectKey(undefined);
    }, timeout);
  };

  useEffect(() => {
    if (value !== null && selectedKey === 'experienceLevel') {
      startTimer(3000);
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
    }
    
    return () => { 
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [value !== null && selectedKey === 'experienceLevel']);

  return (
    <div className='flex'>
      <AnimatePresence initial={false}>
        {value !== null && (
          <motion.button
            key='experienceLevel button'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            onClick={() => startTimer(3000)}
            className='w-14 flex items-end text-sm text-blue-500'
          >
            {`${value[0]}~${value[1]}년`}
          </motion.button>
        )}
        {value !== null && selectedKey === 'experienceLevel' && (
          <motion.div
            key='experienceLevel slider'
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: 'auto', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className='flex items-center'
          >
            <Slider
              className='w-40 mr-2'
              value={value}
              onValueChange={(v) => {
                onChange(v);
                startTimer(3000);
              }}
              min={0}
              max={10}
              step={1}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function FilterOptionItem({
  filter,
  selectedKey,
  selectKey,
  value,
  onChange,
  jobPostings
}: { 
  filter: Filter;
  selectedKey: Filter['key'] | undefined;
  selectKey: (key: Filter['key'] | undefined) => void;
  value: any;
  onChange: (value: any) => void;
  jobPostings: JobPostingItemProps[];
}) {
  switch (filter.key) {
    case 'platform': {
      return (
        <PlatformItem
          filter={filter}
          selectedKey={selectedKey}
          value={value}
          onChange={onChange}
          jobPostings={jobPostings}
        />
      );
    }
    case 'experienceLevel': {
      return (
        <ExperienceLevelItem
          selectedKey={selectedKey}
          selectKey={selectKey}
          value={value}
          onChange={onChange}
        />
      );
    }
  }
}

export default FilterOptionItem;