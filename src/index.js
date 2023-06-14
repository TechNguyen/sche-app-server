require('dotenv').config();
const cors = require("cors")
const express = require("express");
const morgan = require("morgan");
const app = express();
const handlebars = require("express-handlebars");
const methodOverride = require('method-override')
const path = require("path");
const port = process.env.PORT;
const route = require("./router");
const db = require("./config/database");
const bodyParser = require('body-parser')
const cookParser = require('cookie-parser')
// Connect database
console.log(process.env.MONGO_URL);
db.connect();
//overide Header 
app.use(methodOverride('_method'))
// HTTP logger
app.use(morgan("combined"));
app.use(cors());  
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cookParser())
app.engine(
  "hbs",
  handlebars.engine({
    extname: ".hbs",
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true,
    },
    defaultLayout: 'main'
  }
  )
);
app.set("view engine", "hbs");  
app.set("views", path.join(__dirname, "resource" ,"views"));
// Routers
route(app);
app.listen(port, () => {
  console.log(`http::${port}`);
});

