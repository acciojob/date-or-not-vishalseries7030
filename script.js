var isDate = function (input) {
  if (Object.prototype.toString.call(input) === '[object Date]') {
    return !isNaN(input.getTime());
  }

  const parsedDate = new Date(input);
  return !isNaN(parsedDate.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
