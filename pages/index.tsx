import Head from 'next/head';
import styles from '@/styles/Home.module.css';
import { useEffect, useState } from 'react';
import httpService from '@/services/httpService';
import DataGridTable from '@/components/DataGridTable';
import { CircularProgress } from '@mui/material';

export default function Home() {
  const [absences, setabsences] = useState([]);

  useEffect(() => {
    const getAbsences = async () => {
      const res = await httpService.getAbsences();
      setabsences(res);
    };

    // ? setTimeout is not required but added to show loader for a second
    // ? Attempt to mimic network lag 🎯
    setTimeout(() => {
      getAbsences();
    }, 1000);
  }, []);

  return (
    <>
      <Head>
        <title>Absence Manager</title>
        <meta name="description" content="Absence Manager" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className={styles.nav}>
        <h1>Absence Manager</h1>
      </nav>
      <main className={styles.main}>{!absences?.length ? <CircularProgress /> : <DataGridTable rows={absences}></DataGridTable>}</main>
    </>
  );
}
