const app = new Vue({
    el:'#app',
    data:{
        name:'',
        edad:0
    },
    mounted() {
      if(localStorage.name) this.name = localStorage.name;
      if(localStorage.edad) this.edad = localStorage.edad;
    },
    methods: {
        persist() {
          localStorage.name = this.name;
          localStorage.edad = this.edad;
        }
      }
  })