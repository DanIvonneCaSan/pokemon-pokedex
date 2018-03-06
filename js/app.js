$(document).ready(function (){
  dataRequest(urlPokeApi);
});

let urlPokeApi = 'https://pokeapi.co/api/v2/pokedex/1/';
//'https://pokeapi.co/api/v2/pokemon-form/701/'; link para entrar a la imágen 701 es igual al id

function dataRequest (url) {
  fetch(`${url}`).then(response => {
    response.json(). then( dataPokedex => {
      console.log(dataPokedex);
      dataPokemon (dataPokedex);
    });
  });
};

function dataPokemon(data) {
  for (let i = 0; i < data.pokemon_entries.length; i++) {
    let name = data.pokemon_entries[i].pokemon_species.name;
    let url = data.pokemon_entries[i].pokemon_species.url;
    let urlPokemonForm = `https://pokeapi.co/api/v2/item/${name}`;
    console.log(urlPokemonForm);
    // resultado https://pokeapi.co/api/v2/item/bulbasaur
    drawPokemon(name, url);
    //
    // console.log(name);
    console.log("De aquí sale");
    console.log(url);
    // resultado https://pokeapi.co/api/v2/pokemon-species/1/

    // fetch(url).then((response)=>{
    //   response.json().then(dataUrl =>{
    //     // funcionModal(dataUrl);
    //     console.log(dataUrl);
    //   });
    // });

    // fetch(urlPokemonForm).then((response)=>{
    //   response.json().then(dataUrl1 =>{
    //     // funcionModal(dataUrl1);
    //     console.log(dataUrl1);
    //     console.log("nombre");
    //     console.log(dataUrl.name);
    //   });
    // });
  }
}; //Fin función dataPokemon

function drawPokemon (name, url){
  let pokemonHTML = url;
  console.log(pokemonHTML);
  //Card
  var $div1 = $("<div />").addClass("card");
  var $img1 = $("<img />").addClass("card-img-top").attr('src',"https:dummyimage.com/200x200");
  var $div2 = $("<div />").addClass("card-block");
  var $h4_2 = $("<h4 />").addClass("card-title").text(name);
  var $p2 = $("<p />").addClass("card-text").text(pokemonHTML);
  var $div3 = $("<div />").addClass("card-block");
  var $a3 = $("<a />").addClass("card-link").attr({'href':"pokemonHTML", 'data-toggle':"modal", 'data-target':"#myModal"}).text(pokemonHTML);

  $div3.append($a3);
  $div2.append($h4_2);
  $div2.append($p2);
  $div1.append($img1);
  $div1.append($div2);
  $div1.append($div3);

  $('#cont-cards').prepend($div1);

}

function funcionModal (dataUrl){
  // console.log(dataUrl);
  // console.log("nombre");
  // console.log(let name = dataUrl.name);
  // let effect = dataUrl.fling_efect.name;
// let image = dataUrl.sprites.default;
  // $('#myModal').on('.card', function () {
  // // $('#myInput').focus()
  // })

  $('#modal-title').text("Hola");
  // $('#modal-title').text(name);
  // $('#text-mod').text(effect);
  // $('#img-mod').attr('src',image);
}
