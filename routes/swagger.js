/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       required:
 *         - description
 *         - projectId
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The auto-generated ID of the task
 *         description:
 *           type: string
 *           description: Description of the task
 *         assignedTo:
 *           $ref: '#/components/schemas/User'
 *           description: The user assigned to the task
 *         projectId:
 *           type: integer
 *           format: int64
 *           description: ID of the project associated with the task
 *     User:
 *       type: object
 *       required:
 *         - username
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The auto-generated id of the user
 *         username:
 *           type: string
 *           description: The username of the user
 *         bio:
 *           type: string
 *           description: The biography of the user
 *         skills:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *           description: The skills associated with the user
 *         projects:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Project'
 *           description: The projects associated with the user
 *         assignedTasks:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *           description: The tasks assigned to the user
 *         collaboratingProjects:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Project'
 *           description: The projects the user is collaborating on
 *         resources:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Resource'
 *           description: The resources associated with the user
 *     Project:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - ownerId
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The auto-generated id of the project
 *         title:
 *           type: string
 *           description: The title of the project
 *         description:
 *           type: string
 *           description: The description of the project
 *         finished:
 *           type: boolean
 *           description: Indicates whether the project is finished
 *         difficulty:
 *           type: string
 *           description: The difficulty level of the project
 *         groupSize:
 *           type: integer
 *           description: The size of the group working on the project
 *         skills:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Skill'
 *           description: The skills required for the project
 *         materials:
 *           type: string
 *           description: The materials required for the project
 *         owner:
 *           $ref: '#/components/schemas/User'
 *           description: The owner of the project
 *         collaborators:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 *           description: The users collaborating on the project
 *         tasks:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Task'
 *           description: The tasks associated with the project
 *         ideas:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Idea'
 *           description: The ideas associated with the project
 *     Resource:
 *       type: object
 *       required:
 *         - name
 *         - ownerId
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The auto-generated id of the resource
 *         name:
 *           type: string
 *           description: The name of the resource
 *         description:
 *           type: string
 *           description: The description of the resource
 *         quantity:
 *           type: integer
 *           description: The quantity of the resource
 *         owner:
 *           $ref: '#/components/schemas/User'
 *           description: The owner of the resource
 * /user:
 *   get:
 *     summary: Lists all the users
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: The list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The created user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       500:
 *         description: Some server error
 * /user/{id}:
 *   get:
 *     summary: Get a user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the user to get
 *     responses:
 *       200:
 *         description: The user response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *   put:
 *     summary: Update a user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       200:
 *         description: The updated user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: The user was not found
 *   delete:
 *     summary: Delete a user by id
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the user to delete
 *     responses:
 *       200:
 *         description: The user was deleted
 *       404:
 *         description: The user was not found
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Skill:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the skill
 *         skill_type:
 *           type: string
 *           description: Type of the skill
 *         skill_description:
 *           type: string
 *           description: Description of the skill
 *         projects:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/Project'
 *           description: The projects associated with the skill
 *         users:
 *           type: array
 *           items:
 *             $ref: '#/components/schemas/User'
 *           description: The users associated with the skill
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Task:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the task
 *         description:
 *           type: string
 *           description: Description of the task
 *         assignedTo:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: ID of the user the task is assigned to
 *             name:
 *               type: string
 *               description: Name of the user the task is assigned to
 *     Idea:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the idea
 *         description:
 *           type: string
 *           description: Description of the idea
 *         project:
 *           type: object
 *           properties:
 *             id:
 *               type: integer
 *               description: ID of the project associated with the idea
 *             title:
 *               type: string
 *               description: Title of the project associated with the idea
 *             description:
 *               type: string
 *               description: Description of the project associated with the idea
 *             finished:
 *               type: boolean
 *               description: Indicates whether the project associated with the idea is finished
 *             difficulty:
 *               type: string
 *               description: Difficulty level of the project associated with the idea
 *             groupSize:
 *               type: integer
 *               description: Size of the group working on the project associated with the idea
 *             skills:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Skill'
 *               description: Skills required for the project associated with the idea
 *             materials:
 *               type: string
 *               description: Materials required for the project associated with the idea
 */
