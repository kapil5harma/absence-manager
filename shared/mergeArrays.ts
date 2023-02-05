import { Absence, Member } from '@/shared/model';
const mergeArrays = (arr1: Absence[] = [], arr2: Member[] = []) => {
  try {
    let res = [];
    res = arr1.map((obj: any, idx: number) => {
      const index = arr2.findIndex((el) => el['userId'] == obj['userId']);
      const res = index !== -1 ? arr2[index] : {};
      return { ...obj, ...res, id: obj.id };
    });
    return res;
  } catch (err) {
    // TODO: Log the error to Sentry or logging service.
    console.log('err: ', err);
  }
};

export default mergeArrays;
