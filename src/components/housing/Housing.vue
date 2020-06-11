<template>
  <div class="housing">
    <p>10 people can live in 1 house.</p>
    <ul id="production">
      <li>
        <p>UID = {{ this.uid }}</p>
        <p>UID = {{ uid }}</p>
        <p>UID = {{ collapseId }}</p>
        <p>
          You have {{ numberOfHouses }} houses.
          <button v-on:click="addHouse()">build house</button>
          cost: {{ costOfHouse }} wood
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex"
import store from "@/store/index"
  import { createUid } from '@/mixins/ComponentHelper'

export default {
  name: "Housing",
  mixins: [ createUid ],
  methods: {
    addHouse: function() {
      store.commit("addHouse");
    }
  },
  computed: mapState({
    numberOfHouses: state => state.numberOfHouses,
    costOfHouse: state => state.costOfHouse
  }),
  data: function() {
    return {
      collapseId: this.uid + "-b"
    }
  }
}
</script>
