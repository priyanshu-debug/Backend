import express from 'express';
const app=express();

app.get('/',(req,res)=>{
    res.send("<h2>Server is Ready</h2>");
})

// route to get a list of five joke


app.get('/api/jokes',(req,res)=>{
    const jokes=[
        {
            id:1,
            title:'A Joke',
            content:'Why did the scarecrow win an award? Because he was outstanding in his field!'
        },
        {
            id:2,
            title:'Another Joke',
            content:'Why did the bicycle fall over? Because it was two-tired!'
        },
        {
            id:3,
            title:'Yet Another Joke',
            content:'Why did the tomato turn red? Because it saw the salad dressing!'
        },
        {
            id:4,
            title:'Funny Joke',
            content:'Why did the math book look sad? Because it had too many problems!'
        },
        {
            id:5,
            title:'Last Joke',
            content:'Why did the chicken cross the playground? To get to the other slide!'
        }
    ];
    res.send(jokes);
});
const port= process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`Serevr is running on port ${port}`);
});