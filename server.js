const express = require('express');
const app = express();
const port = 3000;

// JSON variable containing the glossary data
const glossary = [
  { id: 1, term: "DevOps", description: "DevOps is a combination of development (Dev) and operations (Ops) practices...", references: "https://en.wikipedia.org/wiki/DevOps" },
  { id: 2, term: "Continuous Integration (CI)", description: "Continuous Integration is a practice where developers regularly merge their code changes...", references: "https://en.wikipedia.org/wiki/Continuous_integration" },
  { id: 3, term: "Continuous Delivery (CD)", description: "Continuous Delivery is an extension of continuous integration...", references: "https://en.wikipedia.org/wiki/Continuous_delivery" },
  { id: 4, term: "Infrastructure as Code (IaC)", description: "Infrastructure as Code is the practice of managing and provisioning IT infrastructure...", references: "https://en.wikipedia.org/wiki/Infrastructure_as_code" },
  { id: 5, term: "Docker", description: "Docker is a platform that enables developers to create, deploy, and run applications...", references: "https://en.wikipedia.org/wiki/Docker_(software)" },
  { id: 6, term: "Microservices", description: "Microservices is an architectural style that structures an application as a collection of small, loosely coupled services...", references: "https://en.wikipedia.org/wiki/Microservices" },
  { id: 7, term: "Kubernetes", description: "Kubernetes is an open-source platform designed to automate the deployment, scaling, and management of containerized applications...", references: "https://en.wikipedia.org/wiki/Kubernetes" },
  { id: 8, term: "Agile Methodology", description: "Agile Methodology refers to a set of principles for software development that emphasizes flexibility, collaboration, and customer-centricity...", references: "https://en.wikipedia.org/wiki/Agile_software_development" },
  { id: 9, term: "Version Control System (VCS)", description: "A Version Control System is a tool that helps developers manage changes to source code over time...", references: "https://en.wikipedia.org/wiki/Version_control" },
  { id: 10, term: "Configuration Management", description: "Configuration Management is the practice of systematically managing and maintaining the consistency of a system's performance...", references: "https://en.wikipedia.org/wiki/Configuration_management" },
  //week 2
  {
    id: 11,
    term: "Git",
    description: "Git is a distributed version control system that allows multiple developers to collaborate on a codebase simultaneously. Git tracks changes to source code over time, enables branching and merging workflows, and provides a complete history of a project's development.",
    references: "https://en.wikipedia.org/wiki/Git"
  },
  {
    id: 12,
    term: "Jenkins",
    description: "Jenkins is an open-source automation server that supports continuous integration and continuous delivery pipelines. Jenkins enables developers to automate build, test, and deployment processes.",
    references: "https://en.wikipedia.org/wiki/Jenkins_(software)"
  },
  {
    "id": 13,
    "term": "Ansible",
    "description": "Ansible is an open-source configuration management and automation tool that allows developers to define infrastructure as code through declarative YAML files.",
    "references": "https://en.wikipedia.org/wiki/Ansible_(software)"
  },
  {
    "id": 14,
    "term": "Monitoring",
    "description": "Monitoring in the context of DevOps refers to the practice of observing and gathering data from various components of a system to ensure its health, performance, and availability.",
    "references": "https://en.wikipedia.org/wiki/Network_monitoring"
  },
  {
    "id": 15,
    "term": "Microservices",
    "description": "Microservices is an architectural style where an application is composed of small, independently deployable services that communicate over well-defined APIs.",
    "references": "https://en.wikipedia.org/wiki/Microservices"
  },
  {
    "id": 16,
    "term": "Version Control",
    "description": "Version Control is the practice of tracking changes to files and documents, enabling multiple people to collaborate on a project while keeping a history of changes.",
    "references": "https://en.wikipedia.org/wiki/Version_control"
  },
];


// Serving static files from the "public" directory
app.use(express.static('public'));

// Endpoint to serve the main HTML file
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Endpoint to serve the glossary data as JSON
app.get('/glossary', (req, res) => {
  res.json(glossary);
});

// Starting the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});