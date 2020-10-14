require('dotenv').config();
require('./config/index');
const express = require('express'),
    cors = require('cors'),
    { graphqlHTTP } = require('express-graphql'),
    schema = require('./graphql/schema');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        graphiql: true
    })
);

const port = 5000 || process.env.port;

app.listen(port, () => {
    console.log(`server running on port : ${port}`);
});
