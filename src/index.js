import http from 'http';
import express from 'express';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import PublicApi from './api/public';

import config from './config.json';


let app = express();
app.server = http.createServer(app);

// logger
app.use(morgan('dev'));

app.use(cors({
	exposedHeaders: config.corsHeaders
}));

app.use(bodyParser.json({
	limit : config.bodyLimit
}));

app.use('/Api', PublicApi());
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});

export default app;
