//  ╔═╗┌┬┐┬─┐┬┌┐┌┌─┐
//  ╚═╗ │ ├┬┘│││││ ┬
//  ╚═╝ ┴ ┴└─┴┘└┘└─┘

// String case insensitive equals method
String.prototype.ciEquals = function (a) {
  return typeof a === "string"
    ? a.localeCompare(this, undefined, { sensitivity: "accent" }) === 0
    : a === this;
};

//  ╔╦╗┌─┐┌┬┐┌─┐
//   ║║├─┤ │ ├┤
//  ═╩╝┴ ┴ ┴ └─┘

// Returns the ISO week of the date.
Date.prototype.getWeek = function () {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return (
    1 +
    Math.round(
      ((date.getTime() - week1.getTime()) / 86400000 -
        3 +
        ((week1.getDay() + 6) % 7)) /
        7
    )
  );
};

// Returns the four-digit year corresponding to the ISO week of the date.
Date.prototype.getWeekYear = function () {
  var date = new Date(this.getTime());
  date.setDate(date.getDate() + 3 - ((date.getDay() + 6) % 7));
  return date.getFullYear();
};

/*
// String case insensitive equals method
exports.ciEquals = function (a, b) {
  return typeof a === "string" && typeof b === "string"
    ? a.localeCompare(b, undefined, { sensitivity: "accent" }) === 0
    : a === b;
};
*/
