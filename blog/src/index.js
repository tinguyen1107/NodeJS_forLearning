const express = require('express');
const handlebars = require('express-handlebars');
const morgan = require('morgan');

const methodOverride = require('method-override')
const path = require('path');

const route = require('./routes');
const db = require('./config/db')

db.connect()

const app = express();
const port = 7000;

app.use(
  express.urlencoded({
    extended: true,
  }),
);

app.use(express.json());

app.use(methodOverride('_method'))

app.engine(
  'hbs',
  handlebars({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
      select: ( value, options ) => {
        return options.fn(this).replace(
          new RegExp(' value=\"' + value + '\"'),
          '$& selected="selected"');
      },
    }
  }),
);

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

app.use(express.static(path.join(__dirname, 'public')));

// HTTP logger
app.use(morgan('combined'));

route(app);

app.listen(port, () => {
  console.log('listening at http://localhost:${port}');
});
