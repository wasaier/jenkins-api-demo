var jenkins = require("jenkins")({
  baseUrl: "http://admin:gaoxiong123.@120.25.250.187:8082",
  crumbIssuer: true,
});

jenkins.build.term('test-node', 6, function(err) {
  if (err) throw err;
});