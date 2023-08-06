console.log("Creating a new weather App");
const express=require('express');
const hbs=require('hbs');
const path=require('path');
const app=express(); 
const static2=path.join(__dirname,'../src/partials');
hbs.registerPartials(static2);
const static1=path.join(__dirname,'../src/views');
app.set('view engine','hbs');
console.log(static1);

app.use(express.static(static1));
app.get('',(req,res)=>{
    
    res.render('index');
});
app.get('/about',(req,res)=>{
    res.render('About');
});
app.get('/weather',(req,res)=>{
    res.render('Weather');
});
app.get('*',(req,res)=>{
    res.render('404_page');
})
app.get('*',(req,res)=>{
    res.send("404 page Error , page not Found");
})
app.get('/',(req,res)=>{
    res.send('the server is running');
});

const port= process.env.PORT ||  3000;
app.listen(port,()=>{
    console.log(`the server is live at ${port} port : number`);
});
