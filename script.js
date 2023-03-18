let showHeroesBtn = document.getElementById('show-heroes-btn');
let heroesContainer = document.getElementById('heroes-container');
let startFightBtn = document.getElementById('start-fight-btn');
let showWinnerDiv = document.getElementById('show-winner');
showHeroesBtn.addEventListener('click', showHeroesContainer);
startFightBtn.addEventListener('click', showWinner);


function showHeroesContainer() {
    showHeroesBtn.classList.add("d-none");
    heroesContainer.classList.add('d-flex');
    startFightBtn.classList.add('d-block');
}


function showWinner() {
  showWinnerDiv.innerHTML = epicFight.findWinner();
  startFightBtn.classList.remove("d-block");
  heroesContainer.classList.remove("d-flex");
  showWinnerDiv.classList.add("d-flex");
}




//  HTML:
//   <div id="heroes-container">
//   </div>
//   <div id="show-winner">
//   </div>
//   JS:
//   let showWinnerDiv = document.getElementById('show-winner');
//   // la click pe butonul de Start Fight vreau sa adaug un event listener, care sta si asculta momentul in care userul da click pe buton
//   startFightBtn.addEventListener('click', showWinner);
//   function showWinner() {
//     showWinnerDiv.innerHTML = "Winner To Be Announed!";
//     startFightBtn.classList.remove("d-block");
//     showHeroesContainer.classList.remove("d-flex");
//   }
 