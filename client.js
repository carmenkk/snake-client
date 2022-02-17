const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function () {
  const conn = net.createConnection({
    IP,
    PORT,
  });
  conn.setEncoding("utf8");
  conn.on("connect",() => {
    conn.write("Name: JMK");
   // setInterval(() => {
     // conn.write("Move: up")
  //},50);
});
  conn.on("data",(data) =>{
    console.log(data);
  });
  return conn;
  
};



module.exports = {connect};

