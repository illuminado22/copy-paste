# Final Project: Portfolio Web Application with DevOps Automation

## Executive Summary

This project requires the creation of a static web application portfolio for each team member, accompanied by DevOps automation using Docker and Ansible. The web application serves as a digital portfolio to showcase academic works including homework assignments (HOAs), exams, and personal reflections. The DevOps component involves containerizing the application with Docker and orchestrating deployment across multiple virtual machines using Ansible playbooks.

**Note:** While the web application forms the core deliverable, grading focuses specifically on the implementation and usage of Docker and Ansible technologies. The web application itself does not require internet deployment.

---

## Table of Contents
I. [Project Overview](#project-overview)  
II. [Requirements](#requirements)  
&nbsp;&nbsp;&nbsp;&nbsp;2.1 [Web Application Specifications](#web-application-specifications)  
&nbsp;&nbsp;&nbsp;&nbsp;2.2 [Dockerfile Creation](#dockerfile-creation)  
&nbsp;&nbsp;&nbsp;&nbsp;2.3 [Ansible Playbook for Docker Image Creation](#ansible-playbook-for-docker-image-creation)  
&nbsp;&nbsp;&nbsp;&nbsp;2.4 [Ansible Playbook for Container Execution](#ansible-playbook-for-container-execution)  
&nbsp;&nbsp;&nbsp;&nbsp;2.5 [Deployment Environment](#deployment-environment)  
III. [Documentation Structure](#documentation-structure)  
IV. [Individual Member Submission](#individual-member-submission)  
V. [Grading Criteria](#grading-criteria)  

---

## Project Overview

This project combines full-stack web development with DevOps practices to create a complete deployment pipeline. Each team member will develop a personal portfolio website demonstrating their academic progress throughout the course. Simultaneously, they will implement infrastructure-as-code using Ansible to build Docker images and deploy containers across a heterogeneous virtual machine environment (1 CentOS VM and 2 Ubuntu VMs).

The separation of concerns allows members to focus on either frontend development or DevOps implementation, though collaboration is encouraged to ensure seamless integration between the web application and deployment pipeline.

---

## Requirements

### 2.1 Web Application Specifications
Create a static web application portfolio for each member containing:
- Prelim HOA (Homework Assignment)
- Midterm HOA
- Finals HOA
- Prelim Exam
- Midterm Exam
- Final Exam
- Reflection and Learnings

*The web application should be professionally designed, responsive, and effectively showcase each member's work.*

### 2.2 Dockerfile Creation
- Develop a Dockerfile that defines the container image for the web application
- The Dockerfile should optimize for size, security, and performance
- Include appropriate base images, dependency installation, and build steps

### 2.3 Ansible Playbook for Docker Image Creation
- Create an Ansible playbook that automates the Docker image build process
- The playbook should:
  - Copy the Dockerfile to target machines
  - Execute `docker build` commands
  - Handle image tagging and versioning
  - Include error handling and validation steps

### 2.4 Ansible Playbook for Container Execution
- Develop a separate Ansible playbook for running Docker containers
- The playbook should:
  - Deploy containers from built images
  - Configure port mapping and volume mounts as needed
  - Implement health checks and restart policies
  - Manage container lifecycle (start, stop, update)

### 2.5 Deployment Environment
Deploy the Dockerized application to:
- **1 CentOS Virtual Machine** (for testing compatibility with RHEL-based systems)
- **2 Ubuntu Virtual Machines** (for testing compatibility with Debian-based systems)
*Total: 3 virtual machines*

---

## Documentation Structure

The final project document (PDF) must include these sections:

**I. Title Page**  
- Project title, team members, course information, date

**II. Table of Contents**  
- Auto-generated table with page numbers

**III. Development of the Web Application**  
- Design choices, technologies used, implementation details
- Screenshots of the portfolio interface
- Code snippets demonstrating key features

**IV. Development of Ansible Playbook as well as Proofs**  
- Playbook architecture and design
- YAML code samples with explanations
- Proof of successful execution (logs, screenshots)

**V. Docker Containerization**  
- Dockerfile explanation and optimization techniques
- Image building process demonstration
- Security considerations and best practices

**VI. Proof of Collaboration**  
- Evidence of teamwork (commits, meeting notes, shared responsibilities)
- Conflict resolution and integration efforts

**VII. Video Explaining the Whole Process of Deployment**  
- Maximum 7 minutes duration
- Covers: web app development → Docker build → Ansible orchestration → deployment verification
- Clear narration and visual demonstrations

**VIII. Link to your Video**  
- YouTube URL (unlisted or public)
- Ensure accessibility for grading

**IX. (For each Individual Member)**  
- Detailed contribution breakdown
- Specific artifacts created (Ansible files? Web components? Docker configurations?)
- Screenshots with detailed explanations of individual work
- Personal reflection on challenges and learning outcomes

---

## Individual Member Submission

Each member must submit:
1. **Final Project Document** (in PDF format adhering to the structure above)
2. **Contribution Details** including:
   - Specific responsibility areas (Ansible File? Web app development? Dockerfile creation?)
   - Screenshots of proof with detailed explanations
   - Description of individual role in GREAT detail
   - Personal learning outcomes and challenges overcome

---

## Grading Criteria

**Primary Focus (100% of grade):**  
- Correct implementation and usage of **Ansible** for automation
- Proper application of **Docker** for containerization
- Quality of automation playbooks and container images
- Evidence of successful deployment across VM environment

**Not Graded:**  
- Aesthetic design or advanced features of the web application itself
- Public internet deployment of the web application
- Choice of frontend frameworks or styling libraries (unless specified)

**Evaluation will assess:**  
- Whether Ansible playbooks are idempotent and reusable
- Docker images are optimized and secure
- Deployment process is fully automated and documented
- Individual contributions are clearly identifiable and substantive

---

*This document provides the foundation for your project planning. Refer to your course syllabus and instructor communications for specific deadlines, evaluation rubrics, and additional requirements.*