//Show booleans
var amberShow = false;
var blondeShow = false;
var brownShow = false;
var creamShow = false;
var darkShow = false;
var fruitShow = false;
var goldenShow = false;
var ipaShow = false;
var lightShow = false;
var limeShow = false;
var paleShow = false;
var pilsnerShow = false;
var redShow = false;
var strongShow = false;
var wheatShow = false;

//Ambers 
var fatTire = "Fat Tire by New Belgium", fatTireLink = fatTire.link("http://www.newbelgium.com/beer/fat-tire");

//Blonde
var heliosAle = "Helios Ale by Victory Brewing Company", heliosAleLink = heliosAle.link("https://www.victorybeer.com/beerfinder/");

//Brown
var newcastleBrown = "Newcastle Brown Ale", newcastleBrownLink = newcastleBrown.link("https://www.newcastlebrownale.co.uk/");

//Cream
var creamStout = "Cream Stout by Samuel Adams", creamStoutLink = creamStout.link("https://www.samueladams.com/craft-beers/brewmasters-collection/cream-stout");

//Dark
var darkLager = "1554 by New Belgium", darkLagerLink = darkLager.link("http://www.newbelgium.com/beer/1554");

//Fruit
var grapefruitSculpin = "Grapefruit Sculpin by Ballast Point", grapefruitSculpinLink = grapefruitSculpin.link("https://www.ballastpoint.com/beer/grapefruit-sculpin/");

//Golden
var goldenAle = "Golden Ale by Shiner", goldenAleLink = goldenAle.link("https://www.shiner.com/beer/golden-ale");

//IPAs
var green = "Green IPA by Treehouse Brewing", greenLink = green.link("http://treehousebrew.com/beers/");

//Light
var budLight = "Bud Light", budLightLink = budLight.link("http://www.budlight.com/");

//Lime
var lime = "Bud Light Lime", limeLink = lime.link("http://www.budlight.com/en/our-beers.html");

//Pale
var paleAle = "Pale Ale by Sierra Nevada", paleAleLink = paleAle.link("https://sierranevada.com/beer/year-round/pale-ale");

//Pilsner
var prima = "Prima Pils by Victory Brewing", primaLink = prima.link("http://www.victorybeer.com/beers/primapils/");

//Red
var redRage = "Red Rage by Toolshed Brewing Company", redRageLink = redRage.link("http://toolshedbrewing.com/portfolio-posts/red-rage/");

//Strong
var rasputin = "Old Rasputin Russian Imperial Stout", rasputinLink = rasputin.link("https://northcoastbrewing.com/beers/year-round-beers/old-rasputin-russian-imperial-stout/?ao_confirm");

//Wheat
var americanWheat = "American Wheat by Deschutes", americanWheatLink = americanWheat.link("https://www.deschutesbrewery.com/");

function amberClick() {
  var amber = document.getElementById("amber-reveal");
  var button = document.getElementById("amber-button");

  if (amberShow == false) {
    amber.innerHTML = fatTireLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    amberShow = true;
  }
  else {
    amber.innerHTML = "";
    button.style.backgroundColor = "#ff6600";
    button.style.color = "white";
    amberShow = false;
  }
}

function blondeClick() {
  var blonde = document.getElementById("blonde-reveal");
  var button = document.getElementById("blonde-button");

  if (blondeShow == false) {
    blonde.innerHTML = heliosAleLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    blondeShow = true;
  }
  else {
    blonde.innerHTML = "";
    button.style.backgroundColor = "#ffcc00"
    button.style.color = "white";
    blondeShow = false;
  }
}

function brownClick() {
  var brown = document.getElementById("brown-reveal");
  var button = document.getElementById("brown-button");

  if (brownShow == false) {
    brown.innerHTML = newcastleBrownLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    brownShow = true;
  }
  else {
    brown.innerHTML = "";
    button.style.backgroundColor = "#b33c00";
    button.style.color = "white";
    brownShow = false;
  }
}

function creamClick() {
  var cream = document.getElementById("cream-reveal");
  var button = document.getElementById("cream-button");

  if(creamShow == false) {
    cream.innerHTML = creamStoutLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    creamShow = true;
  }
  else {
    cream.innerHTML = "";
    button.style.backgroundColor = "#ffd633";
    button.style.color = "white";
    creamShow = false;
  }
}

