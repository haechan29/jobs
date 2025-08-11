export type Filter = 
  | {
    key: 'platform';
    label: string;
    type: 'multiSelect'
    options: string[];
  }
  | {
    key: 'experienceLevel';
    label: string;
    type: 'range';
    min: number;
    max: number;
  };

export const filters: Filter[] = [
  {
    key: 'platform',
    label: '플랫폼',
    type: 'multiSelect',
    options: [
      '전체',
      'Android',
      'Flutter',
      'React',
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