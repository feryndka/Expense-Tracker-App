import express, { Application } from "express";
import bodyParser from "body-parser";
import expenseRouter from "./router/expenseRouter";

const app: Application = express();
const PORT: number = 4400;

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use("/api/expenses", expenseRouter);

app.listen(PORT, () => {
  console.log("Application run on port :", PORT);
});
