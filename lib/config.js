// General configuration
var path = require('path');

module.exports = {
    application: {
        host: process.env.HOST || "0.0.0.0",
        port: process.env.PORT0 || 3000,
        environment: process.env.NODE_ENV || "development",
        apiVersion: "v1",
        logLevel: "info",
	refresh: {
            universe: parseInt(process.env.REFRESH_UNIVERSE) || 3600000, // One hour
            examples: parseInt(process.env.REFRESH_EXAMPLES) || 3600000  // One hour
        }
    }
};
