<template>
  <div class="apoyo">
    <div class="navbar">
        <div>

      <router-link class="router-link" to="/">Vista principal</router-link>
      <span class="router-link"> > </span>
      <router-link class="router-link disabled" to=""
        >Añadir material de apoyo</router-link
      >
        </div>

      <v-btn x-small 
      color="blue-grey" flat class="router-link " to="/Preguntas">ver preguntas</v-btn>

    </div>
<div class="container">

    <v-card class="material-card">
      <v-card-title class="title">Material de apoyo</v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-select :items="producto" label="Producto*"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select :items="modulo" label="Módulo*"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select :items="categoria" label="Categoria*"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select :items="entorno" label="Entorno*"></v-select>
            </v-col>

            <v-col cols="12">
              <v-text-field
                label="Pregunta*"
                placeholder="Ingrese su pregunta"
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <!-- <v-textarea
                clearable
                clear-icon="mdi-close-circle"
                label="Text"
              ></v-textarea> -->
              <p>Texto*</p>
              <editor />
            </v-col>
          </v-row>
        </v-container>
        <small>*Campos requeridos</small>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="red darken-1" text @click="dialog = false">
          Cancelar
        </v-btn>
        <v-btn
          color="blue darken-1"
          dark
          text
          @click="
            dialog = false;
            modal = true;
          "
        >
          Añadir
        </v-btn>
      </v-card-actions>
    </v-card>
</div>

    <v-dialog
      transition="dialog-bottom-transition"
      max-width="600"
      v-model="modal"
    >
      <v-card>
        <v-card-text class="text-center pt-12">
          <div class="icon mt-5 ">
            <v-icon x-large dark>mdi-check</v-icon>
          </div>
          <div class="text-h5 pb-6 mt-2">Pregunta agregada</div>
        </v-card-text>
        <v-card-actions class="justify-end">
          <v-btn text @click="modal = false">Cerrar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>


  </div>
</template>

<script>
// @ is an alias to /src
import 'codemirror/lib/codemirror.css';
import '@toast-ui/editor/dist/toastui-editor.css';
 
import { Editor } from '@toast-ui/vue-editor';

export default {

  name: "MaterialApoyo",
  components: {editor: Editor,},
  data: () => ({
    modal: false,
    producto: [
      { text: "Servicio 1" },
      { text: "Servicio 2" },
      { text: "Servicio 3" },
      { text: "Servicio 4" },
      { text: "Servicio 5" },
    ],
    modulo: [
      { text: "100%" },
      { text: "75%" },
      { text: "50%" },
      { text: "25%" },
      { text: "0%" },
    ],
    categoria: [
      { text: "Tecnologia" },
      { text: "Sofware" },
      { text: "Base de datos" },
      { text: "Hardware" },
      { text: "Atencion al cliente" },
    ],
    entorno: [
      { text: "planificacion" },
      { text: "desarrollo" },
      { text: "debugging" },
      { text: "build" },
      { text: "otro" },
    ],
  }),
};
</script>

<style scoped>
.navbar {
  /* margin-top: ; */
  width: 100%;
  background-color: rgb(28, 154, 170);
  padding: 0.2em;
  text-align: center;
  border-top: solid black 1px;
  border-bottom: solid black 1px;
  display: flex;
  align-items: center;
  padding-left: 1em;
  justify-content: space-between;
}
.navbar2 {
  border-bottom: solid black 1px;
  padding: 0.2em;
}
.cards {
  padding: 0 4em;
}
.icon {
  background-color: rgb(10, 177, 10);
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
}
.router-link {
  text-decoration: none;
  color: white;
  font-size: 0.8em;
  margin-right: 0.5em;
}
.disabled {
  opacity: 0.6;
  pointer-events: none;
}
.material-card{
    width: 80vw;
    margin: 1em;
}
.title{
    background-color: rgb(62, 204, 185);
    padding: .2em;
    display: flex;
    justify-content: center;
    color: white;
}
</style>
