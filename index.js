const express = require('express')

const bodyParser = require('body-parser')

const path = require('path')

const PUBLISHABLE_KEY = "pk_test_51JlOYeSEY69Frn17OdfC7rXfY20svHIpOZtcmDQJqjvhdafx0anw4IRjOT6Jet90UqClzHlAKHrLIpRQ6UDL4jOD00GVppqSiV"

const SECRET_KEY = "sk_test_51JlOYeSEY69Frn17qdlrU15I151kJy3J9Unt7SgotEKpoMlKFRZCGA1KwXFzEYLWokevNk4V0l5IpRXqlr8X6u9L00ptHBLiCl"

const stripe = require('stripe')(SECRET_KEY)

const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000

app.set("view engine","ejs")

app.use(express.static(__dirname + '/views'));

app.get('/',(req,res) =>{
   res.render('Index',{
       key: PUBLISHABLE_KEY
   })
})

app.get('/app',(req,res) =>{
   res.render('App',{
       key: PUBLISHABLE_KEY
   })
})

app.get('/home',(req,res) =>{
   res.render('Home',{
       key: PUBLISHABLE_KEY
   })
})

app.post('/payment',(req,res) =>{
  stripe.customers.create({
     email:req.body.stripeEmail,
     source:req.body.stripeToken,
     name:'Gautam Sharma',
     address:{
         line1: 'Patna, Bihar',
         postal_code:'800001',
         city:'Patna',
         state:'Bihar',
         country:'India'
     }
  })
  .then((customer) =>{
      return stripe.charges.create({
          amount:2000,
          description:'A chocolate',
          currency:'INR',
          customer:customer.id
      })
  })
  .then((charge) =>{
      res.render('Buy', {foo: 'FOO'});
  })
  .catch((err)  =>{
      res.send(err)
  })
})

app.listen(PORT,() =>{
    console.log(`App is listening on ${PORT} `)
})