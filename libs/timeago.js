import { format, render, cancel, register } from 'timeago.js';

const helpers={};


helpers.timeago = (timestamp) => {
    return format(timestamp);
}

module.exports=helpers;