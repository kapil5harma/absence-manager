import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DataGridTable from './DataGridTable';

const mockedRows = [
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

describe('DataGridTable', () => {
  it('renders a button - "Select columns"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const button = screen.getByRole('button', { name: 'Select columns' });
    expect(button).toBeInTheDocument();
  });

  it('renders a button - "Show filters"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const button = screen.getByRole('button', { name: 'Show filters' });
    expect(button).toBeInTheDocument();
  });

  it('renders a button - "Density"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const button = screen.getByRole('button', { name: 'Density' });
    expect(button).toBeInTheDocument();
  });

  it('renders a button - "Export"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const button = screen.getByRole('button', { name: 'Export' });
    expect(button).toBeInTheDocument();
  });

  it('renders a button - "Go to previous page"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const button = screen.getByRole('button', { name: 'Go to previous page' });
    expect(button).toBeInTheDocument();
  });

  it('renders a button - "Go to next page"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const button = screen.getByRole('button', { name: 'Go to next page' });
    expect(button).toBeInTheDocument();
  });

  it('renders a column - "User ID"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const column = screen.getByRole('columnheader', { name: 'User ID' });
    expect(column).toBeInTheDocument();
  });

  it('renders a column - "Name"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const column = screen.getByRole('columnheader', { name: 'Name' });
    expect(column).toBeInTheDocument();
  });

  it('renders a column - "Type"', () => {
    render(<DataGridTable rows={mockedRows} />);
    const column = screen.getByRole('columnheader', { name: 'Type' });
    expect(column).toBeInTheDocument();
  });
});
