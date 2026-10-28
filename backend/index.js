import express from 'express' ;
const app=express();
app.get('/',(req,res)=>{
  res.send('Server is ready');
});
app.get('/jokes',(req,res)=>{
  const jokes=[
    {
      id:1,
      title:'A Joke',
      content:'This is a joke'
    },
    {
      id:2,
      title:'Another Joke',
      content:'this is joke2'
    }
  ]
  res.send(jokes);
});

const PORT=process.env.PORT || 5000;
app.listen(PORT,()=>{
  console.log(`Server is running on port ${PORT}`);
});
