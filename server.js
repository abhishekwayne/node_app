const app = require('express')();
const morgan = require('morgan');
const fs = require('fs');
const PORT = 5000;

morgan.token(
  "bajajlogs",
  `Method called -> :method | request for -> :url was received | Status -> :status | Response time -> :response-time`
);

app.use(morgan('bajajlogs', {
  stream: fs.createWriteStream('./logs/info.log', {flags: 'a'})
}));

app.get("/", (req, res) => {
  res.send("Hello from server");
});


app.listen(PORT, () => {
  console.log(`Server started at port ${ PORT }`)
});

