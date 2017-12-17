// Server apps
var learnci = require('./main.js')
learnci.test_ok()
console.log('Server side tested ok')

// Client apps
(async ()=>{
  var testchrome = await require('./testchrome.js')('https://google.com')
  console.log(testchrome.html)
})()
