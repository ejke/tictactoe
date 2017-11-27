// class version, where computer assigns random place to put o in and human most probably wins
document.addEventListener("DOMContentLoaded", function(event){

  var items = [].slice.call(document.getElementsByClassName("item")),
      numberofClicks = 0, //to limit do-while loop being infinite. Buggy if could click forever, but fair enough for the meaning of this game.
      tictactoe = document.getElementById("tictactoe"),
      h1 = document.getElementById("h1");
      console.log(h1);

  items.forEach(function (element, index){
    element.addEventListener("click", function(){
      var rightIndex = index + 1,
          random,
          randomItem;

      numberofClicks++;
      // console.log("numberofClicks " +numberofClicks);
      // human adds x:
      if (this.classList.contains("x") || this.classList.contains("o")) {
        console.log("skip, wrong item to click");
      } else {
        this.classList.add("x");
        // console.log("you clicked item " +rightIndex+ "!");
        // pc finds random number, attaches it to element and loops until finds element that doesn't have a class. then adds o:
        do {
          random = Math.floor((Math.random() * (9 - 0) + 1));
          randomItem = document.getElementById(random);
        } while (randomItem.classList.contains("x") && numberofClicks < 5 || randomItem.classList.contains("o") && numberofClicks < 5 || random == rightIndex);
        randomItem.classList.add("o");
        // console.log("computer chose " +random+ "!");

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
