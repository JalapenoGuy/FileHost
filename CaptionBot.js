//You might want to put the English caption first
//"numba" is the number of the list box in where you select you language, so it's like your language
var numba = 161; //Spanish
while (numba < 300) {
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
  else if (numba == 89) {
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
