const parseEnv = () => {
  Object.entries(process.env).map(([key, value]) => {
    if (key.indexOf("RSS_") === 0) {
      console.log(`${key}=${value};`);
    }
  });
};

parseEnv();
