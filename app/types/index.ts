export const getNextId = (arr: {id:number, title:string}[]) => {
  if (arr.length === 0) {
    return 1;
  }

  const maxID = Math.max(...arr.map((item) => item.id));
  return maxID + 1;
};
