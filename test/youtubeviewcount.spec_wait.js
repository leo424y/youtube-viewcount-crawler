// Generated by Selenium IDE

const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')
const firefox = require('selenium-webdriver/firefox');

const screen = {
  width: 640,
  height: 480
};

const items = ['mspbVxNxO7M', 'EfTH22VoEO0'];
const copy = [];

function retnum(str) { 
  var num = str.replace(/[^0-9]/g, ''); 
  return parseInt(num,10); 
}

function _Fn(val){
  describe('youtube view count', function() {
    this.timeout(30000)
    let driver
    let vars
    beforeEach(async function() {
      driver = await new Builder()
      .forBrowser('firefox')
      .setFirefoxOptions(new firefox.Options().headless().windowSize(screen))
      .build()
      vars = {}
    })
    afterEach(async function() {
      await driver.quit();
    })
    it('youtube view count', async function() {
      var yid = val
      await driver.get("https://www.youtube.com/watch?v="+yid)
      await driver.wait(until.elementLocated(By.css(".view-count")), 30000)
      vars["vc"] = await driver.findElement(By.css(".view-count")).getText()
      console.log(vars["vc"])
      var timeInMs = Date.now();
      let thenum = yid +', ' + retnum(vars["vc"]) + ', ' + timeInMs + '\n';
      var fs = require('fs');
  
      fs.appendFile(yid + '.txt', thenum, function (err) {
          if (err)
              console.log(err);
          else
              console.log('Write operation complete.');
      });    
    })
  })
}

items.forEach(function(item){
  _Fn(item);
});