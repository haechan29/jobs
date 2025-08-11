import { Filter, filters } from '../domain/jobPosting/filters';
import clsx from 'clsx';
import { JobPosting } from '../domain/jobPosting/JobPosting';
import { motion, AnimatePresence } from 'framer-motion';

function FilterOptionItem({
  filter,
  isActive,
  value,
  onChange,
  jobPostings
}: { 
  filter: Filter;
  isActive: boolean;
  value: any;
  onChange: (value: any) => void;
  jobPostings: JobPosting[];
}) {
  if (filter.key === 'platform') {
    const optionsToShow = isActive
      ? filter.options
      : filter.options.filter((o) => value === o);

    return (
      <motion.div className='flex'>
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
                  {jobPostings.reduce((acc, j) => option === '전체' || j.platform.includes(option) ? acc + 1: acc, 0)}
                </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>
    );
  }

  if (filter.key === 'experienceLevel') {
    return <></>;
  }

  return null;
}

function FilterItem({
  selectedKey,
  selectKey,
  selectedValue,
  selectValue,
  jobPostings
}: {
  selectedKey: Filter['key'] | undefined;
  selectKey: (key: Filter['key'] | undefined) => void;
  selectedValue: Partial<Record<Filter['key'], any>>;
  selectValue: (value: Partial<Record<Filter['key'], any>>) => void;
  jobPostings: JobPosting[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      className='flex'
    >
      {filters.map((filter, idx) => (
        <div
          key={filter.key}
          className='flex items-end text-lg font-bold'
        >
          <button
            onClick={() => {
              selectKey(filter.key === selectedKey ? undefined : filter.key)}
            }
            className={clsx(
              'pr-1 hover:text-blue-500',
              idx === 0 ? '' : 'pl-2',
              filter.key in selectedValue ? 'text-blue-500' : 'text-gray-400'
            )}
          >
            {filter.label}
          </button>
          <FilterOptionItem
            filter={filter}
            isActive={selectedKey === filter.key}
            value={selectedValue[filter.key]}
            onChange={(value) => {
              selectValue({ ...selectedValue, [filter.key]: value});
              selectKey(selectedKey === undefined ? filter.key : undefined);
            }}
            jobPostings={jobPostings}
          />
          {idx !== filters.length - 1 && <div className='text-gray-400'>/</div>}
        </div>   
      ))}
    </motion.div>
  );
}

export default FilterItem;