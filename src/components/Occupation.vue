<template>
  <div class="occupation">
    <ul id="occupation">
      <li>
        <p>
          You have {{ numberOfLumberjacks }} lumberjacks.
          <button
            v-on:click="addLumberjack()"
          >add lumberjack</button>
        </p>
        <p v-if="numberOfLumberjacks > 0">They produce {{ myWoodproduction }} wood per second.</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
import store from "../store/index";

export default {
  name: "Occupation",
  methods: {
    addLumberjack: function() {
      store.commit("addLumberjack");
    }
  },
  computed: mapState({
    numberOfLumberjacks: state => state.numberOfLumberjacks,
    myWoodproduction: state => state.woodproduction.toFixed(1)
  })
};
</script>
