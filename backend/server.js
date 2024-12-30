const studentList=require("./testdata/studentlist.json")
const institutionlist =require("./testdata/institutionlist.json")
const express = require('express');
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Mock API endpoint
app.get('/api/students', (req, res) => {
  res.json(studentList);
});

app.get('/api/institutions', (req, res) => {
  res.json(institutionlist);
});

app.post('/api/institution/studentRoster', (req, res) => {
  res.json();
});
// Start the mock server
const PORT = 3080;
app.listen(PORT, () => {
  console.log(`Mock server running on http://localhost:${PORT}`);
});