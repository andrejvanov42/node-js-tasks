import { readdir } from "fs/promises";
const list = async () => {
  const pathToFiles = "src/fs/files";
  try {
    const files = await readdir(pathToFiles);
    console.log(files);
  } catch (err) {
    throw new Error("FS operation failed");
  }
};

await list();
