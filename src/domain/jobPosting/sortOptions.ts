type SortOption = {
  key: string;
  label: string;
}
export const sortOptions: SortOption[] = [
  {
    key: 'deadline',
    label: '마감기한 순'
  }, {
    key: 'experienceLevel',
    label: '경력 순'
  }
];