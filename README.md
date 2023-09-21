# KnowledgeAssesmentTool

## Description:

This Git repository contains the source code for a Quiz Web Application developed as a collaborative project by three students: `Md Monayem Islam`, `Mst Jubli Akter`, and `Maker Shihab`. The application is built using Java for the backend following OOP principles, MySQL for the database management system, and React.js for the frontend. Security features include JSON Web Tokens (JWT) using cookies for authentication and authorization. The project also includes a user interface design created on Figma.

## Backend Technology:

- Java with Object-Oriented Programming (OOP) principles
- Package structure for organization

## DBMS:

- MySQL database for data storage

## Frontend:

- React.js for building the user interface

## Security:

- JSON Web Tokens (JWT) using cookies for secure authentication

## Data Table Example:

Here's a simplified example of data tables for the MySQL database:

1. User Table:
   - user_id (Primary Key)
   - username
   - password (hashed)
   - email
2. Quiz Table:
   - quiz_id (Primary Key)
   - title
   - description
   - created_by (Foreign Key referencing User)
3. Question Table:
   - question_id (Primary Key)
   - text
   - quiz_id (Foreign Key referencing Quiz)
4. Option Table:
   - option_id (Primary Key)
   - text
   - question_id (Foreign Key referencing Question)
   - is_correct
5. QuizResult Table:
   - result_id (Primary Key)
   - user_id (Foreign Key referencing User)
   - quiz_id (Foreign Key referencing Quiz)
   - score
   - timestamp

## User Interface (Figma):

The user interface design for the project can be accessed on Figma via the following link: Figma Design []

## Project Collaborators:

- Md Monayem Islam
- Mst Jubli Akter
- Maker Shihab
