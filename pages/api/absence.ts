import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';
import mergeArrays from '@/shared/mergeArrays';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const memberContents = await fs.readFile(
      jsonDirectory + '/members.json',
      'utf8'
    );
    const absenceContents = await fs.readFile(
      jsonDirectory + '/absences.json',
      'utf8'
    );
    const mergedContent = mergeArrays(
      JSON.parse(absenceContents)?.payload,
      JSON.parse(memberContents)?.payload
    );
    res.status(200).json(mergedContent);
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Something went wrong trying to get data' });
  }
}
