const isBrowser = typeof window !== 'undefined'
const platform = isBrowser ? navigator.userAgent : `${require('os').platform} ${process.version}`
console.log(`Browser?${isBrowser}`, platform)
;

(async ()=>{
  console.log(`Attempting a simple test`)
  var testpage = require('./testpage')
  console.log(`loaded testpage ${typeof testpage} - ok`)

  const page = await testpage('https://google.com')
  const e = await page.evaluate('1+1')
  console.log(e==2 ? `1 + 1 = ${e} - ok`:`Error cannot eval JS`)
  
  const getdata = await page.get('https://restbin-iwgv042975uv.runkit.sh/api')
  console.log(`get(url) - ${getdata.date} ${getdata.time} - ok`)

  process.exit(0) 
})()
