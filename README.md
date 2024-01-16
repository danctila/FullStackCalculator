 # Full Stack Grade Calculator

full-stack-grade-calculator is a project developed with React and Python to simulate the usage of a frontend using a backend via a custom API

## Project Screenshot

The calculator looks like this in a localhost development environment:

<img src="https://github.com/danctila/full-stack-grade-calculator/assets/134968796/80418ce6-6ddb-4482-b56a-4015dd1078c1" alt="grader" width="500"/>

## Installation

Close down this repository. You will need node, npm, and python installed globally on your machine.

To Start Server in command line:

``cd client
``

``npm run dev
``

To Open Local Server:

``https://localhost:xxxx``

To Start back end:

``cd flask-server
``

``python server.py``

## Usage
1. Enter grades into the input fields in either the standard mode or advanced mode (note that the assignment name is optional).

2. Choose the weight category for each assignment.

3. Press the = Calculate button

## Reflection

**- How is this different than my [calculator-frontend ](https://github.com/danctila/calculator-frontend "calculator-frontend ")project?**

While the inspiration remains the same, this project actually came before the frontend version. This project was designed to showcase my knowledge of multiple different concepts including but not limited to: API creation and usage, Frontend development in React, and Python usage.

**- What was the context for this project?**

A number of students at my high school including myself found it hard to understand the grading system of the school. I decided to set the goal of using modern technologies to solve the problem of this lack of knowledge amongst students and familiarize myself with the information necessary to create this application.

**- What did I end up building?**

My final product ended up as a simple front end with a basic UI for user input that can send data to a locally run server via python to run calculations based on a specific grading formula.

**- What tools did I use?**

My main development tool was React started with Vite. I used Chakra UI for my design work after developing mockups in Figma. Further into the codebase, most of the logic is implemented with TypeScript but the backend is run in Python with Flask. The Flask server is used to create an API POST endpoint to allow for communication between the client and server.

