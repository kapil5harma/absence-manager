export function getAbsenceStatus(absence: any | undefined): string {
  if (absence?.confirmedAt?.toString() !== undefined || '') {
    return 'Confirmed';
  } else if (absence?.rejectedAt?.toString() !== undefined || '') {
    return 'Rejected';
  }
  return 'Requested';
}
