const allSqlAction = require("../lib/mysql");
const utils = require('../lib/utils.js');
//登录
async function login(username, password) {
    let sql = `select * from users  where username = '${username}' and password='${password}'`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length == 1 && res[0].username === username && res[0].password === password) {
            res[0].createTime = utils.TimeToDate(res[0].createTime);
            return { data: res[0], msg: "登录成功", code: 200, token: 'Token_loookooo' }
        } else {
            return { msg: "登录失败", code: 201 }
        }
    })
};
//判断用户是否存在
async function findUser(username, password) {
    let sql = `select * from users  where username = '${username}'`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.length == 0) {
            return register(username, password)
        } else {
            return { msg: "用户已存在", code: 202 }
        }
    })
};
//注册
async function register(username, password) {
    let sql = `insert into users  (username,password,createTime) values ('${username}','${password}','${new Date().getTime()}')`
    return allSqlAction.allSqlAction(sql).then(res => {
        if (res.affectedRows == 1) {
            return { msg: "注册成功", code: 200 }
        } else {
            return { msg: "注册失败", code: 201 }
        }
    })
}
module.exports = {
    login,
    findUser,
    register
}