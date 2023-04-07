const parseArgs = () => {
  const arrayOfArgVal = process.argv.slice(2);
  const formattedArrayOfArgVal = [];

  while (arrayOfArgVal.length !== 0) {
    formattedArrayOfArgVal.push(arrayOfArgVal.splice(0, 2).join(" is "));
  }
  console.log(formattedArrayOfArgVal.join(", "));
};

parseArgs();
