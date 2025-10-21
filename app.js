// import the express module
import express from 'express';


// Create an instance of an Express application
const app = express();

//Enable static file serving
app.use(express.static('public'));

// Alllow the app to parse form data
app.use(express.urlencoded({extended: true}));

// Create an array to store orders
const orders = [];

//Define the port number where our server will listen
const PORT = 3000;

// Define a default "route"('/')
//req: contains information about the coming request
// res: allows us to send back a response to the client
app.get('/', (req,res) => {
    //send a response to the client
    res.sendFile(`${import.meta.dirname}/views/home.html`);
});

//Define a "contact-us" route
app.get('/contact-us', (req,res) => {
   res.sendFile(`${import.meta.dirname}/views/contact.html`);  
})

//Define a "confairmation" route
app.get('/confirm', (req,res) => {
    
   res.sendFile(`${import.meta.dirname}/views/confirmation.html`);  
})

//Define a "admin" route
app.get('/admin', (req,res) => {
    res.send(orders);
   // res.sendFile(`${import.meta.dirname}/views/admin.html`);  
})
//Define a "submit-order" route
app.post('/submit-order', (req,res) => {
    
   //res.sendFile(`${import.meta.dirname}/views/confirmation.html`);  
    //console.log(req.body);
   // Create a Json object to store the data
   const order = {
  fname: req.body.fname,
  lname: req.body.lname,
  email: req.body.email,
  method:req.body.method,
  toppings: req.body.toppings,
  size: req.body.size,
  comment: req.body.comment
};

//Add order to array
orders.push(order);
console.log(orders);

// Send user to confirmation page
//res.sendFile(`${import.meta.dirname}/views/confirmation.html`);  
})

//Start the server and make it listen on the port
// specified
app.listen(PORT,() => {
    console.log(`Server is running at http://localhost:${PORT}`);
});