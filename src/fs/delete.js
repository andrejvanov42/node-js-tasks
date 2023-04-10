import { rm as removeFile } from "fs/promises";
const remove = async () => {
  const filePath = "src/fs/files/fileToRemove.txt";
  try {
    await removeFile(filePath);
  } catch {
    throw new Error("FS operation failed");
  }
};

await remove();
