import express, { Application } from "express";
import expenseRouter from "./router/expenseRouter";

const app: Application = express();
const PORT: number = 4400;

app.use("/api/expenses", expenseRouter);

app.listen(PORT, () => {
  console.log("Application run on port :", PORT);
});
