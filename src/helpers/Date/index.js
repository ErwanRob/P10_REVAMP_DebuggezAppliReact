export const MONTHS = {
  1: "janvier",
  2: "février",
  3: "mars",
  4: "avril",
  5: "mai",
  6: "juin",
  7: "juillet",
  8: "août",
  9: "septembre",
  10: "octobre",
  11: "novembre",
  12: "décembre",
};

/* BUGSORT added +1 at the end to not start 
at 0 and be 'out of bound' in this scenario */
export const getMonth = (date) => MONTHS[date.getMonth() + 1];
