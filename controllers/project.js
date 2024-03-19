// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Define projectController object
export const projectController = {
  // Create a new project
  async createProject(req, res) {
    try {
      const { title, description, finished, difficulty, groupSize, skills, materials, ownerId } = req.body;
      const existingUser = await prisma.user.findUnique({
        where: {
          id: ownerId
        }
      });

      if (existingUser) {
        const newProject = await prisma.project.create({
            data: {
              title,
              description,
              finished: finished || false,
              difficulty,
              groupSize,
              materials,
              owner: { connect: { id: ownerId } }, // Connect the project to the owner user
              collaborators: { connect: { id: ownerId } }, // Add the owner user as a collaborator
              // You can handle the skills and tasks association here
            }
          });
          //res.status(201).json(newProject);
        return res.status(200).send("project created successfully");
      }
      else{
        return res.status(404).send("user not found");
      }
  
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Get all projects
  async getAllProjects(req, res) {
    try {
      const allProjects = await prisma.project.findMany();
      res.status(200).json(allProjects);
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
        include: { owner: true, collaborators: true, skills: true, tasks: true }
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
      const { title, description, finished, difficulty, groupSize, skills, materials } = req.body;
      const updatedProject = await prisma.project.update({
        where: { id: projectId },
        data: {
          title,
          description,
          finished,
          difficulty,
          groupSize,
          materials,
          // You can handle updating skills and tasks association here
        }
      });
      res.status(200).json(updatedProject);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Delete a project by ID
  async deleteProject(req, res) {
    try {
      const projectId = parseInt(req.params.id);
      await prisma.project.delete({ where: { id: projectId } });
      res.status(200).send("Project deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
};
