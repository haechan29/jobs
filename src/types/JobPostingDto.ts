export interface JobPostingDto {
  company: string;
  location: string;
  platform: string;
  experienceLevel: [number | null, number | null];
  requirements: string[];
  preferences: string[];
  deadline: string;
  applyUrl: string;
  rating?: number;
  interestScore?: number;
};