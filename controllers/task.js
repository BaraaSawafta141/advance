// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Task Controller
export const taskController = {
  // Create a new task
  async createTask(req, res) {
    try {
      const { description, assignedToId, projectId } = req.body;
      const newTask = await prisma.task.create({
        data: {
          description,
          assignedToId,
          projectId,
        },
      });
      res.status(201).json(newTask);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Get all tasks
  async getAllTasks(req, res) {
    try {
      const allTasks = await prisma.task.findMany();
      res.status(200).json(allTasks);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Get a task by ID
  async getTaskById(req, res) {
    try {
      const taskId = parseInt(req.params.id);
      const task = await prisma.task.findUnique({
        where: { id: taskId },
      });
      if (!task) {
        return res.status(404).send("Task not found");
      }
      res.status(200).json(task);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Update a task by ID
  async updateTask(req, res) {
    try {
      const taskId = parseInt(req.params.id);
      const { description, assignedToId, projectId } = req.body;
      const updatedTask = await prisma.task.update({
        where: { id: taskId },
        data: {
          description,
          assignedToId,
          projectId,
        },
      });
      res.status(200).json(updatedTask);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Delete a task by ID
  async deleteTask(req, res) {
    try {
      const taskId = parseInt(req.params.id);
      await prisma.task.delete({
        where: { id: taskId },
      });
      res.status(200).send("Task deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },
};
