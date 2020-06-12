var nav = new Vue({
    el: "#app",
    data:{
        input: '',
        pokemon: [],
        changed: '',
        error: '',
    },
    beforeMount() {

    },

    methods:{
        changePokemon: function(){
            this.changed = this.input.toLowerCase();

            fetch('https://pokeapi.co/api/v2/pokemon/' + this.changed + '/')
            .then(response => response.json())
            .then(json => {
                this.error = true;
                this.pokemon = json;
                console.log(this.pokemon)
                this.error = false;
            })
            .catch(error => {
                this.error = true;
            });
        }


    }
})