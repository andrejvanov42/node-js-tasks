import { Transform } from "node:stream";
import { pipeline } from "node:stream/promises";

const transform = async () => {
  const readble = process.stdin;
  const writable = process.stdout;
  const reverseText = new Transform({
    transform(chunk, enc, callback) {
      const chunkStringified = chunk.toString().trim();
      const reversedText = chunkStringified.split("").reverse().join("");
      callback(null, reversedText + "\n");
    },
  });
  await pipeline(readble, reverseText, writable);
};

await transform();
