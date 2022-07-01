var jenkins = require("jenkins")({
  baseUrl: "http://admin:gaoxiong123.@120.25.250.187:8082",
  crumbIssuer: true,
});


jenkins.job.config('test-node', function(err, data) {
  if (err) throw err;
  console.log('queue item number', data);
});