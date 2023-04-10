import { readFile } from "fs/promises";
const read = async () => {
  const pathToFile = "src/fs/files/fileToRead.txt";
  try {
    const contentInFile = await readFile(pathToFile);
    console.log(contentInFile);
  } catch {
    throw new Error("FS operation failed");
  }
};

await read();
