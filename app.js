let count = 1; 

function getData(){
   
    let element = document.getElementById('pokemons')
    element.innerHTML = `<img class="poke" src="https://tinyurl.com/ironhack-pokemons/${count}.svg"/>`
}

let clickLeft = document.getElementById('left')

clickLeft.onclick = function(){

   
    if (count > 1){
        count = count - 1;
        getData()
    }
}

let clickRight = document.getElementById('right')
clickRight.onclick = function(){
    if (count < 650){
        count = count + 1;
        getData()
    }
}

getData();
