// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus: Aggiungere un’immagine presa anch’essa da un data
// Altro possibile Bonus:
// gestire una funzione con un evento nel modo Vue.
Vue.directive('img', function(url) {
  var img = new Image();
  img.src = url;

  img.onload = function() {
    this.el.src = url;
    $(this.el)
      .css('opacity', 0)
      .animate({ opacity: 1 }, 1000)
  }.bind(this);
});

var app = new Vue({
  el: '#app',
  data: {
    message: "stampa a schermo un messaggio",
    text: "del testo a caso..",
    picture: 'https://lh3.googleusercontent.com/proxy/LSrBVzPhMGP6y8f7j3LGR7BU-oHxPNtXBJ0dxqX18ASTyvYWgGgIkFhoFbRAAAxa0T5WaPbOpi551AFKJaIK9UxzljGq9FrPPlOnvlMcrKbHW4Iyud8hVwGiMcob0R4g87PH8V0FWjrGt4cdu-U'
    // methods: {
    //   showImg: function() {
    //
    //   }
    // }
  }
});
