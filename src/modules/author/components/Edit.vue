<template>
  <v-form @submit.prevent="updateAuthor">
    <v-row>
      <v-col>
        <h1 class="text-center light-blue--text text--darken-3">Actualizacion de Author</h1>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="6">
        <v-text-field label="Nombre completo del autor" v-model="author.name" />
      </v-col>
      <v-col cols="6">
        <v-text-field label="Pais del autor" v-model="author.country" />
      </v-col>
    </v-row>
    <v-row>
      <v-col class="d-flex">
        <v-btn type="submit" dark outlined color="blue darken-20" class="mx-auto">Actualizar Author</v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>
<script>
import { AUTHOR_GETBYID } from '@/graphql/author'
export default {
  name: "Edit",
  apollo: {
    author: {
      query: AUTHOR_GETBYID,
      variables(){
        return {
          id : this.$route.params.id
        }
      },
      update: (data) => data.author[0]
    }
  },
  data (){
    return {
      author: ''
    }
  }
}
</script>