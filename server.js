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
  // 2 of 5 
  {
    "id": 11,
    "term": "Git",
    "description": "Git is a distributed version control system that allows multiple developers to collaborate on a codebase simultaneously. Git tracks changes to source code over time, enables branching and merging workflows, and provides a complete history of a project's development.",
    "references": "https://en.wikipedia.org/wiki/Git"
  },
  {
    "id": 12,
    "term": "Jenkins",
    "description": "Jenkins is an open-source automation server that supports continuous integration and continuous delivery pipelines. Jenkins enables developers to automate build, test, and deployment processes.",
    "references": "https://en.wikipedia.org/wiki/Jenkins_(software)"
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
  {
    "id": 17,
    "term": "Configuration Management",
    "description": "Configuration Management involves managing the configuration and settings of software and infrastructure in a consistent and automated manner.",
    "references": "https://en.wikipedia.org/wiki/Configuration_management"
},
{
    "id": 18,
    "term": "Scalability",
    "description": "Scalability refers to a system's ability to handle increasing workloads by efficiently adapting its resources.",
    "references": "https://en.wikipedia.org/wiki/Scalability"
},
{
    "id": 19,
    "term": "Immutable Infrastructure",
    "description": "Immutable Infrastructure is an approach where server instances are never modified after they are created; instead, they are replaced with updated versions.",
    "references": "https://en.wikipedia.org/wiki/Immutable_infrastructure"
},
{
    "id": 20,
    "term": "Load Balancing",
    "description": "Load Balancing is the distribution of incoming network traffic across multiple servers to optimize resource utilization, maximize performance, and ensure high availability.",
    "references": "https://en.wikipedia.org/wiki/Load_balancing_(computing)"
},
// 3 of 5 
{
  "id": 21,
  "term": "Automated Testing",
  "description": "Automated Testing involves the use of software tools to run tests that check the correctness and performance of an application automatically.",
  "references": "https://en.wikipedia.org/wiki/Test_automation"
},
{
  "id": 22,
  "term": "Deployment Pipeline",
  "description": "A Deployment Pipeline is an automated sequence of steps that takes code from version control to production, incorporating stages like build, test, and deployment.",
  "references": "https://en.wikipedia.org/wiki/Deployment_environment"
},
{
  "id": 23,
  "term": "DevSecOps",
  "description": "DevSecOps integrates security practices into the DevOps process, aiming for early identification and remediation of security vulnerabilities.",
  "references": "https://en.wikipedia.org/wiki/DevSecOps"
},
{
  "id": 24,
  "term": "Release Management",
  "description": "Release Management is the process of managing, planning, and scheduling the release of software updates.",
  "references": "https://en.wikipedia.org/wiki/Release_management"
},
{
  "id": 25,
  "term": "Site Reliability Engineering (SRE)",
  "description": "Site Reliability Engineering (SRE) is a discipline that incorporates aspects of software engineering and applies them to infrastructure and operations problems.",
  "references": "https://en.wikipedia.org/wiki/Site_Reliability_Engineering"
},
{
  "id": 26,
  "term": "Chaos Engineering",
  "description": "Chaos Engineering is the practice of intentionally injecting failures into systems to ensure they can withstand unexpected conditions.",
  "references": "https://en.wikipedia.org/wiki/Chaos_engineering"
},
{
  "id": 27,
  "term": "Rolling Deployment",
  "description": "Rolling Deployment is a software release strategy that stages the deployment of a new version across multiple servers, reducing downtime.",
  "references": "https://en.wikipedia.org/wiki/Software_deployment"
},
{
  "id": 28,
  "term": "Build Automation",
  "description": "Build Automation involves scripting or automating the process of compiling and building code into executable programs.",
  "references": "https://en.wikipedia.org/wiki/Build_automation"
},
{
  "id": 29,
  "term": "API Gateway",
  "description": "An API Gateway is a server that acts as an API front-end, aggregating various service requests and exposing them as a single API.",
  "references": "https://en.wikipedia.org/wiki/API_management"
},
{
  "id": 30,
  "term": "High Availability",
  "description": "High Availability refers to the design of systems and processes to ensure minimal service disruption and downtime.",
  "references": "https://en.wikipedia.org/wiki/High_availability"
},
// 4 of 5 
{
  "id": 31,
  "term": "Artifact Repository",
  "description": "An Artifact Repository is a centralized storage location for software artifacts, libraries, and dependencies.",
  "references": "https://en.wikipedia.org/wiki/Package_manager"
},
{
  "id": 32,
  "term": "Feature Flags",
  "description": "Feature Flags are a programming technique that allows toggling features on or off during runtime without changing the code.",
  "references": "https://en.wikipedia.org/wiki/Feature_toggle"
},
{
  "id": 33,
  "term": "Webhooks",
  "description": "Webhooks are automated HTTP callbacks used to trigger specific actions when a certain event occurs in a system.",
  "references": "https://en.wikipedia.org/wiki/Webhook"
},
{
  "id": 34,
  "term": "Continuous Feedback",
  "description": "Continuous Feedback involves regularly collecting and analyzing feedback from various stages of the software development lifecycle to improve processes and products.",
  "references": "https://en.wikipedia.org/wiki/Feedback"
},
{
  "id": 35,
  "term": "Performance Testing",
  "description": "Performance Testing is the process of evaluating the scalability, speed, and stability of a system under various conditions.",
  "references": "https://en.wikipedia.org/wiki/Software_performance_testing"
},
{
  "id": 36,
  "term": "Provisioning",
  "description": "Provisioning involves setting up and configuring the necessary hardware and software resources for applications to run.",
  "references": "https://en.wikipedia.org/wiki/Provisioning"
},
{
  "id": 37,
  "term": "Code Coverage",
  "description": "Code Coverage is a metric that measures the percentage of lines of code executed during automated tests.",
  "references": "https://en.wikipedia.org/wiki/Code_coverage"
},
{
  "id": 38,
  "term": "Fault Tolerance",
  "description": "Fault Tolerance is the ability of a system to continue functioning when part of it fails.",
  "references": "https://en.wikipedia.org/wiki/Fault_tolerance"
},
{
  "id": 39,
  "term": "Service Mesh",
  "description": "A Service Mesh is an infrastructure layer that handles service-to-service communication, often used in microservices architectures.",
  "references": "https://en.wikipedia.org/wiki/Service_mesh"
},
{
  "id": 40,
  "term": "Hotfix",
  "description": "A Hotfix is a small piece of code developed to correct a specific bug or security vulnerability in a live system.",
  "references": "https://en.wikipedia.org/wiki/Hotfix"
},
// 5 of 5 
{
  "id": 41,
  "term": "Infrastructure as a Service (IaaS)",
  "description": "Infrastructure as a Service (IaaS) is a form of cloud computing that provides virtualized computing resources over the internet.",
  "references": "https://en.wikipedia.org/wiki/Infrastructure_as_a_service"
},
{
  "id": 42,
  "term": "Platform as a Service (PaaS)",
  "description": "Platform as a Service (PaaS) is a cloud computing model that provides a platform for developers to build, deploy, and run applications.",
  "references": "https://en.wikipedia.org/wiki/Platform_as_a_service"
},
{
  "id": 43,
  "term": "Software as a Service (SaaS)",
  "description": "Software as a Service (SaaS) is a software licensing and delivery model in which software is provided over the Internet.",
  "references": "https://en.wikipedia.org/wiki/Software_as_a_service"
},
{
  "id": 44,
  "term": "Continuous Deployment",
  "description": "Continuous Deployment is an extension of continuous delivery, which automates the release of code changes to a production environment without manual intervention.",
  "references": "https://en.wikipedia.org/wiki/Continuous_delivery"
},
{
  "id": 45,
  "term": "Zero Downtime Deployment",
  "description": "Zero Downtime Deployment is a software release strategy that enables the application to remain available during the update process.",
  "references": "https://en.wikipedia.org/wiki/High_availability"
},
{
  "id": 46,
  "term": "Virtual Machine (VM)",
  "description": "A Virtual Machine (VM) is an emulation of a computer system that runs on a physical computer.",
  "references": "https://en.wikipedia.org/wiki/Virtual_machine"
},
{
  "id": 47,
  "term": "Containerization",
  "description": "Containerization involves packaging an application and its dependencies in a 'container' to ensure that it runs consistently in any environment.",
  "references": "https://en.wikipedia.org/wiki/OS-level_virtualization"
},
{
  "id": 48,
  "term": "Latency",
  "description": "Latency refers to the delay between a user's action and the response from the system, commonly measured in milliseconds.",
  "references": "https://en.wikipedia.org/wiki/Latency_(engineering)"
},
{
  "id": 49,
  "term": "Data Center",
  "description": "A Data Center is a facility that centralizes an organization's shared IT operations and equipment for storing, processing, and disseminating data.",
  "references": "https://en.wikipedia.org/wiki/Data_center"
},
{
  "id": 50,
  "term": "Business Continuity",
  "description": "Business Continuity involves planning and preparation to ensure that an organization can continue to operate in case of serious incidents or disasters.",
  "references": "https://en.wikipedia.org/wiki/Business_continuity"
}
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