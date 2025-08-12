import { ExperienceLevelFilter, Filter, PlatformFilter } from 'domain/jobPosting/filters';
import { JobPosting } from 'domain/jobPosting/JobPosting';
import { useEffect, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { Slider } from './Slider';

function PlatformItem({
  filter,
  isActive,
  value,
  onChange,
  jobPostings
}: { 
  filter: PlatformFilter;
  isActive: boolean;
  value: any;
  onChange: (value: any) => void;
  jobPostings: JobPosting[];
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
    return isActive
      ? filter.options
      : filter.options.filter((o) => value === o);
  }, [isActive, filter.options, value]);
  
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
  filter,
  isActive,
  setIsActive,
  value,
  onChange,
  jobPostings
}: { 
  filter: ExperienceLevelFilter;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void,
  value: any;
  onChange: (value: any) => void;
  jobPostings: JobPosting[];
}) {
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const startTimer: (timeout: number) => void = ( timeout ) => {
    setIsActive(true);
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => setIsActive(false), timeout);
  };

  useEffect(() => {
    if (filter.key == 'experienceLevel') {
      if (value !== null && isActive) {
        startTimer(3000);
      } else {
        setIsActive(false);
      }
    }
    
    return () => { 
      if (timerRef.current) clearTimeout(timerRef.current);
    }
  }, [filter, value, isActive]);

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
        {value !== null && isActive && (
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
  isActive,
  setIsActive,
  value,
  onChange,
  jobPostings
}: { 
  filter: Filter;
  isActive: boolean;
  setIsActive: (isActive: boolean) => void,
  value: any;
  onChange: (value: any) => void;
  jobPostings: JobPosting[];
}) {
  switch (filter.key) {
    case 'platform': {
      return (
        <PlatformItem
          filter={filter}
          isActive={isActive}
          value={value}
          onChange={onChange}
          jobPostings={jobPostings}
        />
      );
    }
    case 'experienceLevel': {
      return (
        <ExperienceLevelItem
          filter={filter}
          isActive={isActive}
          setIsActive={setIsActive}
          value={value}
          onChange={onChange}
          jobPostings={jobPostings}
        />
      );
    }
  }
}

export default FilterOptionItem;