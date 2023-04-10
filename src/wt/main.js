import { cpus } from "os";
import { Worker } from "worker_threads";
const createWorker = async (arrOfCp) => {
  let number = 10;
  return Promise.allSettled(
    arrOfCp.map(() => {
      return new Promise((resolve, reject) => {
        const worker = new Worker("./src/wt/worker.js", {
          workerData: number++,
        });
        worker.on("message", (msg) => resolve(msg));
        worker.on("error", (msg) => reject(msg));
      });
    })
  );
};
const performCalculations = async () => {
  const arrOfCp = cpus();
  const arrayOfWorkerAndValue = await createWorker(arrOfCp);
  const result = arrayOfWorkerAndValue.map(({ status, value }) => {
    if (status === "fulfilled") {
      return { status: "resolved", data: value };
    } else {
      return { status: "error", data: null };
    }
  });
  console.log(result);
};

await performCalculations();
