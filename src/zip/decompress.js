import { createReadStream, createWriteStream } from "fs";
import { createUnzip } from "zlib";
import { pipeline } from "stream/promises";

const decompress = async () => {
  const readable = createReadStream("src/zip/files/archive.gz/");
  const writable = createWriteStream("src/zip/fileToCompress.txt");
  const unzip = createUnzip();
  await pipeline(readable, unzip, writable);
};

await decompress();
