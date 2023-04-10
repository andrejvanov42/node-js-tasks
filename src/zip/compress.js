import { createReadStream, createWriteStream } from "fs";
import { createGzip } from "zlib";
import { pipeline } from "stream/promises";

const compress = async () => {
  const readable = createReadStream("src/zip/files/fileToCompress.txt");
  const writable = createWriteStream("src/zip/files/archive.gz/");
  const gzip = createGzip();
  await pipeline(readable, gzip, writable);
};

await compress();
