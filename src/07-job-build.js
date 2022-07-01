var jenkins = require("jenkins")({
  baseUrl: "http://admin:gaoxiong123.@120.25.250.187:8082",
  crumbIssuer: true,
});

// 执行 build
jenkins.job.build('test-node', function(err, data) {
  if (err) throw err;
  console.log('queue item number', data);
});

// 携带参数
// jenkins.job.build({ name: 'test-node', parameters: { name: 'value' } }, function(err) {
//   if (err) throw err;
// });