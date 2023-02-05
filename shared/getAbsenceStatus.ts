import { Absence } from '@/shared/model';
const getAbsenceStatus = (absence: Absence | undefined): string => {
  if (absence?.confirmedAt?.toString() !== undefined || '') {
    return 'Confirmed';
  } else if (absence?.rejectedAt?.toString() !== undefined || '') {
    return 'Rejected';
  }
  return 'Requested';
};

export default getAbsenceStatus;
