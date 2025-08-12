import { Filter, filters } from '../domain/jobPosting/filters';
import clsx from 'clsx';
import { JobPosting } from '../domain/jobPosting/JobPosting';
import { motion } from 'framer-motion';
import FilterOptionItem from './FilterOptionItem';

function FilterItem({
  selectedKey,
  selectKey,
  selectedValue,
  selectValue,
  jobPostings
}: {
  selectedKey: Filter['key'] | undefined;
  selectKey: (key: Filter['key'] | undefined) => void;
  selectedValue: Record<Filter['key'], any>;
  selectValue: (value: Record<Filter['key'], any>) => void;
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
          className='flex text-lg font-bold'
        >
          <button
            onClick={() => {
              const wasApplied = selectedValue[filter.key] !== null;
              const wasSelected = filter.key === selectedKey;

              switch (filter.key) {
                case 'platform': {
                  if (wasApplied) {
                    selectValue({ ...selectedValue, [filter.key]: null });
                  } else {
                    selectKey(wasSelected ? undefined : filter.key);
                  }
                  break;
                }
                case 'experienceLevel': {
                  const newValue = wasSelected ? null : [0, 10];
                  selectKey(wasSelected ? undefined : filter.key);
                  selectValue({ ...selectedValue, [filter.key]: newValue });
                  break;
                }
              }
            }}
            className={clsx(
              'pr-1 hover:text-blue-500',
              idx === 0 ? '' : 'pl-2',
              selectedValue[filter.key] === null ? 'text-gray-400' : 'text-blue-500'
            )}
          >
            {filter.label}
          </button>
          <FilterOptionItem
            filter={filter}
            isActive={selectedKey === filter.key}
            setIsActive={(isActive) => selectKey(isActive ? filter.key : undefined)}
            value={selectedValue[filter.key]}
            onChange={(value) => {
              switch (filter.key) {
                case 'platform': {
                  selectValue({ ...selectedValue, [filter.key]: value});
                  selectKey(selectedKey === undefined ? filter.key : undefined);
                  break;
                }
                case 'experienceLevel': {
                  selectValue({ ...selectedValue, [filter.key]: value});
                  break;
                }
              }
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