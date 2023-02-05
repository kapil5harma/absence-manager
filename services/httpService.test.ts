import httpService, { axiosInstance } from '@/services/httpService';

jest.mock('@/services/httpService');

describe('getMembers', () => {
  it('returns success response', async () => {
    const mockedRes = { status: 200, data: 'data' };
    const getMembers = (axiosInstance.get as jest.Mock).mockResolvedValue(mockedRes);
    const res = await getMembers();
    expect(res.status).toEqual(mockedRes.status);
    expect(res.data).toEqual(mockedRes.data);
  });

  it('returns failed response', async () => {
    const mockedRes = { status: 500, data: 'server error' };
    const getMembers = (axiosInstance.get as jest.Mock).mockResolvedValue(mockedRes);
    const res = await getMembers();
    expect(res.status).toEqual(mockedRes.status);
    expect(res.data).toEqual(mockedRes.data);
  });

  it('fetches members from API', async () => {
    const mockedMembersRes = [
      {
        crewId: 352,
        id: 709,
        image: 'https://loremflickr.com/300/400',
        name: 'Max',
        userId: 644,
      },
      {
        crewId: 352,
        id: 713,
        image: 'https://loremflickr.com/300/400',
        name: 'Ines',
        userId: 649,
      },
    ];
    const getMembers = (httpService.getMembers as jest.Mock).mockResolvedValue(mockedMembersRes);
    const members = await getMembers();
    expect(members).toEqual(mockedMembersRes);
  });
});

describe('getAbsences', () => {
  it('returns success response', async () => {
    const mockedRes = { status: 200, data: 'data' };
    const getAbsences = (axiosInstance.get as jest.Mock).mockResolvedValue(mockedRes);
    const res = await getAbsences();
    expect(res.status).toEqual(mockedRes.status);
    expect(res.data).toEqual(mockedRes.data);
  });

  it('returns failed response', async () => {
    const mockedRes = { status: 500, data: 'server error' };
    const getAbsences = (axiosInstance.get as jest.Mock).mockResolvedValue(mockedRes);
    const res = await getAbsences();
    expect(res.status).toEqual(mockedRes.status);
    expect(res.data).toEqual(mockedRes.data);
  });

  it('fetch absences from API', async () => {
    const mockedAbsencesRes = [
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
        image: 'https://loremflickr.com/300/400',
        name: 'Mike',
      },
      {
        admitterId: null,
        admitterNote: 'Sorry',
        confirmedAt: null,
        createdAt: '2021-01-03T17:36:52.000+01:00',
        crewId: 352,
        endDate: '2021-01-05',
        id: 2521,
        memberNote: 'ganzer tag',
        rejectedAt: '2021-01-03T17:39:50.000+01:00',
        startDate: '2021-01-05',
        type: 'vacation',
        userId: 2664,
        image: 'https://loremflickr.com/300/400',
        name: 'Mike',
      },
    ];
    const getAbsences = (httpService.getAbsences as jest.Mock).mockResolvedValue(mockedAbsencesRes);
    const absences = await getAbsences();
    expect(absences).toEqual(mockedAbsencesRes);
  });
});
