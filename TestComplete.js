function Fwa_Login()
{
  Browsers.Item("iexplore").Run("https://qassapp08.hpg.com/sslogin/indexView.jsp#");
  let page = Aliases.browser2.pageThisSiteIsnTSecure;
    page.linkMoreInformation.Click();
    page.linkOverridelink.Click();
 
   
    var page1, browser;
    browser = Sys.Browser("iexplore");
    page = browser.Page("*");
   
    page.FindChildByXPath("//input[@id=\"username\"]").Click();
    page.FindChildByXPath("//input[@id=\"username\"]").SetText(Project.Variables.Username);
    page.FindChildByXPath("//input[@name='password']").Click();
    page.FindChildByXPath("//input[@name='password']").SetText(Project.Variables.Password);
 

 
    page.FindChildByXPath("//button[@id='sign-in-button']").Click();
  //page.FindElement("//button[@name='_eventId_accept']").Click();
}

function Switch_Query_Page()
 {
   
  var page, browser;
  browser = Sys.Browser("iexplore");
  page = browser.Page("*");
  Delay(4000);
  
  
  page.FindChildByXPath("//select[@id='app-instance-select-informant']").ClickItem("InstanceTwo");
  page.FindChildByXPath("//button[@id='enter-informant-link']").Click();
  
   
}
