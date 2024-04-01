// Import PrismaClient
import { PrismaClient } from "@prisma/client";

// Create a new instance of PrismaClient
const prisma = new PrismaClient();

// Resource Sharing Controller
export const resourceSharingController = {
  // Get all available materials and tools
  async getAllResources(req, res) {
    try {
      const allResources = await prisma.resource.findMany();
      res.status(200).json(allResources);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Create a new resource
  async createResource(req, res) {
    try {
      const { name, description, quantity, ownerId } = req.body;
      const newResource = await prisma.resource.create({
        data: {
          name,
          description,
          quantity,
          owner: { connect: { id: ownerId } }, // Connect the resource to the owner user
        },
      });
      res.status(201).json(newResource);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Delete a resource by ID
  async deleteResource(req, res) {
    try {
      const resourceId = parseInt(req.params.id);
      await prisma.resource.delete({
        where: {
          id: resourceId
        }
      });
      res.status(200).send("Resource deleted successfully");
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Get a resource by ID
  async getResourceByID(req, res) {
    try {
      const resourceId = parseInt(req.params.id);
      const resource = await prisma.resource.findUnique({
        where: {
          id: resourceId
        }
      });
      if (!resource) {
        return res.status(404).send("Resource not found");
      }
      res.status(200).json(resource);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  },

  // Update a resource by ID
  async updateResource(req, res) {
    try {
      const resourceId = parseInt(req.params.id);
      const { name, description, quantity } = req.body;
      const updatedResource = await prisma.resource.update({
        where: {
          id: resourceId
        },
        data: {
          name,
          description,
          quantity,
        }
      });
      res.status(200).send(updatedResource);
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
};
