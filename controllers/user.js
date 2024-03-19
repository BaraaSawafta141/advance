// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Define userController object
export const userController = {
  // Get all users
  async getAllUsers(req, res) {
    try {
      const allUsers = await prisma.user.findMany();
      res.status(200).json(allUsers);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Create a new user
  async createUser(req, res) {
    try {
      const { username, bio } = req.body;
      const existingUser = await prisma.user.findUnique({
        where: {
          username: username
        }
      });

      if (existingUser) {
        return res.status(400).send("Username already exists");
      }

      const newUser = await prisma.user.create({
        data: {
          username,
          bio,
        }
      });

      res.status(201).send(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Delete a user by ID
  async deleteUser(req, res) {
    try {
      const userId = parseInt(req.params.id);
      await prisma.user.delete({
        where: {
          id: userId
        }
      });
      res.status(200).send("User deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Get a user by ID
  async getUserByID(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const user = await prisma.user.findUnique({
        where: {
          id: userId
        }
      });
      if (!user) {
        return res.status(404).send("User not found");
      }
      res.status(200).json(user);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Update a user by ID
  async updateUser(req, res) {
    try {
      const userId = parseInt(req.params.id);
      const { username, bio } = req.body;
      const updatedUser = await prisma.user.update({
        where: {
          id: userId
        },
        data: {
          username,
          bio,
        }
      });
      res.status(200).send(updatedUser);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
};
