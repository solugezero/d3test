import moment from "moment";

const getValidDate = (date: Date) => {
  return moment(date).format("DD.MM.YYYY HH:mm");
};

export { getValidDate };
