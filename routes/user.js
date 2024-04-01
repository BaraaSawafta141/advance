import express from "express";
import { userController } from "../controllers/user.js";

const user = express.Router();

// Get Routes
user.get("/", userController.getAllUsers); // Route to get all users

// Get Routes
user.get("/:id", userController.getUserByID); //  get  user by id

// Post Routes
user.post("/", userController.createUser); // Route to create a new user

// Delete Routes
user.delete("/:id", userController.deleteUser); // Route to delete a user by ID

// Update Routes
user.put("/:id", userController.updateUser); // Route to update a user by ID

export default user;