function darkClick() {
  var dark = document.getElementById("dark-reveal");
  var button = document.getElementById("dark-button");

  if(darkShow == false) {
    dark.innerHTML = darkLagerLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    darkShow = true;
  }
  else {
    dark.innerHTML = "";
    button.style.backgroundColor = "#663300";
    button.style.color = "white";
    darkShow = false;
  }
}

function fruitClick() {
  var fruit = document.getElementById("fruit-reveal");
  var button = document.getElementById("fruit-button");

  if(fruitShow == false) {
    fruit.innerHTML = grapefruitSculpinLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    fruitShow = true;
  }
  else {
    fruit.innerHTML = "";
    button.style.backgroundColor = "#cc3300";
    button.style.color = "white";
    fruitShow = false;
  }
}

function goldenClick() {
  var golden = document.getElementById("golden-reveal");
  var button = document.getElementById("golden-button");

  if(goldenShow == false) {
    golden.innerHTML = goldenAleLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    goldenShow = true;
  }
  else {
    golden.innerHTML = "";
    button.style.backgroundColor = "#ffcc00";
    button.style.color = "white";
    goldenShow = false;
  }
}

function ipaClick() {
  var ipa = document.getElementById("ipa-reveal");
  var button = document.getElementById("ipa-button");

  if(ipaShow == false) {
    ipa.innerHTML = greenLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    ipaShow = true;
  }
  else {
    ipa.innerHTML = "";
    button.style.backgroundColor = "#cc6600";
    button.style.color = "white";
    ipaShow = false;
  }
}

function lightClick() {
  var light = document.getElementById("light-reveal");
  var button = document.getElementById("light-button");

  if(lightShow == false) {
    light.innerHTML = budLightLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    lightShow = true;
  }
  else {
    light.innerHTML = "";
    button.style.backgroundColor = "#ffdb4d";
    button.style.color = "white";
    lightShow = false;
  }
}

function limeClick() {
  var lime = document.getElementById("lime-reveal");
  var button = document.getElementById("lime-button");

  if(limeShow == false) {
    lime.innerHTML = limeLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    limeShow = true;
  }
  else {
    lime.innerHTML = "";
    button.style.backgroundColor = "#99cc00";
    button.style.color = "white";
    limeShow = false;
  }
}

function paleClick() {
  var pale = document.getElementById("pale-reveal");
  var button = document.getElementById("pale-button");

  if(paleShow == false) {
    pale.innerHTML = paleAleLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    paleShow = true;
  }
  else {
    pale.innerHTML = "";
    button.style.backgroundColor = "#ffcc66";
    button.style.color = "white";
    paleShow = false;
  }
}

function pilsnerClick() {
  var pilsner = document.getElementById("pilsner-reveal");
  var button = document.getElementById("pilsner-button");

  if(pilsnerShow == false) {
    pilsner.innerHTML = primaLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    pilsnerShow = true;
  }
  else {
    pilsner.innerHTML = "";
    button.style.backgroundColor = "#ffd11a";
    button.style.color = "white";
    pilsnerShow = false;
  }
}

function redClick() {
  var red = document.getElementById("red-reveal");
  var button = document.getElementById("red-button");

  if(redShow == false) {
    red.innerHTML = redRageLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    redShow = true;
  }
  else {
    red.innerHTML = "";
    button.style.backgroundColor = "#ff5c33";
    button.style.color = "white";
    redShow = false;
  }
}

function strongClick() {
  var strong = document.getElementById("strong-reveal");
  var button = document.getElementById("strong-button");

  if(strongShow == false) {
    strong.innerHTML = rasputinLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    strongShow = true;
  }
  else {
    strong.innerHTML = "";
    button.style.backgroundColor = "#663300";
    button.style.color = "white";
    strongShow = false;
  }
}

function wheatClick() {
  var wheat = document.getElementById("wheat-reveal");
  var button = document.getElementById("wheat-button");

  if(wheatShow == false) {
    wheat.innerHTML = americanWheatLink;
    button.style.backgroundColor = "ivory";
    button.style.color = "black";
    wheatShow = true;
  }
  else {
    wheat.innerHTML = "";
    button.style.backgroundColor = "#ffd11a";
    button.style.color = "white";
    wheatShow = false;
  }
}