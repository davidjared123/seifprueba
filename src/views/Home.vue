<template>
  <div class="home">
   
        <div class="navbar">
          <v-btn to="/MaterialApoyo" small v-bind="attrs" v-on="on">Añadir material de apoyo</v-btn>
        </div>
    <div class="navbar2">
      <h4 class="text-center">Nuestros productos</h4>
    </div>

    <div class="cards mt-5">
      <v-row fluid justify="space-around">
        <v-col v-for="item in cards" :key="item.id" cols="4">
          <v-card class="mx-auto" max-width="220">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
              height="100px"
            ></v-img>

            <div class="card-content text-center pa-1">
              <h4>{{item.name}}</h4>
              <v-btn
                min-width="100px"
                rounded
                color="primary"
                class="mb-1"
                dark
                small
                >ver</v-btn
              >
            </div>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},
  data: () => ({
    modal: false,
    producto: [
        { text: 'Servicio 1' },
        { text: 'Servicio 2' },
        { text: 'Servicio 3' },
        { text: 'Servicio 4' },
        { text: 'Servicio 5' },
      ],
      modulo: [
        { text: '100%' },
        { text: '75%' },
        { text: '50%' },
        { text: '25%' },
        { text: '0%' },
      ],
      categoria: [
        { text: 'Tecnologia' },
        { text: 'Sofware' },
        { text: 'Base de datos' },
        { text: 'Hardware' },
        { text: 'Atencion al cliente' },
      ],
      entorno: [
        { text: 'planificacion' },
        { text: 'desarrollo' },
        { text: 'debugging' },
        { text: 'build' },
        { text: 'otro' },
      ],
    dialog: false,
    cards: [
      { name: 'Seif',img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
      { name: 'Seif Módulos',img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
      { name: 'Controller',img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
      { name: 'Visitantes Robustos',img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
      { name: 'PTT',img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
      { name: 'Controlpharm',img: "https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" },
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
}
.navbar2 {
  border-bottom: solid black 1px;
  padding: 0.2em;
}
.cards {
  padding: 0 4em;
}

</style>
