// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Collaborative Planning Controller
export const collaborativePlanningController = {
    // Function to coordinate tasks within a project
    async coordinateTasks(req, res) {
      try {
        const id = req.params.id;
        const tasks = await prisma.task.findMany({
          where: { id },
          include: { assignedTo: true }
        });
        res.json(tasks);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
      }
    },
  
    // Function to share ideas for a project
    async shareIdeas(req, res) {
      try {
        const id = req.params.id;
        const { idea } = req.body;
        const newIdea = await prisma.idea.create({
          data: { projectId:id, description: idea }
        });
        res.json(newIdea);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
      }
    },
  
    // Function to assign tasks to a user
    async assignTask(req, res) {
      try {
        const { taskId, userId } = req.body;
        const updatedTask = await prisma.task.update({
          where: { id: taskId },
          data: { assignedToId: userId }
        });
        res.json(updatedTask);
      } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
      }
    }
  };
  