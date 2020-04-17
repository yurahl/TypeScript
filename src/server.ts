import errorHandler from 'errorhandler';

import app from './app';

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */

const server = app.listen(process.env.PORT, () => {
    console.log(
        'App is running at http://localhost:%d in %s mode',
        process.env.PORT,
    );
});

export default server;
