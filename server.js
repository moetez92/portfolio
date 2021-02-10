const express = require('express');
const app = express();
const connectDB = require("./config/db");
const port=process.env.PORT || 5000
connectDB();

app.use(express.json({extended:false}))
app.use("/api/user",require("./routes/user"));
app.use("/api/project",require("./routes/project"));
app.use("/api/auth",require("./routes/auth"));
app.listen(port,()=>console.log("server is running correctly"));