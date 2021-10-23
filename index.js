const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 5000;

app.get("/", (req, res) => {
  res.send("wow Im learning to node");
});

// For make our Own API
const users = [
  {
    id: 0,
    name: "Maruf",
    mail: "maruf@gmail.com",
    phone: "01641656113",
  },
  {
    id: 1,
    name: "Mahmud",
    mail: "maruf@gmail.com",
    phone: "01641656113",
  },
  {
    id: 2,
    name: "Mamun",
    mail: "maruf@gmail.com",
    phone: "01641656113",
  },
  {
    id: 3,
    name: "Sharmin",
    mail: "maruf@gmail.com",
    phone: "01641656113",
  },
  {
    id: 4,
    name: "Masum",
    mail: "maruf@gmail.com",
    phone: "01641656113",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

// dynamic api থেকে নির্দিষ্ট কাওকে খুজলে-
app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

// কিভাবে api conditionally search করা যায়
app.get("/users", (req, res) => {
  const search = req.query.search;
  // use query parameters
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLocaleLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

// app.method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting the post", req.body);

  // res.send(JSON.stringify(newUser));
  res.json(newUser);
});

app.listen(port, () => {
  console.log("listening to port", port);
});
