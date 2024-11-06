import moment from "moment";

const currentDate = moment();
console.log("DD-MM-YYYY:", currentDate.format("DD-MM-YYYY"));
console.log("MMM Do YY:", currentDate.format("MMM Do YY"));
console.log("dddd:", currentDate.format("dddd"));
