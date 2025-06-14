import express from "express"
import cors from "cors"
import bodyparser from "body-parser"
const app = express()
const port = 3000
app.use(cors({ origin: "http://localhost:5173" }));
app.use(bodyparser.json())
app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.post("/",(req,res)=>{
  console.log(req.body);
  res.send("Hello world")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
