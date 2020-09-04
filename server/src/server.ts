import express from 'express';
import routes from './routes/index';

const app = express();
app.use(express.json());

app.use(routes);

app.get('/', (request, response) => response.json({ message: 'Hello Word' }));

app.listen(3333, () => {
    // eslint-disable-next-line no-console
    console.log('Server started on port 3333!');
});
