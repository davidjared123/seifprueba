<template>
  <div class="apoyo">
    <div class="navbar">
      <router-link class="router-link" to="/">Vista principal</router-link>
      <span class="router-link"> > </span>
      <router-link class="router-link" to="/MaterialApoyo">Seif</router-link>
      <span class="router-link"> > </span>
      <router-link class="router-link disabled" to=""
        >Preguntas módulos</router-link
      >
    </div>
    


    <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Preguntas</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.pregunta"
                      label="Pregunta"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                  >
                    <v-text-field
                      v-model="editedItem.fecha"
                      label="Fecha"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                  >
                    <v-text-field
                      v-model="editedItem.modulo"
                      label="modulo"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="4"
                  >
                    <v-text-field
                      v-model="editedItem.categoria"
                      label="categoria"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                  >
                    <v-text-field
                      v-model="editedItem.respuesta"
                      label="Respuesta"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="red darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="headline">¿Estas seguro de inhabilitar esta pregunta?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="red darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>

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
          <div class="text-h5 pb-6">Pregunta actualizada</div>
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

export default {
  name: "Preguntas",
  components: {},
  data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          text: 'Pregunta',
          align: 'start',
          sortable: false,
          value: 'pregunta',
        },
        { text: 'Fecha de Creación', value: 'fecha' },
        { text: 'Módulo', value: 'modulo' },
        { text: 'Categoria', value: 'categoria' },
        { text: 'respuesta', value: 'respuesta' },
        { text: 'Acciones', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: {
        pregunta: '',
        fecha: 0,
        modulo: 0,
        categoria: 0,
        respuesta: 0,
      },
      defaultItem: {
        pregunta: '',
        fecha: 0,
        modulo: 0,
        categoria: 0,
        respuesta: 0,
      },
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
  computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
    },

    methods: {
      initialize () {
        this.desserts = [
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '15-02-2021',
            modulo: 'configuración',
            categoria: 'Login',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '23-03-2021',
            modulo: 'configuración',
            categoria: 'Desarrollo',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '26-05-2021',
            modulo: 'planificacion',
            categoria: 'Login',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '30-01-2021',
            modulo: 'configuración',
            categoria: 'Login',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '23-03-2021',
            modulo: 'configuración',
            categoria: 'Desarrollo',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '26-05-2021',
            modulo: 'planificacion',
            categoria: 'Login',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '30-01-2021',
            modulo: 'configuración',
            categoria: 'Login',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '23-03-2021',
            modulo: 'configuración',
            categoria: 'Desarrollo',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '26-05-2021',
            modulo: 'planificacion',
            categoria: 'Login',
            respuesta: 'Esta es la respuesta a mi pregunta',
          },
          {
            pregunta: 'Lorem ipsum dolor sitamet, consetetur',
            fecha: '30-01-2021',
            modulo: 'configuración',
            categoria: 'Login',
            respuesta: 'Esta es la respuesta a mi pregunta',
          }
        ]
      },

      editItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.desserts.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },
    },
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
.headline{
    font-size: 1em !important;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
}
</style>
