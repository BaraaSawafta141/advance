import express from "express";
import cors from "cors";
import user from "./routes/user.js";
import taskRoutes from "./routes/task.js";
import collaborativePlanningRoutes from "./routes/planning.js";
import projectRoutes from "./routes/project.js";
import resourceRoutes from "./routes/resources.js";
import showcaseSharingRoutes from "./routes/finished_project.js";
import weather from "./routes/weatherapi.js";
import setupSwagger from './routes/swagger.js'; // Import the setupSwagger function

// Create an Express app
const app = express();
app.use(cors());
app.use("/uploads", express.static("./images"));

// Middleware setup
app.use(express.json());

// Routes
app.use("/user", user);
app.use("/project", projectRoutes);
app.use("/planning", collaborativePlanningRoutes);
app.use("/task", taskRoutes);
app.use("/resources", resourceRoutes);
app.use("/finished", showcaseSharingRoutes);
app.use("/weather", weather);
setupSwagger(app); // Call the setupSwagger function and pass the app instance

// Start the Express server
app.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
