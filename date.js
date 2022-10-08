//jshint esversion:6 

const getDate = () => {
    let today = new Date();
    let options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    };

    return today.toLocaleDateString("en-IN", options);
}
exports.getDay = () => {
    let today = new Date();
    let options = {
        weekday: 'long',

    };
    return today.toLocaleDateString("en-IN", options);

}

module.exports.getDate = getDate;