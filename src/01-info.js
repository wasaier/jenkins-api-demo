var jenkins = require("jenkins")({
  baseUrl: "http://admin:gaoxiong123.@120.25.250.187:8082",
  crumbIssuer: true,
});

jenkins.info(function (err, data) {
  if (err) throw err;
  console.log("info", data);
});