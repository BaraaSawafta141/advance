import express from "express";
import { resourceSharingController } from "../controllers/resource.js";

const resourceRoutes = express.Router();

// Get Routes
resourceRoutes.get("/", resourceSharingController.getAllResources); // Route to get all resources

// Post Routes
resourceRoutes.post("/", resourceSharingController.createResource); // Route to create a new resource

// Delete Routes
resourceRoutes.delete("/:id", resourceSharingController.deleteResource); // Route to delete a resource by ID

// Get a resource by ID
resourceRoutes.get("/:id", resourceSharingController.getResourceByID); // Route to get a resource by ID

// Update Routes
resourceRoutes.put("/:id", resourceSharingController.updateResource); // Route to update a resource by ID

export default resourceRoutes;
