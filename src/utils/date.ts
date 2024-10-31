import moment from "moment";

export const isISODateString = (value: string) => {
  return moment(value, moment.ISO_8601).isValid();
};

export const formatISODate = (value: string) => {
  const date = moment(value);
  return date.format("MMMM D, YYYY"); // Format as "Month Day, Year"
};
