import getAbsenceStatus from '@/shared/getAbsenceStatus';

describe('getAbsenceStatus', () => {
  const absenceConfirmed = {
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
  };

  const absenceRejected = {
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
  };

  const absenceRequested = {
    admitterId: 709,
    admitterNote: '',
    confirmedAt: null,
    createdAt: '2021-05-12T09:27:30.000+02:00',
    crewId: 352,
    endDate: '2021-06-26',
    id: 5291,
    memberNote: '',
    rejectedAt: null,
    startDate: '2021-06-26',
    type: 'sickness',
    userId: 8007,
  };

  it('should return status - Requested', () => {
    const status = getAbsenceStatus(absenceRequested);
    expect(status).toEqual('Requested');
  });

  it('should return status - Confirmed', () => {
    const status = getAbsenceStatus(absenceConfirmed);
    expect(status).toEqual('Confirmed');
  });

  it('should return status - Rejected', () => {
    const status = getAbsenceStatus(absenceRejected);
    expect(status).toEqual('Rejected');
  });
});
