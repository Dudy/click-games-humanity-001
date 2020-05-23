<template>
  <div class="game">
    <b-container>
      <b-row>
        <b-col sm="10">
        </b-col>
        <b-col sm="2">
          time: {{ time }}
        </b-col>
      </b-row>
    </b-container>
    <b-container>
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
        <b-tab title="Research">
          <Research />
        </b-tab>
      </b-tabs>
    </b-container>
    <Message />
  </div>
</template>

<script>
import Message from "@/components/Message.vue";
import Population from "@/components/Population.vue";
import Housing from "@/components/Housing.vue";
import Production from "@/components/Production.vue";
import Occupation from "@/components/Occupation.vue";
import Research from "@/components/Research.vue";
import { mapState } from "vuex";

export default {
  name: "Game",
  components: {
    Message,
    Population,
    Housing,
    Production,
    Occupation,
    Research
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
  computed: mapState({
    time: state => state.time
  }),
  created() {
    this.initTicker();
  },
  beforeDestroy() {
    clearInterval(this.ticker);
  }
};
</script>

<style>
  div.row {
    margin-bottom: 5px;
  }
</style>