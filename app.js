import express from 'express';
import { router } from './src/routes/index.js';
const app = express();
const port = 8000;

app.use(express.static('src'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.listen(port, () => {
    console.log('\x1b[35m%s\x1b[0m', `[server] running... \n[port] ${port}`);
});