/**
 * @swagger
 * /weather/{city}:
 *   get:
 *     summary: Get weather data for a specific city
 *     tags: [Weather]
 *     parameters:
 *       - in: path
 *         name: city
 *         schema:
 *           type: string
 *         required: true
 *         description: The name of the city to get weather data for
 *     responses:
 *       200:
 *         description: Weather data for the specified city
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 location:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       description: The name of the city
 *                     region:
 *                       type: string
 *                       description: The region of the city
 *                     country:
 *                       type: string
 *                       description: The country of the city
 *                     lat:
 *                       type: number
 *                       description: The latitude coordinate of the city
 *                     lon:
 *                       type: number
 *                       description: The longitude coordinate of the city
 *                     tz_id:
 *                       type: string
 *                       description: The timezone identifier of the city
 *                     localtime:
 *                       type: string
 *                       description: The local time of the city
 *                 current:
 *                   type: object
 *                   properties:
 *                     last_updated:
 *                       type: string
 *                       description: The last time the data was updated
 *                     temp_c:
 *                       type: number
 *                       description: The temperature in Celsius
 *                     temp_f:
 *                       type: number
 *                       description: The temperature in Fahrenheit
 *                     condition:
 *                       type: object
 *                       properties:
 *                         text:
 *                           type: string
 *                           description: The weather condition description
 *                         icon:
 *                           type: string
 *                           description: The URL to the weather icon
 *       500:
 *         description: Internal server error
 */
/**
 * @swagger
 * definitions:
 *   Task:
 *     type: object
 *     required:
 *       - description
 *       - projectId
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *         description: The auto-generated ID of the task
 *       description:
 *         type: string
 *         description: Description of the task
 *       assignedTo:
 *         $ref: '#/definitions/User'
 *         description: The user assigned to the task
 *       projectId:
 *         type: integer
 *         format: int64
 *         description: ID of the project associated with the task
 * /task:
 *   post:
 *     summary: Create a new task
 *     tags:
 *       - Tasks
 *     parameters:
 *       - in: body
 *         name: body
 *         description: Task object that needs to be added
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Task'
 *     responses:
 *       '201':
 *         description: Task created successfully
 *         schema:
 *           $ref: '#/definitions/Task'
 *       '500':
 *         description: Internal server error
 *   get:
 *     summary: Get all tasks
 *     tags:
 *       - Tasks
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Task'
 * /task/{id}:
 *   get:
 *     summary: Get a task by ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the task to return
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/Task'
 *       '404':
 *         description: Task not found
 *   put:
 *     summary: Update a task by ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the task to update
 *         required: true
 *         type: integer
 *         format: int64
 *       - in: body
 *         name: body
 *         description: Task object that needs to be updated
 *         required: true
 *         schema:
 *           $ref: '#/definitions/Task'
 *     responses:
 *       '200':
 *         description: Task updated successfully
 *         schema:
 *           $ref: '#/definitions/Task'
 *       '404':
 *         description: Task not found
 *   delete:
 *     summary: Delete a task by ID
 *     tags:
 *       - Tasks
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the task to delete
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       '200':
 *         description: Task deleted successfully
 *       '404':
 *         description: Task not found
 */
