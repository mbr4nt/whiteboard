const dataModel = require("./dataModel.js");

module.exports = {
    dashboard: function(callback) {
        dashboard(function(err, items) {
            if(err) return callback(err);
            callback(null, {
                title: "Dashboard",
                items: items
            });
        });
    },
    log: function(event) {
        return new dataModel.Event(event).save();
    }
};

function dashboard(callback) {
    dataModel.Event.find(function(err, data) {
        if(err) return callback(err);
        let summary = {};
        data.forEach(function(item) {
            if(!summary[item.person]) summary[item.person] = 0;
            summary[item.person]++;
        });
        let result = [];
        Object.keys(summary).forEach(function(key) {
            result.push({
                title: key,
                count: summary[key]
            });
        });
        callback(null, result);
    });
}