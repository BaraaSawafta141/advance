import express from "express";
import { collaborativePlanningController } from "../controllers/planning.js";

const collaborativePlanningRoutes = express.Router();

// Route to coordinate tasks within a project
collaborativePlanningRoutes.get("/projects/:projectId/tasks", collaborativePlanningController.coordinateTasks);

// Route to share ideas for a project
collaborativePlanningRoutes.post("/projects/:projectId/ideas", collaborativePlanningController.shareIdeas);

// Route to assign tasks to a user
collaborativePlanningRoutes.put("/tasks/assign", collaborativePlanningController.assignTask);

export default collaborativePlanningRoutes;
