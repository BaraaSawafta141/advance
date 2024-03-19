// Import statements
import express from "express";
import cors from "cors";
import user from "./routes/user.js"
import projectRoutes from "./routes/project.js"
// Create an Express app
const app = express();
app.use(cors());
app.use("/uploads", express.static("./images"));

// Middleware setup
app.use(express.json());

// Routes
app.use("/user",user);
app.use("/project",projectRoutes);

// Start the Express server
app.listen(3000, () => {
  console.log("server Starting at http://localhost:3000");
});




