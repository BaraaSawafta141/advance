// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Showcase and Sharing Controller
export const showcaseSharingController = {
  // Get all finished projects
  async getAllProjects(req, res) {
    try {
      const finishedProjects = await prisma.project.findMany({
        where: { finished: true },
        include: { owner: true, collaborators: true, skills: true, tasks: true, ideas: true }
      });
      res.status(200).json(finishedProjects);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Create a new project
  async createProject(req, res) {
    try {
      const { title, description, finished, difficulty, groupSize, materials, ownerId } = req.body;
      const newProject = await prisma.project.create({
        data: {
          title,
          description,
          finished: finished || false,
          difficulty,
          groupSize,
          materials,
          owner: { connect: { id: ownerId } },
          collaborators: { connect: { id: ownerId } }
        }
      });
      res.status(201).json(newProject);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Delete a project by ID
  async deleteProject(req, res) {
    try {
      const projectId = parseInt(req.params.id);
      await prisma.project.delete({
        where: { id: projectId }
      });
      res.status(200).send("Project deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Get a project by ID
  async getProjectByID(req, res) {
    try {
      const projectId = parseInt(req.params.id);
      const project = await prisma.project.findUnique({
        where: { id: projectId },
        include: { owner: true, collaborators: true, skills: true, tasks: true, ideas: true }
      });
      if (!project) {
        return res.status(404).send("Project not found");
      }
      res.status(200).json(project);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Update a project by ID
  async updateProject(req, res) {
    try {
      const projectId = parseInt(req.params.id);
      const { title, description, finished, difficulty, groupSize, materials } = req.body;
      const updatedProject = await prisma.project.update({
        where: { id: projectId },
        data: { title, description, finished, difficulty, groupSize, materials }
      });
      res.status(200).json(updatedProject);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
};
