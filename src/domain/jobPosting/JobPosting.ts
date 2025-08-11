import { JobPostingItemProps } from '../../props/JobPostingItemProps';
import { Deadline } from '../../utils/Deadline';

export type ExperienceLevelRange = {
  min?: number;
  max?: number;
}

export class JobPosting {
  constructor (
    public company: string,
    public location: string,
    public platform: string,
    public requirements: string[],
    public preferences: string[],
    public deadline: Deadline,
    public applyUrl: string,
    public experienceLevel: ExperienceLevelRange,
    public rating?: number,
    public interestScore?: number,
  ) {}

  toProps(): JobPostingItemProps {
    return {
      company: this.company,
      location: this.location,
      platform: this.platform,
      requirements: this.requirements,
      preferences: this.preferences,
      deadline: this.deadline.getFormatted(),
      applyUrl: this.applyUrl,
      experienceLevel: this.experienceLevel,
      rating: this.rating,
      interestScore: this.interestScore,
    }
  }
};