# fullstack-contest
This project is the code for a fullstack software developer coding challenge on the well known website for freelancers, which is freelancer.com. To run the project you will need to install node.js, npm and MySQL on your local machine. After, you should clone this repository or download the corresponding Zip file. Use a command line or Terminal and change the current working directory to the local project you have previously downloaded.

## Build the backend
If you've already MySQL installed, create a database with a name that you cannot forget. Then, follow these steps:
- From the project directory, go to **server** directory.
- In that directory, create a file named **.env** and copy paste the content of **.env.example** file into it.
- Just edit the params with the name of the created database, the user and password you're using with MySQL, the host you're using (localhost if it is a local machine) and the database type (mysql for instance).
- Run the command **npm install**.
- Run the command **node index.js** to start the backend.

## Build the frontend
For build and run the frontend, you should:
- From the project directory enter to the **client** directory.
- Run the command **npm install**
- Run the command **npm start**, open a web browser and enter **http://localhost:3000** to see the web interface and use it.
