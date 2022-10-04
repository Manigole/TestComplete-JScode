{\rtf1\ansi\ansicpg1252\cocoartf2639
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 HelveticaNeue;\f1\fnil\fcharset0 HelveticaNeue-Bold;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;\red0\green0\blue0;\red14\green79\blue181;
}
{\*\expandedcolortbl;;\cssrgb\c0\c0\c0\c90196;\cssrgb\c0\c0\c0\c7843;\cssrgb\c3922\c40000\c76078;
}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\li1120\fi-1120\sa80\partightenfactor0

\f0\fs28 \cf2 \cb3 \expnd0\expndtw0\kerning0
function Fwa_Login()\
\{\
  Browsers.Item("iexplore").Run("{\field{\*\fldinst{HYPERLINK "https://qassapp08.hpg.com/sslogin/indexView.jsp"}}{\fldrslt 
\f1\b \cf4 https://qassapp08.hpg.com/sslogin/indexView.jsp}}#");\
  let page = Aliases.browser2.pageThisSiteIsnTSecure;\
    page.linkMoreInformation.Click();\
    page.linkOverridelink.Click();\
 \
   \
    var page1, browser;\
    browser = Sys.Browser("iexplore");\
    page = browser.Page("*");\
   \
    page.FindChildByXPath("//input[@id=\\"username\\"]").Click();\
    page.FindChildByXPath("//input[@id=\\"username\\"]").SetText(Project.Variables.Username);\
    page.FindChildByXPath("//input[@name='password']").Click();\
    page.FindChildByXPath("//input[@name='password']").SetText(Project.Variables.Password);\
 \
\
 \
    page.FindChildByXPath("//button[@id='sign-in-button']").Click();\
  //page.FindElement("//button[@name='_eventId_accept']").Click();\
\}\
\
function Switch_Query_Page()\
 \{\
   \
  var page, browser;\
  browser = Sys.Browser("iexplore");\
  page = browser.Page("*");\
  Delay(4000);\
  \
  \
  page.FindChildByXPath("//select[@id='app-instance-select-informant']").ClickItem("InstanceTwo");\
  page.FindChildByXPath("//button[@id='enter-informant-link']").Click();\
  \
   \
\}}