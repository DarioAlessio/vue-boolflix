const apiMovie ='https://api.themoviedb.org/3/search/movie?api_key=f162c76f293b24b89a2c277c7f09142c'; // HTTP MOVIE
const apiTv ='https://api.themoviedb.org/3/search/tv?api_key=f162c76f293b24b89a2c277c7f09142c';// HTTP TV

var app = new Vue({
  el:"#app",
  data:{
    logoImage:'https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=46',
    arrayMovieTv:[],
    inputSearch:''
  },
  methods:{
    search(){

      let requestOne = axios.get(apiMovie, {
        params: {
          query: this.inputSearch
        }
      })

      let requestTwo = axios.get(apiTv, {
        params: {
          query: this.inputSearch
        }
      })

      axios.all([requestOne, requestTwo]).then(axios.spread((...responses) => {
        let movie = responses[0].data.results;
        // console.log(responses[0].data.results);
        let tv = responses[1].data.results;
        // console.log(responses[1].data.results);
        this.arrayMovieTv = [...movie,...tv];
        // console.log(...oneMovie,...oneTv);

      }))
    }
  }

});
