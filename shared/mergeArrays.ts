const mergeArrays = (arr1 = [], arr2 = []) => {
  try {
    let res = [];
    res = arr1.map((obj: any, idx: number) => {
      const index = arr2.findIndex((el) => el['userId'] == obj['userId']);
      const res = index !== -1 ? arr2[index] : {};
      return { ...obj, ...res, id: obj.id };
    });
    return res;
  } catch (err) {}
};

export default mergeArrays;
