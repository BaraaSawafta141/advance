import express from "express";
import { testController } from "../controllers/test.js";

const test = express.Router();

// Get Routes
test.get("/", testController.getAllUsers); // Route to get all users

// Post Routes
test.post("/", testController.createUser); // Route to create a new user

// Delete Routes
test.delete("/:id", testController.deleteUser); // Route to delete a user by ID

// Update Routes
test.put("/:id", testController.updateUser); // Route to update a user by ID

export default test;
