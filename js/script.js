
var app = new Vue({
  el:"#app",
  data:{
    arrayMovie:[],
    inputSearch:''
  },
  mounted: function (){
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=f162c76f293b24b89a2c277c7f09142c')
    .then(film => {
      this.arrayMovie = film.data.results
    });
  }
});
