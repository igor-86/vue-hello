const {createApp} = Vue;

// Predisporre un'input per il nome dell'utente
// al click sul bottone salutare l'utente perima con alert e dopo con un messaggio in html

createApp({
    data() {
        return {
            message:"Benvenuto Vue!",
            imagePrint:"img/03.webp"
        }
    }

}).mount("#app");
