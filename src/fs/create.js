import * as fs from "fs";
const create = async () => {
  const data = "I am fresh and young";
  fs.writeFile(
    `src/fs/files/fresh.txt`,
    data,
    { encoding: "utf8", flag: "ax+" },
    (err) => {
      if (err) throw new Error("FS operation failed");
    }
  );
};

await create();
