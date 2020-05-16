<template>
  <div class="village">
    <h1>You're in your village, {{ name }}</h1>
    <p>Here you can build houses for your people as well as manufactures where they can work and produce goods.</p>
    <p
      v-bind:title="message"
    >Hover your mouse over me for a few seconds to see my dynamically bound title!</p>

    <h3>Population</h3>
    <p>You have {{ numberOfPeople }} people.</p>
    <button v-on:click="addPeople(1)">get immigrant</button>

    <h3>Housing</h3>
    <p>10 people can live in 1 house.</p>
    <ul id="production">
      <li>
        <p>
          You have {{ numberOfHouses }} houses.
          <button v-on:click="addHouse()">build house</button>
          cost: {{ costOfHouse }} wood
        </p>
      </li>
    </ul>

    <h3>Production</h3>
    <ul id="production">
      <li>
        <p>
          You have {{ amountOfWood }} wood.
          <button v-on:click="addWood(1)">harvest wood</button>
        </p>
      </li>
    </ul>

    <h3>Occupation</h3>
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
  name: "Village",
  props: {
    name: String,
    data: Object
  },
  data: function() {
    return {
      ticker: null,
      message: "Next step: build a house"
    };
  },
  methods: {
    initTicker() {
      this.ticker = setInterval(() => {
        this.$store.dispatch("tick");
      }, 1000);
    },
    addPeople: function(number) {
      store.commit("addPeople", number);
    },
    addHouse: function() {
      store.commit("addHouse");
    },
    addWood: function(amount) {
      store.commit("addWood", amount);
    },
    addLumberjack: function() {
      store.commit("addLumberjack");
    }
  },
  computed: mapState({
    numberOfHouses: state => state.numberOfHouses,
    numberOfPeople: state => state.numberOfPeople,
    amountOfWood: state => Math.floor(state.amountOfWood),
    costOfHouse: state => state.costOfHouse,
    numberOfLumberjacks: state => state.numberOfLumberjacks,
    myWoodproduction: state => state.woodproduction.toFixed(1), 

    // passing the string value 'count' is same as `state => state.count`
    countAlias: "count",

    // to access local state with `this`, a normal function must be used
    countPlusLocalState(state) {
      return state.count + this.localCount;
    }
  }),
  created() {
    this.initTicker();
  },
  beforeDestroy() {
    clearInterval(this.ticker);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
