import { createWriteStream } from "node:fs";
const write = async () => {
  const fileToWrirePath = "src/streams/files/fileToWrite.txt";
  process.stdin.pipe(createWriteStream(fileToWrirePath, "utf-8"));
};

await write();
