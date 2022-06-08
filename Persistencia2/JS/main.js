const app = new Vue({
  el: '#app',
  data: {
    cats: [],
    newCat: null
  },
  mounted() {
    if (localStorage.getItem('cats')) {
      try {    // intenta hacer 
        this.cats = JSON.parse(localStorage.getItem('cats'));
      } catch(e) {    // si da error hacer....
        localStorage.removeItem('cats');
      }
    }
  },
  methods: {
    addCat() {
      // asegurarse que el usuario efectivamente ha escrito algo
      if (!this.newCat) {
        return;
      }
 
      this.cats.push(this.newCat);
      this.newCat = '';
      this.saveCats();
    },
    removeCat(x) {
      this.cats.splice(x, 1);   // elimina a partir de la posicion x el elemento en la  posicion 1
      this.saveCats();
    },
    saveCats() {
      const parsed = JSON.stringify(this.cats); 
      
      //El método JSON.stringify() convierte un objeto o valor de JavaScript en una 
      //cadena de texto JSON
      localStorage.setItem('cats', parsed);
    }
  }
 })