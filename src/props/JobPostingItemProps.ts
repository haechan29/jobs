import { ExperienceLevelRange } from '../domain/jobPosting/JobPosting';

export type JobPostingItemProps = {
  company: string;
  location: string;
  platform: string;
  requirements: string[];
  preferences: string[];
  deadline: string;
  applyUrl: string;
  experienceLevel: ExperienceLevelRange;
  rating?: number;
  interestScore?: number;
}