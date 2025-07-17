const express = require('express')
const dotenv  = require('dotenv')
const app = express()
const cors = require('cors')
dotenv.config();
const PORT = process.env.PORT || 3000;
const restaurantRouter = require("./routers/restaurant.router")
app.use(cors({
  origin:["http://localhost:5173","127.0.0.1:5173"],
  methods:["GET","POST","PUT","DELETE"],
  allowedHeaders:["Content-Type","Authorization"]
}))
app.use(express.json())//แปลง text เป็น json
app.use(express.urlencoded({ extended: true})) //ให้ express มองเป็น json

app.use('/api/v1/restaurant' ,restaurantRouter); // เรียกใช้ router
app.get('/', (req, res) => { // ('/') คือ path
  res.send('Restful API')
})

app.listen(PORT,() => {
  console.log("Listening to http://localhost:" + PORT)
});