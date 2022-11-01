const launches = new Map();

let latestFlightNumber = 100;

const lanch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('December 27, 2030'),
    target: 'Kepler-442 b',
    customer: ['ZTM', 'NASA'],
    upcoming: true,
    success: true,
};

launches.set(lanch.flightNumber, lanch);

function existLauchWithId(launchId) {
   return launches.has(launchId);
}

function getAllLaunches() {
    return Array.from(launches.values());
}

function addNewLaunch(lanch) {
    latestFlightNumber++;
    launches.set(
        latestFlightNumber, 
        Object.assign(lanch, {
            customer: ['ZTM', 'NASA'],
            upcoming: true,
            success: true,
            flightNumber: latestFlightNumber,
        })
    );
}

function abortLaunchById(launchId) {
    const aborted = launches.get(launchId);
    aborted.upcoming = false;
    aborted.success = false;
    return aborted;
}
module.exports = {
    existLauchWithId,
    getAllLaunches,
    addNewLaunch,
    abortLaunchById,
};