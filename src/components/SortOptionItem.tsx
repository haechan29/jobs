import { useMemo, useState } from 'react';
import { sortOptions } from '../domain/jobPosting/sortOptions';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

function SortOptionItem({
  selectedKey,
  selectKey,
  isActive,
  setIsActive
}: {
  selectedKey: string;
  selectKey: (key: string) => void;
  isActive: boolean;
  setIsActive: (isFolded: boolean) => void;
}) {
  const filteredSortOptions = useMemo(() => {
    return [...sortOptions].filter((sortOption) => isActive || selectedKey === sortOption.key)
  }, [sortOptions, isActive, selectedKey]);
  return (
    <motion.div
      className='flex'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      <AnimatePresence initial={false}>
        {filteredSortOptions.map((sortOption, idx) => {
          const isLast = idx === filteredSortOptions.length - 1;
          return (
            <motion.div
              key={sortOption.label}
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 'auto', opacity: 1 }}
              exit={{ width: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
              className='flex text-lg font-bold'
            >
              <button
                onClick={() => {
                  setIsActive(!isActive);
                  selectKey(sortOption.key);
                }}
                className={clsx(
                  'hover:text-blue-500 whitespace-nowrap overflow-hidden',
                  isLast ? 'pl-2' : 'px-2',
                  selectedKey === sortOption.key ? 'text-blue-500' : 'text-gray-400'
                )}
              >
                {sortOption.label}
              </button>
              {!isLast && <div className='text-gray-400'>/</div>}
            </motion.div>
          );
        })}
      </AnimatePresence>
    </motion.div>
  )
}

export default SortOptionItem;