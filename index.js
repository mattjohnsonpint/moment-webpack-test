var moment = require("moment");
document.write("Moment Version: " + moment.version + "</br>");
document.write("Local Time: " + moment().format() + "</br>");
document.write("UTC: " + moment.utc().format() + "</br>");
document.write("Local Time in Spanish: " + moment().locale('es').format("LLLL") + "</br>");
