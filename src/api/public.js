import { Router } from 'express';

// Import Controller
import { DataController } from './../controllers/';


export default () => {
	let api = Router();
	api.use('/', DataController);
	return api;
}