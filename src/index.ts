import express, { Application } from "express";
import mongoose from "mongoose";
import cors from "cors";
import syncTodos from "./services/syncServiceTasks";
import taskRoutes from "./routes/taskRoutes";

const app: Application = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Task manager");
});

app.use("/task", taskRoutes);

async function start() {
  try {
    await mongoose.connect("mongodb://localhost:27017/task");
    console.log("Connected to MongoDB");

    syncTodos();

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error("Failed to connect to MongoDB", error);
  }
}

start();
