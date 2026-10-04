// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader("Content-Type", "text/plain");

//     res.end("Hello World");
// });

// server.listen(3000, () => {
//     console.log("Server running on port 3000");
// });

// const EventEmitter = require('events');
// const myEmitter = new EventEmitter();
// myEmitter.on('greet',(name)=> {
//     console.log(`Hello ${name}, welcome to Node js.`);
// });
// myEmitter.on('exit',()=>{
//     console.log("Application closed.");
// });
// myEmitter.emit('greet','maaz');
// myEmitter.emit('exit');


// const express = require("express");
// const { graphqlHTTP } = require("express-graphql");
// const { buildSchema } = require("graphql");
 
// const app = express();
 
// const schema = buildSchema(`
//   type Query {
//     hello: String
//     student: String
//   }
// `);
 
const root = {
  hello: () => "Hello GraphQL!",
  student: () => "Student: Alice"
};
 
app.use("/graphql", graphqlHTTP({
  schema,
  rootValue: root,
  graphiql: true
}));
 
app.listen(4000, () => {
  console.log("GraphQL API running at http://localhost:4000/graphql");
});

