<template>
  <b-container class="population h-100">
    <b-row>
      <b-col sm="5" class="align-self-center">
        <div class="text-left align-middle">number of people</div>
      </b-col>
      <b-col sm="4" class="align-self-center">
        <div class="text-right align-middle">{{ numberOfPeople }}</div>
      </b-col>
      <b-col sm="3" class="align-self-center">
        <b-button block variant="primary" v-on:click="addPeople(1)">get immigrant</b-button>
      </b-col>
    </b-row>
    <b-row>
      <b-col sm="5" class="align-self-center">
        <div class="text-left align-middle">reproduction rate (new people per second)</div>
      </b-col>
      <b-col sm="4" class="align-self-center">
        <div class="text-right align-middle">{{ reproductionRate }}</div>
      </b-col>
      <b-col sm="3" class="align-self-center">
        <b-button block variant="primary" v-on:click="addPeople(1)">get immigrant</b-button>
      </b-col>
    </b-row>
  </b-container>
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
    numberOfPeople: state => Math.floor(state.numberOfPeople),
    reproductionRate: state => state.reproductionRate.toFixed(2)
  })
};
</script>
