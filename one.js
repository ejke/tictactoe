// make computer win.

// 1) human x, computer o
// 2) human starts, picks place.
// computer  finds element next to x, puts o there
// 2) human pick another one
// computer analyses two x and puts o to make a row or between two x
// loop

/*swith choose from: leia pattern:
1: 2, 4, 5
2: 1, 3, 5
3: 2, 5, 6
4: 1, 5, 7
5: 1, 2, 3, 4, 6, 7, 8, 9
6: 3, 5, 9
7: 4, 5, 8
8: 5, 7, 9
9: 5, 6, 8

5 on 8, kõiki teisi numbreid on 3 kohas
ükski numbrikombinatsioon ei kordu
algoritm
*/

document.addEventListener("DOMContentLoaded", function(event){

  var items = [].slice.call(document.getElementsByClassName("item")),
      numberofClicks = 0, //to limit do-while loop being infinite. Buggy if could click forever, but fair enough for the meaning of this game.
      loopIteration = [],
      tictactoe = document.getElementById("tictactoe"),
      h1 = document.getElementById("h1"),
      caseArray,
      random,
      randomItem;

  items.forEach(function (element, index){
    element.addEventListener("click", function(){
      var n = this.id;
      numberofClicks++;
      loopIteration = [];

      if (this.classList.contains("x") || this.classList.contains("o")) {
        console.log("skip");
      } else {
        this.classList.add("x")
        // in different cases, put to be vastav id ja pärast switchi prindi välja, siis ei pea mitu korda loopima
        switch (n) {
          case '1': caseArray = [2,4,5];
            break;
          case '2': caseArray = [1, 3, 5];
            break;
          case '3': caseArray = [2, 5, 6];
            break;
          case '4': caseArray = [1, 5, 7];
            break;
          case '5': caseArray = [1, 2, 3, 4, 6, 7, 8, 9];
            break;
          case '6': caseArray = [3, 5, 9];
            break;
          case '7': caseArray = [4, 5, 8];
            break;
          case '8': caseArray = [5, 7, 9];
            break;
          case '9': caseArray = [5, 6, 8];
            break;
          default:
          console.log("failed");
            break;
        }
        // here comes math function that chooses between those 3 numbers defined up in switch. if there is something already, choose another one
        do {
          random = caseArray[Math.floor(Math.random() * caseArray.length)];
          randomItem = document.getElementById(random);
          loopIteration.push(random);
          // console.log("loopIteration "+loopIteration);
          // console.log("loopIteration lenght" + loopIteration.length);
        } while (randomItem.classList.contains("x") && numberofClicks < 5 || randomItem.classList.contains("o") && numberofClicks < 5);
          randomItem.classList.add("o");



        var winO = items[0].classList.contains("o") && items[1].classList.contains("o") && items[2].classList.contains("o") ||
                   items[3].classList.contains("o") && items[4].classList.contains("o") && items[5].classList.contains("o") ||
                   items[6].classList.contains("o") && items[7].classList.contains("o") && items[8].classList.contains("o") ||
                   items[0].classList.contains("o") && items[3].classList.contains("o") && items[6].classList.contains("o") ||
                   items[1].classList.contains("o") && items[4].classList.contains("o") && items[7].classList.contains("o") ||
                   items[2].classList.contains("o") && items[5].classList.contains("o") && items[8].classList.contains("o") ||
                   items[0].classList.contains("o") && items[4].classList.contains("o") && items[8].classList.contains("o") ||
                   items[2].classList.contains("o") && items[4].classList.contains("o") && items[6].classList.contains("o");

        var winX = items[0].classList.contains("x") && items[1].classList.contains("x") && items[2].classList.contains("x") ||
                   items[3].classList.contains("x") && items[4].classList.contains("x") && items[5].classList.contains("x") ||
                   items[6].classList.contains("x") && items[7].classList.contains("x") && items[8].classList.contains("x") ||
                   items[0].classList.contains("x") && items[3].classList.contains("x") && items[6].classList.contains("x") ||
                   items[1].classList.contains("x") && items[4].classList.contains("x") && items[7].classList.contains("x") ||
                   items[2].classList.contains("x") && items[5].classList.contains("x") && items[8].classList.contains("x") ||
                   items[0].classList.contains("x") && items[4].classList.contains("x") && items[8].classList.contains("x") ||
                   items[2].classList.contains("x") && items[4].classList.contains("x") && items[6].classList.contains("x");

        if (winO || winX) {
          console.log('game over');
          tictactoe.classList.add("win");
          if (winX) {
            console.log('Human win!');
            h1.innerHTML = "Human wins!"
          } else if (winO) {
            console.log('PC win!');
            h1.innerHTML = "PC wins!"
          }
        } else {
          console.log('game is on');
        }
      }
    });
  });

  document.getElementById("restart").addEventListener("click", function(){
    for (var i = 0; i < items.length; i++){
    	items[i].classList.remove("x");
    	items[i].classList.remove("o");
    }
    numberofClicks = 0;
    tictactoe.classList.remove("win");
  }, false);
});
