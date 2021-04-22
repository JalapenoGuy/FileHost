//You might want to put the English caption first
//"numba" is the number of the list box in where you select you language, so it's like your language
var numba = 161; //Spanish
while (numba < 300) {
  await new Promise(r => setTimeout(r, 2000));
  document.querySelector("#add-translations-button > div").click();
  await new Promise(r => setTimeout(r, 3000));
  document.querySelector("#text-item-" + numba).click();
  await new Promise(r => setTimeout(r, 3000));
  document.querySelector("#row-container > div.tablecell-captions.cell-body.style-scope.ytgn-video-translation-row > ytgn-video-translation-cell-captions > div.captions-cell-container.style-scope.ytgn-video-translation-cell-captions > ytcp-button").click();
  await new Promise(r => setTimeout(r, 6000));
  document.querySelector("#choose-auto-translate > span").click();
  await new Promise(r => setTimeout(r, 3000));
  document.querySelector("#publish-button > div").click();
  await new Promise(r => setTimeout(r, 1000));
  document.querySelector("#close-button").click();
  await new Promise(r => setTimeout(r, 2000));
  if(numba == 161){
    numba = 56 //French
  }
  else if (numba == 56) {
    numba = 64 //German
  }
  else if (numba == 64) {
    numba = 68 //Greek
  }
  else if (numba == 68) {
    numba = 141 //Russain
  }
  else if (numba == 141) {
    numba = 88 //Italian
  }
  else if (numba == 88) {
    numba = 27 //Chinese
  }
  else if (numba == 27) {
    numba = 132 //Portuquese
  }
  else if (numba == 132) {
    numba = 138 //Romanian
  }
  else if (numba == 138) {
    numba = 98 //Korean
  }
  else if (numba == 98) {
    numba = 89 //Japanese
  }
  //
  else if (numba == 89) {
    numba = 76 //Hindi
  }
  else if (numba == 76) {
    numba = 75 //Hebrew
  }
  else if (numba == 75) {
    numba = 7 //Arabic
  }
  else if (numba == 7) {
    numba = 37 //Czech
  }
  else if (numba == 37) {
    numba = 39 //Dutch
  }
  else if (numba == 39) {
    numba = 9 //Armenian
  }
  else if (numba == 9) {
    numba = 4 //Albanian
  }
  else if (numba == 4) {
    numba = 12 //Azerbaijani
  }
  else if (numba == 12) {
    numba = 13 //Bangla
  }
  else if (numba == 13) {
    numba = 19 //Bosnian
  }
  else if (numba == 19) {
    numba = 21 //Bulgarian
  }
  else if (numba == 21) {
    numba = 36 //Croatian
  }
  else if (numba == 36) {
    numba = 38 //Danish
  }
  else if (numba == 38) {
    numba = 50 //Estonian
  }
  else if (numba == 50) {
    numba = 53 //Fillipnino
  }
  else if (numba == 53) {
    numba = 55 //Finnish
  }
  else if (numba == 55) {
    numba = 79 //Hungarian
  }
  else if (numba == 79) {
    numba = 80 //Icelandic
  }
  else if (numba == 80) {
    numba = 82 //Indosian
  }
  else if (numba == 82) {
    numba = 94 //Kazakh
  }
  else if (numba == 94) {
    numba = 103 //Latvian
  }
  else if (numba == 103) {
    numba = 105
  }
  else if (numba == 105) {
    numba = 107 //Macedonian
  }
  else if (numba == 107) {
    numba = 109 //Malay
  }
  else if (numba == 109) {
    numba = 110 //Malayian
  }
  else if (numba == 110) {
    numba = 119 //Mongolian
  }
  else if (numba == 119) {
    numba = 123 //Norweigan
  }
  else if (numba == 123) {
    numba = 131 //Polish
  }
  else if (numba == 131) {
    numba = 148 //Serbian
  }
  else if (numba == 148) {
    numba = 157 //Slovak
  }
  else if (numba == 157) {
    numba = 158 //Slovanian
  }
  else if (numba == 158) {
    numba = 169 //Swedish
  }
  else if (numba == 169) {
    numba = 181 //Turkish
  }
  else if (numba == 181) {
    numba = 184 //Urdu
  }
  else if (numba == 184) {
    numba = 186 //Vietnamese
  }
  else if (numba == 186) {
    numba = 185 //Uzbeck
  }
  else if (numba == 185) {
    numba = 5000 //Random Number to Stop the Loop
    //Then comes the alert
    console.log("Complete!");
    await new Promise(r => setTimeout(r, 1000));
    console.log("All the captions has been set");
    await new Promise(r => setTimeout(r, 1000));
    console.log("Alerting User");
    await new Promise(r => setTimeout(r, 1000));
    alert("Your captions are done! You may have a great day!\n\nMade by: JalapenoGuy😎")
  }
  await new Promise(r => setTimeout(r, 1000));
}
