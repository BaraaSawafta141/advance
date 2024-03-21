import express from "express";
import { showcaseSharingController } from "../controllers/finished_project.js";

const showcaseSharingRoutes = express.Router();

// Get all finished projects
showcaseSharingRoutes.get("/", showcaseSharingController.getAllProjects);

// Create a new project
showcaseSharingRoutes.post("/", showcaseSharingController.createProject);

// Delete a project by ID
showcaseSharingRoutes.delete("/:id", showcaseSharingController.deleteProject);

// Get a project by ID
showcaseSharingRoutes.get("/:id", showcaseSharingController.getProjectByID);

// Update a project by ID
showcaseSharingRoutes.put("/:id", showcaseSharingController.updateProject);

export default showcaseSharingRoutes;
