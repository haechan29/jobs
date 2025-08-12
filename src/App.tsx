import React, { useMemo, useState } from 'react';
import './App.css';
import JobPostingItem from './components/JobPostingItem';
import { jobPostingDtos } from './data/JobPostings';
import { toJobPosting } from './domain/jobPosting/mapper';
import { Filter } from './domain/jobPosting/filters';
import FilterItem from './components/FilterItem';
import { JobPosting } from './domain/jobPosting/JobPosting';
import SortOptionItem from './components/SortOptionItem';
import useLocalStorageState from './hooks/useLocalStorageState';
import { AnimatePresence } from 'framer-motion';

function sortJobPosting(
  key: string,
  j1: JobPosting,
  j2: JobPosting
): number {
  switch (key) {
    case 'deadline': {
      return j1.deadline.compareTo(j2.deadline);
    }
    case 'experienceLevel': {
      const min1 = j1.experienceLevel.min ?? 0;
      const min2 = j2.experienceLevel.min ?? 0;
      return min1 - min2;
    }
    default: {
      return -1;
    }
  }
}

function filterJobPosting(
  key: Filter['key'], 
  value: any, 
  jobPosting: JobPosting
): boolean {
  if (value === null) return true;
  switch (key) {
    case 'platform': {
      return jobPosting.platform === value;
    }
    default: {
      const min = jobPosting.experienceLevel.min ?? 0;
      const max = jobPosting.experienceLevel.max ?? 10;
      return min <= value[1] && max >= value[0];
    }
  }
}

function App() {
  const [selectedFilterKey, setSelectedFilterKey] = useState<Filter['key'] | undefined>();
  const [selectedFilterValues, setSelectedFilterValues] = useLocalStorageState<Record<Filter['key'], any>>('selectedFilterValues', {
    'platform': null,
    'experienceLevel': null,
  });
  const [isSortOptionItemActive, setIsSortOptionItemActive] = useState<boolean>(false);
  const [selectedSortOptionKey, setSelectedSortOptionKey] = useLocalStorageState<string>('selectedSortOptionKey', 'deadline');
  const [jobPostings, _] = useState(() => [...jobPostingDtos].map((dto) => toJobPosting(dto)))

  const jobPostingItemProps = useMemo(() => {
    return [...jobPostings]
      .filter((jobPosting) => {
        return Object.entries(selectedFilterValues).every(([key, value]) => {
          return filterJobPosting(key as Filter['key'], value, jobPosting);
        });
      })
      .sort((j1, j2) => sortJobPosting(selectedSortOptionKey, j1, j2))
      .map((jobPosting) => jobPosting.toProps())
  }, [jobPostings, selectedFilterValues, selectedSortOptionKey]);

  return (
    <div className='h-screen max-w-2xl mx-auto bg-white py-10'>
      <div className='text-2xl font-semibold mb-10'>채용 공고</div>
      <div className='flex mb-10 whitespace-nowrap overflow-hidden'>
        <AnimatePresence initial={false}>
          {!isSortOptionItemActive && (
            <FilterItem
              selectedKey={selectedFilterKey}
              selectKey={setSelectedFilterKey}
              selectedValue={selectedFilterValues}
              selectValue={setSelectedFilterValues}
              jobPostings={jobPostings}
            />
          )}
        </AnimatePresence>
        <div className='flex flex-1' />
        <AnimatePresence initial={false}>
          {selectedFilterKey === undefined && (
            <SortOptionItem
              selectedKey={selectedSortOptionKey}
              selectKey={setSelectedSortOptionKey}
              isActive={isSortOptionItemActive}
              setIsActive={setIsSortOptionItemActive}
            />
          )}
        </AnimatePresence>
      </div>

      <div className='flex flex-col'>
        {jobPostingItemProps
          .map((prop, idx) => (
            <React.Fragment key={prop.company}>
              <JobPostingItem {...prop}/>
              {idx !== jobPostingDtos.length - 1 && (
                <div className='h-0.5 bg-gray-100 mb-8'/>
              )}
            </React.Fragment>
          ))}
      </div>
    </div>
  );
}

export default App;
