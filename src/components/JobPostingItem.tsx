import { ExperienceLevelRange } from '../domain/jobPosting/JobPosting';
import useLocalStorageState from '../hooks/useLocalStorageState';
import { JobPostingItemProps } from '../props/JobPostingItemProps';

function formattedExperienceLevel(experienceLevel: ExperienceLevelRange): string {
  const min = experienceLevel.min;
  const max = experienceLevel.max;
  if (min !== undefined && max !== undefined) {
    return `${min}~${max}년`;
  } else if (min === undefined) {
    return `${max}년 이하`;
  } else if (max === undefined) {
    return `${min}년 이상`;
  } else {
    return '';
  }
}

const JobPostingItem: React.FC<JobPostingItemProps> = ({
    company,
    location,
    rating,
    interestScore,
    platform,
    requirements,
    preferences,
    experienceLevel,
    deadline,
    applyUrl
}) => {
  const [checkedRequirements, setCheckedRequirements] = useLocalStorageState<string[]>(`checkedRequirements ${company}`, []);
  const [checkedPreferences, setCheckedPreferences] = useLocalStorageState<string[]>(`checkedPreferences ${company}`, []);

  return (
    <div className='flex flex-col mb-4'>
      {rating && interestScore && (
        <div className='flex items-center text-xs text-gray-500 gap-1'>
          {rating}
          <div className='w-1 h-1 rounded-full bg-gray-400'/>
          {interestScore}
        </div>
      )}
      
      <div className='flex items-center mb-4'>
        <div className='flex flex-1 text-xl'>{company}</div>
        <div className='text-sm text-gray-500 mr-4'>{deadline}</div>
        <a href={applyUrl} target='_blank' rel='noopener noreferrer'>
          <button className='pl-10 font-semibold text-gray-400 hover:text-blue-600'>지원하기</button>
        </a>
      </div>
      
      <>
        <div className='flex mb-2'>{platform} {formattedExperienceLevel(experienceLevel)}</div>
        <div className='flex text-sm mb-6'>{location}</div>
      </>

      <div className='flex gap-10'>
        <div className='flex flex-1 flex-col text-sm mb-3'>
          <div className='text-gray-500 mb-2'>자격요건 ({checkedRequirements.length}/{requirements.length})</div>
          {requirements.map((requirement) => (
            <div className='flex gap-2 mb-1'>
              <input
                type='checkbox'
                className='w-4 h-4 accent-blue-600 rounded-sm cursor-pointer mr-1 mt-0.5'
                checked={checkedRequirements.includes(requirement)}
                onChange={(e) => {
                  const isChecked = e.target.checked
                  setCheckedRequirements((prev) =>
                    isChecked
                      ? [...prev, requirement]
                      : prev.filter((r) => r !== requirement)
                  )
                }}
              />
              <div className='flex flex-1'>{requirement}</div>
            </div>
          ))}
        </div>

        <div className='flex flex-1 flex-col text-sm mb-3'>
          <div className='text-gray-500 mb-2'>우대사항 ({checkedPreferences.length}/{preferences.length})</div>
          {preferences.map((preference) => (
            <div className='flex gap-2 mb-1'>
              <input
                type='checkbox'
                className='w-4 h-4 accent-blue-600 rounded-sm cursor-pointer mr-1 mt-0.5'
                checked={checkedPreferences.includes(preference)}
                onChange={(e) => {
                  const isChecked = e.target.checked
                  setCheckedPreferences((prev) =>
                    isChecked
                      ? [...prev, preference]
                      : prev.filter((p) => p !== preference)
                  )
                }}
              />
              <div className='flex flex-1'>{preference}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default JobPostingItem;