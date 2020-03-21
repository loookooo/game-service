//封装日期的方法
const nowDate = () => {
    let date = new Date();
    return `${ date.getFullYear() }-${ date.getMonth()+1 }-${ date.getDate() } ${ date.getHours() }:${ date.getMinutes() }:${ date.getSeconds() }`
}

//时间戳转格式
const TimeToDate = (timestamp) => {
    var date = new Date(timestamp);
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    month = month > 10 ? month : '0' + month;
    var day = date.getDate();
    day = day > 10 ? day : '0' + day;
    var hour = date.getHours();
    hour = hour > 10 ? hour : '0' + hour;
    var minute = date.getMinutes();
    minute = minute > 10 ? minute : '0' + minute;
    var second = date.getSeconds();
    second = second > 10 ? second : '0' + second;
    return `${year}-${month}-${day} ${hour}:${minute}:${second}`

}

module.exports = {
    nowDate,
    TimeToDate,
}