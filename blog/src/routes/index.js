const homeRouter = require('./home');
const coursesRouter = require('./courses');
const meRouter = require('./me');

function route(app) {
  ///route
  app.use('/home', homeRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter);
}

module.exports = route;