import mergeArrays from '@/shared/mergeArrays';

describe('mergeArrays', () => {
  const arr1 = [
    {
      admitterId: null,
      admitterNote: '',
      confirmedAt: '2020-12-12T18:03:55.000+01:00',
      createdAt: '2020-12-12T14:17:01.000+01:00',
      crewId: 352,
      endDate: '2021-01-13',
      id: 2351,
      memberNote: '',
      rejectedAt: null,
      startDate: '2021-01-13',
      type: 'sickness',
      userId: 2664,
    },
  ];

  const arr2 = [
    {
      crewId: 352,
      id: 2650,
      image: 'https://loremflickr.com/300/400',
      name: 'Mike',
      userId: 2664,
    },
  ];

  const expectedMergedArr = [
    {
      admitterId: null,
      admitterNote: '',
      confirmedAt: '2020-12-12T18:03:55.000+01:00',
      createdAt: '2020-12-12T14:17:01.000+01:00',
      crewId: 352,
      endDate: '2021-01-13',
      id: 2351,
      image: 'https://loremflickr.com/300/400',
      memberNote: '',
      name: 'Mike',
      rejectedAt: null,
      startDate: '2021-01-13',
      type: 'sickness',
      userId: 2664,
    },
  ];

  it('merge two arrays based on userId', () => {
    const mergedArray = mergeArrays(arr1, arr2);
    expect(mergedArray).toEqual(expectedMergedArr);
  });
});
