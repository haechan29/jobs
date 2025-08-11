import { JobPostingDto } from '../../types/JobPostingDto';
import { JobPosting } from './JobPosting';
import { Deadline } from '../../utils/Deadline';

export function toJobPosting(dto: JobPostingDto): JobPosting {
  return new JobPosting(
    dto.company,
    dto.location,
    dto.platform,
    dto.requirements,
    dto.preferences,
    new Deadline(dto.deadline),
    dto.applyUrl,
    {
      min: dto.experienceLevel[0] ?? undefined,
      max: dto.experienceLevel[1] ?? undefined
    },
    dto.rating,
    dto.interestScore,
  )  
};