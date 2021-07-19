const homeRouter = require('./home');
const newsRouter = require('./news');
const coursesRouter = require('./course');
// const musicsRouter = require('./musics');
const searchRouter = require('./search');


function route(app) {
  ///route
  app.use('/home', homeRouter);

  app.use('/news', newsRouter);

  app.use('/courses', coursesRouter)
  
  app.use('/search', searchRouter);
}

module.exports = route;