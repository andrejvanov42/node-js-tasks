import { createReadStream } from "node:fs";

const read = async () => {
  const fileToReadPath = "src/streams/files/fileToRead.txt";
  createReadStream(fileToReadPath).pipe(process.stdout);
};

await read();
