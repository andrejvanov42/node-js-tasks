import { rename as renameAsync } from "fs/promises";
const rename = async () => {
  const oldName = "src/fs/files/wrongFilename.txt";
  const newName = "src/fs/files/properFilename.md";
  try {
    await renameAsync(oldName, newName);
  } catch {
    throw new Error("FS operation failed");
  }
};

await rename();
