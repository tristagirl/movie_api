// Express and Morgan Requires
const express = require("express"),
  morgan = require("morgan");
app = express();

bodyParser = require("body-parser");
app.use(bodyParser.json());

// List of top movies
let topMovies = [
  {
    title: "The Matrix",
    genre: "Action",
    director: "The Wachowskis"
  },
  {
    title: "Eagle Eye",
    genre: "Action",
    director: "D.J. Caruso"
  },
  {
    title: "War Games",
    genre: "Action",
    director: "John Badham"
  },
  {
    title: "Minority Report",
    genre: "Action",
    director: "Steven Spielberg"
  },
  {
    title: "Snowden",
    genre: "Action",
    director: "Oliver Stone"
  },
  {
    title: "Die Hard 4.0",
    genre: "Action",
    director: "Len Wiseman"
  },
  {
    title: "Tron",
    genre: "Action",
    director: "Steven Lisberger"
  },
  {
    title: "The Fifth Estate",
    genre: "Action",
    director: "Bill Condon"
  },
  {
    title: "23",
    genre: "Action",
    director: "Hans-Christian Schmid"
  },
  {
    title: "Underground",
    genre: "Action",
    director: "Robert Connolly"
  }
];

// Use Express to return all static files in public folder
app.use(express.static("public"));

// Use morgan for logging
app.use(morgan("common"));

//Get Requests
app.get("/", (req, res) => {
  res.send("Welcome to myFlix!");
});

//Get ALL Movies
app.get("/movies", (req, res) => {
  res.json(topMovies);
});

//Get movies by Title
app.get("/movies/:title", (req, res) => {
  res.json(
    topMovies.find(movie => {
      return movie.title === req.params.title;
    })
  );
});

//Get movies by Genre
app.get("/genres/:genre", (req, res) => {
  res.json(
    topMovies.find(movieGenre => {
      return movieGenre.genre === req.params.genre;
    })
  );
});

//Get movies by director
app.get("/directors/:director", (req, res) => {
  res.json(
    topMovies.find(movieDirector => {
      return movieDirector.director === req.params.director;
    })
  );
});

//Get documentation
app.get("/documentation", (req, res) => {
  res.sendFile("public/documentation.html", { root: __dirname }); //respond through express.static
});

/* Post new user from JSON Object in body:
{
  ID: Integer, (generated by uuid)
  Username: String,
  Password: String,
  Email: String,
}*/
app.post("/users/:newUser", (req, res) => {
  res.send("New user added successfully!");
});

//Update user information
app.put("/users/:username", (req, res) => {
  //To be added later: let user = users.find (username)
  res.send("Username updated succesfully!");
});

/*Add movie to user's favorite movie list from JSON Object in body:
{
    title: String
    genre: String,
    director: String
}*/
app.post("/movies/:newMovie", (req, res) => {
  res.send("Movie added succesfully!");
});

//Delete movie from user's favorite movie list
app.delete("/movies/:Title", (req, res) => {
  //To be added later: let movie = movies.find (title)
  res.send("Movie deleted succesfully!");
});

//Delete user by username
app.delete("/users/:username", (req, res) => {
  //To be added later: let user = users.find (username)
  res.send("User deleted succesfully!");
});

// Error Handling
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send("An error has been detected");
});

app.listen(8080, () => {
  console.log("This app is listening on port 8080.");
});