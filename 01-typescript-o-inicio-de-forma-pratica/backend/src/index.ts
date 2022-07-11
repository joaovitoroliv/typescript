import express from 'express'
import routes from './routes'
import cors from 'cors';

const app = express();


// Inferência de tipos
function getUsername() {
    return 'jaozin';
}

// Hard Coded
function getUsername2(): string {
    return '3';
}

// Inferência de tipos: string
const username = 'jaozin';

app.use(cors())
app.use(routes)

app.listen(3000);