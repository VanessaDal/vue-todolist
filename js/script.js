// Creiamo una mini app di todolist con html+css+js in Vue
// Features principali:
// un input permette all’utente di scrivere una “cosa da fare”;
// un bottone permette di aggiungere quella cosa alla lista di cose da fare in pagina, come promemoria;
// una volta che l’utente ha ipoteticamente svolto l’attività, grazie ad un bottone (X) può eliminare quella determinata cosa dalla lista.

var app=new Vue({
    el: '#app',
    data:{
        todo:[],
        text:""
    },
    methods:{
        submitText:function(){
            if(this.todo.includes(this.text)===false){
            this.todo.push(this.text);
            this.text="";
            console.log(this.todo)}
            else{alert("Thid task already exist")}
        },

        removeText:function(i){
            this.todo.splice(i,1)
        },

        editText:function(i){
            var a=prompt("inserisci un nuovo testo");
            this.todo.splice(i,1);
            // this.todo.push(a)
            this.todo[i]=a;
        }
    }
})