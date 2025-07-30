const {Builder, By, Key} = require ("selenium-webdriver")

async function example(){
    let driver = await new Builder().forBrowser("chrome").build();

    try {
      await driver.get("https://github.com/clarilaur");
      await driver.sleep(2000); 
  
  
      let nameElement = await driver.findElement(
        By.css('span[itemprop="name"]')
      );
  
      let nameText = await nameElement.getText();
  
      if (nameText === "Laura") {
        console.log("Test Passed");
      } else {
        console.log("Test Failed");
      }
  
    } catch (error) {
      console.log("Something went wrong!");
      console.error(error);
    } finally {
      await driver.quit(); 
    }
  }
  

example()