const parseArgs = () => {
  const arrayOfArgVal = process.argv.slice(2);
  const formattedArrayOfArgVal = [];

  while (arrayOfArgVal.length !== 0) {
    arrayOfArgVal.map((val, index, arr) => {
      if (val.startsWith("--")) arr[index] = val.slice(2);
    });
    formattedArrayOfArgVal.push(arrayOfArgVal.splice(0, 2).join(" is "));
  }
  console.log(formattedArrayOfArgVal.join(", "));
};

parseArgs();
