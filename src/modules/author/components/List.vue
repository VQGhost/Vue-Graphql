<template>
  <div>
    <h1 class="light-blue--text text-darken-3">Bienvenido a la seccion de authores</h1>
    <p class="font-italic light-blue--text text--accent-4">"Aqui podras gestionar a tus autores"</p>
    <v-simple-table>
      <template v-slot>
        <thead>
          <tr>
            <th class="txt-left">Nombre</th>
            <th class="txt-left">Pais</th>
            <th class="txt-center">Herramientas</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>
              <v-row justify="center">
                <v-btn fab small dark color="primary">
                  <v-icon>mdi-pencil</v-icon>
                </v-btn>
              </v-row>
            </td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <Modal icon="mdi-plus-thick" v-slot:default="{closeModal}">
      <v-card>
        <v-form ref="createAuthorForm" @submit.prevent="createAuthor(closeModal)">
          <v-card-title>
            <h2>Regitro de autor nuevo</h2>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-text-field label="Nombre" v-model="author.name" :rules="nameRules" />
                <v-spacer />
                <v-text-field label="Pais" v-model="author.country" :rules="countryRules" />
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" @click="closeModal(false)">Cerrar</v-btn>
            <v-spacer />
            <v-btn color="blue darken-1" dark type="submit">Registrar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </Modal>
  </div>
</template>
<script>
export default {
  name : "List"
}
</script>