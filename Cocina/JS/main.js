const templates={
    home:`
        <div id="home" class="active">
            <h2>Recetas</h2> 
            <p>{{receta}}</p> 
            <p>Ingredientes: {{ingredientes}}</p> 
            <p>Preparacion: {{preparacion}}</p> 
        </div>`,
    about:`
        <div id="about" class="container active">
            <h2> A cerca nosotros </h2>
            <img v-bind:src="imagen" alt="">
            <p>{{texto}}</p>
        </div>`,
    contact:`
        <div id="contact" class="container active">
            <h2>Contacto</h2>
            <p>Envíame tus sugerenciasde recetas a mi correo: <a :href=  ' "mailto:"+mail'   >{{mail}}</a></p>       
        </div>`
}

var app=new Vue({
    el:"#app",
    data: {
        view : 'home',
    },
    components: {
        home: {
            data:function () {      
                return {receta:"Sopa de calabaza",
                        ingredientes:"Calabaza, agua y sal ",
                        preparacion:" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            },

            props: [],  //parametros
            template: templates.home
        },
        about: {
            data: function () {return {
                imagen:"https://gourmetdemexico.com.mx/wp-content/uploads/2018/03/descarga.jpg",
                texto:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.texto:"
            }},
            props: [],
            template: templates.about
        },
        contact: {
            data: function () {return {
                mail:"oscarramos@gmail.com",
            }},

            
            props: [],
            template: templates.contact
        } 
    }
    
})