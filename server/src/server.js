const PORT = process.argv[2] || 8000;
const http = require('http');

const app = require('./app');

const { mongoConnect } = require('./services/mongo')
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/lanches.model');

const server = http.createServer(app);

async function startServer() {
    await mongoConnect();
    await loadPlanetsData();
    await loadLaunchData();
    server.listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    });
}
startServer();