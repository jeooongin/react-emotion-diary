export const getStringDate = (date) => {
  return date.toISOString().slice(0, 10);
};


// const getStringDate = (date) => {
  // return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
// };