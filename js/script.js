// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.
var variabile = prompt("scrivi qualcosa");
var app = new Vue({
  el: '#app',
  data: {
    message: "stampa a schermo un messaggio",
    text: variabile,
    picture: "https://cdn.pixabay.com/photo/2020/11/09/18/54/mountains-5727541__340.jpg",
  },
  methods: {
    toggleImg: function() {
      document.getElementById('immagine').classList.toggle('invisible');
    }
  }
});
