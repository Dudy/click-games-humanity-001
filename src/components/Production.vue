<template>
  <div class="production">
    <ul id="production">
      <li>
        <p>
          You have {{ amountOfWood }} wood.
          <button v-on:click="addWood(1)">harvest wood</button>
        </p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";

export default {
  name: "Production",
  methods: {
    addWood: function(amount) {
      store.commit("addWood", amount);
    }
  },
  computed: mapState({
    amountOfWood: state => Math.floor(state.amountOfWood)
  })
};
</script>
