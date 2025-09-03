const message = 'hello other file';

const getMessage = () => {
    console.log(message);
    return message;
}

//common.js
module.exports = {
    getMessage
};