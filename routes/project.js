import express from "express";
import { projectController } from "../controllers/project.js";

const projectRoutes = express.Router();

// Get all projects
projectRoutes.get("/", projectController.getAllProjects);

// Get a project by ID
projectRoutes.get("/:id", projectController.getProjectByID);

// Create a new project
projectRoutes.post("/", projectController.createProject);

// Update a project by ID
projectRoutes.put("/:id", projectController.updateProject);

// Delete a project by ID
projectRoutes.delete("/:id", projectController.deleteProject);

export default projectRoutes;
