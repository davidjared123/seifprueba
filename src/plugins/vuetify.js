import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    primary: "#15ADC7",
    secondary: "#424242",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
    btncolor : '#15ADC7', // Azul de los botones
    headforms : '#D2EDF2', // Azul cabecera formularios modal
    titlesdark: "#054278", // Azul oscuro titulos y barra de progreso
    titleslight: "#15ADC7", //Azul claro titulos formularios
    backgrey : "#F8F8F8", // gris clarito fondo
    ntitlesdark: "#012362", // Nuevo color de titlulos oscuro
  },
});
