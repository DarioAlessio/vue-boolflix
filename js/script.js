

var app = new Vue({
  el:"#app",
  data:{
    arrayMovie:[],
    inputSearch:''
  },
  methods:{
    search(){
      // ('URI + HTTP / ? API-KEY + &query=' + params)
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=f162c76f293b24b89a2c277c7f09142c&query=' + this.inputSearch)
      .then(response => {
        this.arrayMovie = response.data.results;
          this.inputSearch = '';
      });

    }
  }

});
