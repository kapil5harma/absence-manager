import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridRowProps, GridToolbar, GridValueGetterParams } from '@mui/x-data-grid';
import getAbsenceStatus from '@/shared/getAbsenceStatus';
import { Absence } from '@/shared/model';

const columns: GridColDef[] = [
  { field: 'userId', filterable: false, flex: 1, headerName: 'User ID' },
  { field: 'name', filterable: false, flex: 1, headerName: 'Name' },
  { field: 'type', filterable: true, flex: 1, headerName: 'Type' },
  { field: 'startDate', filterable: true, flex: 1, headerName: 'Start Date' },
  { field: 'endDate', filterable: true, flex: 1, headerName: 'End Date' },
  { field: 'memberNote', filterable: false, flex: 1, headerName: 'Member Note' },
  {
    field: 'status',
    filterable: false,
    flex: 1,
    headerName: 'Status',
    valueGetter: (params: GridValueGetterParams) => `${getAbsenceStatus(params.row as Absence)}`,
  },
  { field: 'admitterNote', filterable: false, flex: 1, headerName: 'Admitter Note' },
];

export default function DataGridTable({ rows }: { rows: unknown[] }) {
  return (
    <Box sx={{ width: '100%' }}>
      <DataGrid components={{ Toolbar: GridToolbar }} autoHeight rows={rows} columns={columns} pageSize={10} rowsPerPageOptions={[10]} />
    </Box>
  );
}
