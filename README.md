## Introduction

It is a simple contact app implemented with React and Redux as per the requirements given. The API service is built with Express and connected to MongoDB 

The app mainly shows - how to use Redux and basic concepts (action, reducer and store) of Redux. The data is fectched via APIs and the state held within the store is updated. The React container components can actively seek out the data in the state and can pass down data as props to React presentational component to render the user interface. 


## Installation

`npm install`


## dependencies

`npm --save install axios` for axios (to retrieve the data via API and use   it to render  something to the user - interface).Axios is a Promise-based HTTP client for JavaScript which can be used in the front-end application and in Node.js backend. By using Axios it’s easy to send asynchronous HTTP request to REST endpoints and perform CRUD operations.
`npm install express-generator -g` (The Express Generator is a command line  tool that will help us initialize a new Express app quite easily)
`npm install --save-dev nodemon` for nodemon (Nodemon will listen for        changes in our code and will restart our Express server if changes are      made to it)
`npm install mongoose --save` (Mongoose provides a means to work with        MongoDB via code)



### Running Dev Server

Use `npm start` or `npm run dev` command to start the dev server.

# UI runs on the below port:

http://localhost:3000


# The http server is created on port 8080. 
For that, change the directory to `contact_service` on the terminal and run the below commands:
- `npm start`
- `npm run dev`
http server runs on http://localhost:8080



# intuit-contacts-manager
This will make managing contacts a breeze...

By Rekha, for Intuit- as a take home programming challenge.

# Designing the Application
This application will be built using modern front-end tools and technologies
The back-end will be managed by MongoDB.

### Technologies:
 1. ES6: the language in which the project is written in
 2. Node: the environment the code gets executed in
 3. Webpack: the file bundler when building the project
 4. ReactJS: the front-end framework used to design the user interface
 5. Redux: the state management library to handle data
 6. MongoDB: external database to be interacted with. It is a fullfledged       Database
 7. Node.js: allows us to write server-side applications in JavaScript
 8. Express.js: a Node.js framework that leverages off the foundation of        Node.js (just as React leverages off the foundation of JavaScript) in       order to make it easier for us to write robust APIs with good               performance.
 
### Supporting Libraries
 1. Lodash: an utility library to work with data in javascript
 2. Bootstrap: the components used to interact with the web page ( menu's,      buttons, inputfields)
  
  
  
# Learning the technologies

## For Extended Requirements to connect to DB through API:
1. Referred https://medium.com/coding-artist/redux-from-scratch-chapter-7-building-an-api-service-with-express-js-mongodb-3bde96e1f45b
2. Revisited few concepts in React and Redux (action creators, reducers etc)
3. Axios(https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237)
4. Promises
5. Json data formats


#Plan followed to build the Contacts Application only with the React and Redux (without API,DB):
## Day 1
#### CSS and HTML refresher:
1. Web Fundamentals: HTML and CSS
https://www.codecademy.com/tracks/web

2. Make a Website
https://www.codecademy.com/learn/make-a-website

3. Download tools: node, git, xcode and vscode

## Day 2
learning javascript
https://www.codecademy.com/learn/introduction-to-javascript
focusing on data types and functions

## Day 3
learning javascript continued
https://www.codecademy.com/learn/introduction-to-javascript


## Day 4
deeper dive/refresh

#### Variables:
1. const 
2. let
#### Data Types:
1. __Object__: http://javascriptissexy.com/javascript-objects-in-detail/
  a. learning how to access properties in objects
  b. difference between key and a value
2. __Array__: https://learn.co/lessons/javascript-arrays
  a. learning how to access items in arrays 
  b. collections ( arrays with objects in them )
3. string
4. integer
5. boolean
6. __truthy values__
  a. how can a string, integer or boolean be truthy
7. __falsy values__
  a. how can a string, integer or boolean be falsy
8. __logical operators__

#### Functions: 
1. arrow functions
  a. when to use arrow functions instead of regular functions
  
## Day 5
1. refresh day 2-4, focus on difficult topics
2. __string templating__ 
3. __Object destructring__ (http://wesbos.com/destructuring-objects/)
4. Object destructuring default values
5. spreading object properties or array
6. recap blocks 

## Day 6
project start
1. find a react/redux boilerplate code that used webpack
2. Udemy course on modern react with redux

## Day 7
1. props
2. propTypes and defaultProps: https://reactjs.org/docs/typechecking-with-proptypes.html 
3. containers vs components
4. action creators ( thunks )
5. reducers
6. mapStateToProps and mapDispatchToProps

## Day 8
1. bootstrap components: https://react-bootstrap.github.io/components.html#overlays
2. eslint and linting using airbnbs style guide
3. debugging tool (optional)


## Day 9

## additional:
1. es6 (modern javascript ) https://www.youtube.com/watch?v=IEf1KAcK6A8
2. javascrip basics ( less modern javascript, less sugared syntax ) https://www.youtube.com/watch?v=_mj72QqsOs4
3. another javascript basics: https://www.youtube.com/watch?v=10ujZygJzMQ


## resources:
1. cheat sheet: https://devhints.io/es6
2. coding playground: https://codepen.io


## Day 10
1. get the boilerplate code for the Contacts Application
2. install the packages
3. try to understand the application

## Day 11
1. Revisit Udemy course on modern react with redux.(left with few more courses to complete)
2. Work on Contacts Application

## Day 12
1. More focus on React-Bootstrap for the bootstrap components to use in the Contacts Application
2. Work on Contacts Application
3. Push the file into Github repository to keep it updated and in sync with vs code.

## Day 13
1. Work on Contacts Application
2. Add Validations

## Day 14
1. Revisit few concepts on React and Redux
2. Work on Contacts Application

