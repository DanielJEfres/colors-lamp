## COLORS Application Welcome to the COLORS app! 

This project is a full-stack LAMP application built as part of my COP 4331 coursework. The app allows users to securely log in and manage a personal collection of colors. Saved colors live in a remote database and stay accessible across sessions. 

## Technologies Used 

This project runs on the classic LAMP stack: 
- Linux (Ubuntu 24.04) – The operating system powering the DigitalOcean Droplet 
- Frontend – HTML5, CSS3, and JavaScript were used for styling, API async calls, and dynamic DOM updates 
- Backend – PHP was used to build RESTful API endpoints and connect everything together 
- MySQL – Relational database storing user credentials and data on colors 
- Apache – The web server serving the frontend and handling all the HTTP requests 

## Setup:

1. Install a LAMP stack (Linux, Apache, MySQL, PHP)
2. Clone this repository into your web root directory
3. Create a MySQL database for the project
4. Import the provided schema (users + colors tables)
5. Create a .env file with your DB credentials:
   DB_HOST=localhost
   DB_USER=youruser
   DB_PASS=yourpass
   DB_NAME=colorsdb
6. Start Apache and MySQL
7. Open http://localhost/public/index.html


## How to use App 

- Register or log in to your account
- Manage Colors: After logging in, add colors or search for existing ones 
- Test Persistence: Add a color, close your browser, and it will still be there when you return later 

## Limitations Single-Server Architecture:

- The web server and database server are hosted on the same machine (localhost connection) 
- Case Sensitivity: Since the app runs on a Linux droplet, all file paths and API endpoints are case-sensitive 
- HTTP Deployment: This version is intended for demonstration purposes and currently does not run on HTTPS