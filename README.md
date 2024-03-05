# MVC-Tech-Blog
## Badges
  [![Apache license](https://img.shields.io/badge/License-Apache-brightgreen.svg)](http://www.apache.org/licenses/LICENSE-2.0)

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions?](#questions)

  ## Description
  This application is for the tech goers who would like a space to post about code, technology, and anything relating to development.
  Users will even be able to see other user's posts and comments, and have the freedom to interact with eachother.  
  This application gives users the ability to store created content, comment on others posts, and edit or delete their own posts.

  Once the user arrives to the homepage, users will have the ability to see posts without needing an account. Once the user decides 
  to begin interacting with posts and comments, they will be directed to the login page to either login, or create an account.

  Cookies are used to provide a secure profile. Passwords are hashed through a bcrypt dependency before being entered into the mysql database.
  
  Please see the Usage section as a guide on how to use the Tech Blog.

  ## Installation
  1. To install this application, please copy the ssh link from the repo, and paste it using git clone.

  2. Then use your terminal to install the dependencies necessary for the application. To do this, type in your terminal "npm i"

  3. Add a .env file in the root directory of your repository. Here you will need to pass in the database name, your mysql username, and your mysql password. Please be sure to complete this before running the application.

  4. Next you will need to source the database located within the schema file. To do this, type "mysql -u root -p" in your terminal. Type in your password when prompted, and then type "source db/schema.sql". After this is completed, type "quit"

  5. From here, you can run the application by typing in the terminal "npm start"



  ## Usage
    This is a front-end user interface application. The user has the freedom to navigate to login, home, or the dashboard. Once the user is logged in, they will then be presented with the option to log out. 
 

  ## License
  
    This project is covered under the Apache license. To learn more about what this means, click the license button at the top.
  http://www.apache.org/licenses/LICENSE-2.0

  ## Contributing
  [Contributor Covenant](https://www.contributor-covenant.org/)  
  To contribute to this project, clone the repo, and then create a new branch. Once you have made your necessary edits, then push to submit a pull request. The contribution will be merged to the main branch after being tested and approved

  ## Tests
  You may test this application using your own information. 

  ## Questions?
  ### Please reach me here: 
  [My GitHub: Jpalomo92](https://github.com/Jpalomo92)  
  Jpalomo92@gmail.com