/**
 * @swagger
 * definitions:
 *   Task:
 *     type: object
 *     required:
 *       - description
 *       - projectId
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *         description: The auto-generated ID of the task
 *       description:
 *         type: string
 *         description: Description of the task
 *       assignedTo:
 *         $ref: '#/definitions/User'
 *         description: The user assigned to the task
 *       projectId:
 *         type: integer
 *         format: int64
 *         description: ID of the project associated with the task
 *   Idea:
 *     type: object
 *     required:
 *       - description
 *       - projectId
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *         description: The auto-generated ID of the idea
 *       description:
 *         type: string
 *         description: Description of the idea
 *       projectId:
 *         type: integer
 *         format: int64
 *         description: ID of the project associated with the idea
 * /projects/{projectId}/task:
 *   get:
 *     summary: Get tasks within a project
 *     tags:
 *       - Planning
 *     parameters:
 *       - name: projectId
 *         in: path
 *         description: ID of the project to get tasks for
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Task'
 * /projects/{projectId}/ideas:
 *   post:
 *     summary: Share an idea for a project
 *     tags:
 *       - Planning
 *     parameters:
 *       - name: projectId
 *         in: path
 *         description: ID of the project to share idea for
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Idea'
 *     responses:
 *       '200':
 *         description: Idea shared successfully
 *         schema:
 *           $ref: '#/definitions/Idea'
 *       '500':
 *         description: Internal server error
 * /task/assign:
 *   put:
 *     summary: Assign a task to a user
 *     tags:
 *       - Planning
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - taskId
 *               - userId
 *             properties:
 *               taskId:
 *                 type: integer
 *                 format: int64
 *                 description: ID of the task to be assigned
 *               userId:
 *                 type: integer
 *                 format: int64
 *                 description: ID of the user to whom the task will be assigned
 *     responses:
 *       '200':
 *         description: Task assigned successfully
 *         schema:
 *           $ref: '#/definitions/Task'
 *       '500':
 *         description: Internal server error
 */
/**
 * @swagger
 * definitions:
 *   Project:
 *     type: object
 *     required:
 *       - title
 *       - description
 *       - difficulty
 *       - groupSize
 *       - ownerId
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *         description: The auto-generated ID of the project
 *       title:
 *         type: string
 *         description: Title of the project
 *       description:
 *         type: string
 *         description: Description of the project
 *       finished:
 *         type: boolean
 *         description: Indicates if the project is finished
 *       difficulty:
 *         type: string
 *         description: Difficulty level of the project
 *       groupSize:
 *         type: integer
 *         format: int32
 *         description: Group size required for the project
 *       materials:
 *         type: string
 *         description: Materials required for the project
 *       owner:
 *         $ref: '#/definitions/User'
 *         description: Owner of the project
 *       collaborators:
 *         type: array
 *         items:
 *           $ref: '#/definitions/User'
 *         description: Collaborators associated with the project
 *       skills:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Skill'
 *         description: Skills required for the project
 *       tasks:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Task'
 *         description: Tasks associated with the project
 *       ideas:
 *         type: array
 *         items:
 *           $ref: '#/definitions/Idea'
 *         description: Ideas shared for the project
 *   Idea:
 *     type: object
 *     required:
 *       - description
 *       - projectId
 *     properties:
 *       id:
 *         type: integer
 *         format: int64
 *         description: The auto-generated ID of the idea
 *       description:
 *         type: string
 *         description: Description of the idea
 *       projectId:
 *         type: integer
 *         format: int64
 *         description: ID of the project associated with the idea
 * /finished:
 *   get:
 *     summary: Get all finished projects
 *     tags:
 *       - Finished Projects
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *           type: array
 *           items:
 *             $ref: '#/definitions/Project'
 *   post:
 *     summary: Create a new project
 *     tags:
 *       - Finished Projects
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Project'
 *     responses:
 *       '201':
 *         description: Project created successfully
 *         schema:
 *           $ref: '#/definitions/Project'
 *       '500':
 *         description: Internal server error
 * /finished/{id}:
 *   get:
 *     summary: Get a project by ID
 *     tags:
 *       - Finished Projects
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the project to get
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       '200':
 *         description: OK
 *         schema:
 *           $ref: '#/definitions/Project'
 *       '404':
 *         description: Project not found
 *   put:
 *     summary: Update a project by ID
 *     tags:
 *       - Finished Projects
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the project to update
 *         required: true
 *         type: integer
 *         format: int64
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/definitions/Project'
 *     responses:
 *       '200':
 *         description: Project updated successfully
 *         schema:
 *           $ref: '#/definitions/Project'
 *       '500':
 *         description: Internal server error
 *   delete:
 *     summary: Delete a project by ID
 *     tags:
 *       - Finished Projects
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the project to delete
 *         required: true
 *         type: integer
 *         format: int64
 *     responses:
 *       '200':
 *         description: Project deleted successfully
 *       '500':
 *         description: Internal server error
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Project:
 *       type: object
 *       required:
 *         - title
 *         - description
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The auto-generated id of the project
 *         title:
 *           type: string
 *           description: The title of the project
 *         description:
 *           type: string
 *           description: Description of the project
 *         finished:
 *           type: boolean
 *           description: Indicates whether the project is finished
 *         difficulty:
 *           type: string
 *           description: The difficulty level of the project (beginner, intermediate, advanced)
 *         groupSize:
 *           type: integer
 *           format: int32
 *           description: The size of the group working on the project
 *         materials:
 *           type: string
 *           description: Materials required for the project
 *         owner:
 *           $ref: '#/components/schemas/User'
 *           description: The owner of the project
 *         collaborators:
 *           type: array
 *           description: Collaborators working on the project
 *           items:
 *             $ref: '#/components/schemas/User'
 *         tasks:
 *           type: array
 *           description: Tasks associated with the project
 *           items:
 *             $ref: '#/components/schemas/Task'
 *         ideas:
 *           type: array
 *           description: Ideas related to the project
 *           items:
 *             $ref: '#/components/schemas/Idea'
 * /project:
 *   get:
 *     summary: Lists all projects
 *     tags: [Projects]
 *     responses:
 *       200:
 *         description: The list of projects
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Project'
 *   post:
 *     summary: Create a new project
 *     tags: [Projects]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: The created project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       500:
 *         description: Some server error
 * /project/{id}:
 *   get:
 *     summary: Get a project by id
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the project to get
 *     responses:
 *       200:
 *         description: The project response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: The project was not found
 *   put:
 *     summary: Update a project by id
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the project to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Project'
 *     responses:
 *       200:
 *         description: The updated project
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Project'
 *       404:
 *         description: The project was not found
 *   delete:
 *     summary: Delete a project by id
 *     tags: [Projects]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the project to delete
 *     responses:
 *       200:
 *         description: The project was deleted
 *       404:
 *         description: The project was not found
 */
