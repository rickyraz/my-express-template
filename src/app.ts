import "./configs/app_config.js";
import express, { type Request, type Response } from "express";

const app = express();
const port = process.env.PORT;

app.get("/", async (req: Request, res: Response) => {
	res.send("test");
});

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
