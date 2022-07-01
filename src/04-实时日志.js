var jenkins = require("jenkins")({
  baseUrl: "http://admin:gaoxiong123.@120.25.250.187:8082",
  crumbIssuer: true,
});

var log = jenkins.build.logStream('test-node', 5);
 
log.on('data', function(text) {
  process.stdout.write(text);
});
 
log.on('error', function(err) {
  console.log('error', err);
});
 
log.on('end', function() {
  console.log('end');
});