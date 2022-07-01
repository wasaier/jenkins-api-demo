var jenkins = require("jenkins")({
  baseUrl: "http://admin:gaoxiong123.@120.25.250.187:8082",
  crumbIssuer: true,
});

// 获取某一次的构建信息
jenkins.build.get('test-node', 2, function(err, data) {
  if (err) throw err;
  console.log('build', data);
});