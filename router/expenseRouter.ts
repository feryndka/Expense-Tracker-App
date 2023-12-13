import express, { Router, Request, Response } from "express";
import axios from "axios";

const router: Router = express.Router();

router.get("/:id?", async (req: Request, res: Response) => {
  try {
    const { id } = req.params || ''
    const apiUrl = id ? `http://localhost:3000/expenses/${id}` : "http://localhost:3000/expenses"
    
    const expenses = await axios.get(apiUrl);
    res.status(200).send({
      message : "success",
      data : expenses.data
    });
  } catch (err) {
    res.status(500).send({
      message: JSON.stringify(err)
    });
  }
});

router.post("/", async (req: Request, res: Response) => {
  try {
    const { name, nominal, category } = req.body

    const expenses = await axios.post("http://localhost:3000/expenses", {
      name : name,
      nominal : nominal,
      category : category
    });
    res.status(200).send({
      message : "success",
      data : expenses.data
    });
  } catch (err : any) {
    res.status(500).send({
      message: JSON.stringify(err?.message)
    });
  }
});

router.put("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { name, nominal, category } = req.body

    const expenses = await axios.put(`http://localhost:3000/expenses/${id}`, {
      name, nominal, category
    });
    res.status(200).send({
      message : "success",
      data : expenses.data
    });
  } catch (err : any) {
    res.status(500).send({
      message: JSON.stringify(err?.message)
    });
  }
});

router.delete("/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const expenses = await axios.delete(`http://localhost:3000/expenses/${id}`);
    res.status(200).send({
      message : "success",
      data : expenses.data
    });
  } catch (err : any) {
    res.status(500).send({
      message: JSON.stringify(err?.message)
    });
  }
});

export default router;
