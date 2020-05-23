<template>
  <div class="population">
    <p>You have {{ numberOfPeople }} people.</p>
    <button v-on:click="addPeople(1)">get immigrant</button>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";

export default {
  name: "Population",
  methods: {
    addPeople: function(number) {
      store.commit("addPeople", number);
    }
  },
  computed: mapState({
    numberOfPeople: state => state.numberOfPeople
  })
};
</script>
