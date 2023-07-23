import express from 'express';

const app = express();
const PORT = 5500;

app.get('/',(req,res)=>{
    res.send("Hello from express")
})

app.listen(PORT,()=>{
    console.log(`Server runs on port: ${PORT}`)
});