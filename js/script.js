const nameApiMovie = "https://api.themoviedb.org/3/movie/550?api_key=f162c76f293b24b89a2c277c7f09142c";

var app = new Vue({
  el:"#app",
  data:{
    arrayMovie:[],
    inputSearch:''
  },
  mounted: function (){
    axios.get(nameApiMovie)
    .then(film => {
      
    });
  }
});
