import express, { Router, Request, Response } from "express";
import axios from "axios";

const router: Router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  try {
    const expense = await axios.get("http://localhost:3000/expense");
    res.status(200).send({
      message : "success",
      data : expense.data
    });
  } catch (err) {
    res.status(500).send({
      message: err
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const expense = await axios.post("http://localhost:3000/expense");
    res.send(expense.data);
  } catch (err) {
    res.status(500).send({
      message: err,
    });
  }
});

export default router;
