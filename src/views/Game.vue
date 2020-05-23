<template>
  <div class="game">
    <div>
      <b-tabs content-class="mt-3">
        <b-tab title="Population" active>
          <Population />
        </b-tab>
        <b-tab title="Housing">
          <Housing />
        </b-tab>
        <b-tab title="Production">
          <Production />
        </b-tab>
        <b-tab title="Occupation">
          <Occupation />
        </b-tab>
      </b-tabs>
    </div>
    <Message />
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import Population from "@/components/Population.vue";
import Housing from "@/components/Housing.vue";
import Production from "@/components/Production.vue";
import Occupation from "@/components/Occupation.vue";

export default {
  name: "Game",
  components: {
    Message,
    Population,
    Housing,
    Production,
    Occupation
  },
  data: function() {
    return {
      ticker: null
    };
  },
  methods: {
    initTicker() {
      this.ticker = setInterval(() => {
        this.$store.dispatch("tick");
      }, 1000);
    },
  },
  created() {
    this.initTicker();
  },
  beforeDestroy() {
    clearInterval(this.ticker);
  }
};
</script>

<style lang="scss">
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