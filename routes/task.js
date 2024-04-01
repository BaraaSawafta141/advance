import express from "express";
import { taskController } from "../controllers/task.js";

const taskRoutes = express.Router();

// Create a new task
taskRoutes.post("/", taskController.createTask);

// Get all tasks
taskRoutes.get("/", taskController.getAllTasks);

// Get a task by ID
taskRoutes.get("/:id", taskController.getTaskById);

// Update a task by ID
taskRoutes.put("/:id", taskController.updateTask);

// Delete a task by ID
taskRoutes.delete("/:id", taskController.deleteTask);

export default taskRoutes;