/**
 * @swagger
 * components:
 *   schemas:
 *     Resource:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - quantity
 *       properties:
 *         id:
 *           type: integer
 *           format: int64
 *           description: The auto-generated id of the resource
 *         name:
 *           type: string
 *           description: The name of the resource
 *         description:
 *           type: string
 *           description: Description of the resource
 *         quantity:
 *           type: integer
 *           format: int32
 *           description: Quantity of the resource
 *         owner:
 *           $ref: '#/components/schemas/User'
 *           description: The owner of the resource
 * /resources:
 *   get:
 *     summary: Lists all resources
 *     tags: [Resources]
 *     responses:
 *       200:
 *         description: The list of resources
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Resource'
 *   post:
 *     summary: Create a new resource
 *     tags: [Resources]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resource'
 *     responses:
 *       200:
 *         description: The created resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       500:
 *         description: Some server error
 * /resources/{id}:
 *   get:
 *     summary: Get a resource by id
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the resource to get
 *     responses:
 *       200:
 *         description: The resource response by id
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       404:
 *         description: The resource was not found
 *   put:
 *     summary: Update a resource by id
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the resource to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Resource'
 *     responses:
 *       200:
 *         description: The updated resource
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Resource'
 *       404:
 *         description: The resource was not found
 *   delete:
 *     summary: Delete a resource by id
 *     tags: [Resources]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *           format: int64
 *         required: true
 *         description: The id of the resource to delete
 *     responses:
 *       200:
 *         description: The resource was deleted
 *       404:
 *         description: The resource was not found
 */


import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';
const setupSwagger = (app) => {
    const options = {
        definition: {
            openapi: '3.0.0',
            info: {
                title: 'CommuniCraft Documentation',
                version: '1.0.0',
                description: 'CommuniCraft Documentation for the project',
            },
            servers: [
                { 
                    url: 'http://localhost:3000/' 
                },
            ],
        },
        // Path to the API routes files
        apis: ['./routes/*.js'],
    };
    const specs = swaggerJsdoc(options);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
};
export default setupSwagger;
