const mongoose = require('mongoose');
const mongoURI = `mongodb://localhost:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', function () {
    console.log(
        `Database connection open to ${mongoose.connection.host} ${mongoose.connection.name}`
    );
});

mongoose.connection.on('error', function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});
