export type PlatformFilter = {
  key: 'platform';
  label: string;
  type: 'multiSelect'
  options: string[];
};

export type ExperienceLevelFilter = {
  key: 'experienceLevel';
  label: string;
  type: 'range';
  min: number;
  max: number;
};

export type Filter = PlatformFilter | ExperienceLevelFilter;

export const filters: Filter[] = [
  {
    key: 'platform',
    label: '플랫폼',
    type: 'multiSelect',
    options: [
      'Android',
      'Flutter',
      'React Native'
    ]
  },
  {
    key: 'experienceLevel',
    label: '경력',
    type: 'range',
    min: 0,
    max: 100
  }
];