var myObj = {name: "Artime", age: 41, city: "Mendioland"};
var myJSON = JSON.stringify(myObj);
var myObj2 = JSON.parse(myJSON);

var app = new Vue({
    el: '#app',
    data: {
      message: "Aprendiendo Vue, paso a paso!",
      prueba2: "Probando",
      prueba3: "Si funciona soy un genio",
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue.js' },
        { text: 'Build Something Awesome' },
        { text: 'Hacer algo que sirva y dejar de jugar' }
      ],
      ok: Date.now()>"2021-01-01",
      fecha: Date.now(),
      counter: 0
    }
})
