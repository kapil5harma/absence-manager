import path from 'path';
import { promises as fs } from 'fs';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const jsonDirectory = path.join(process.cwd(), 'json');
    const fileContents = await fs.readFile(
      jsonDirectory + '/members.json',
      'utf8'
    );
    res.status(200).json(JSON.parse(fileContents));
  } catch (err) {
    res
      .status(500)
      .json({ message: 'Something went wrong trying to get data' });
  }
}
