import { readFile } from "fs/promises";
import { createHash } from "crypto";

const calculateHash = async () => {
  const pathToFile = "src/hash/files/fileToCalculateHashFor.txt";
  const dataToCalculateHash = await readFile(pathToFile);
  const hash = createHash("sha256").update(dataToCalculateHash).digest("hex");
  console.log(hash);
};

await calculateHash();
