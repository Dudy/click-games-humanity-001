<template>
  <b-container class="research h-100">
    <b-row>
      <b-col sm="12">
        <b-button block v-b-toggle.top-collapse variant="info">total research points per tick: 2</b-button>
      </b-col>
      <b-col sm="12" style="margin-top: -12px; z-index: -1;">
        <b-collapse id="top-collapse" class="mt-2">
          <b-card style="border-color: #138496;">
            <b-row>
              <b-col sm="4">
                <div class="text-left">working researchers</div>
              </b-col>
              <b-col sm="1">2</b-col>
              <b-col sm="1" style="color: green;">(+2)</b-col>
              <b-col sm="6"></b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <div class="text-left">food surplus</div>
              </b-col>
              <b-col sm="1">3</b-col>
              <b-col sm="1" style="color: green;">(+1)</b-col>
              <b-col sm="6"></b-col>
            </b-row>
            <b-row>
              <b-col sm="4">
                <div class="text-left">education level</div>
              </b-col>
              <b-col sm="1">1</b-col>
              <b-col sm="1" style="color: red;">(-1)</b-col>
              <b-col sm="6"></b-col>
            </b-row>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="12" style="z-index: 10;">
        <b-button block v-b-toggle.housing-collapse variant="info">housing</b-button>
      </b-col>
      <b-col sm="12" style="margin-top: -12px; z-index: 0;">
        <b-collapse id="housing-collapse" class="mt-2">
          <b-card style="border-color: #138496;">
            <b-row>
              <b-col sm="7" class="align-self-center">
                <div class="text-left align-middle">house type 1</div>
              </b-col>
              <b-col sm="2" class="align-self-center"></b-col>
              <b-col sm="3" class="align-self-center">
                <b-button block variant="outline-success" disabled>research done</b-button>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="7" class="align-self-center">
                <div class="text-left align-middle">house type 2</div>
              </b-col>
              <b-col sm="2" class="align-self-center">
                <b-button block v-b-toggle.collapse-housing-1 variant="info">Info</b-button>
              </b-col>
              <b-col sm="3" class="align-self-center">
                <b-button block variant="primary" v-on:click="research()">research</b-button>
              </b-col>
              <b-col sm="12">
                <b-collapse id="collapse-housing-1" class="mt-2">
                  <b-card>
                    <p>prerequisits</p>
                    <p>cost</p>
                    <p>capability</p>
                    <ul class="info">
                      <li class="text-left">
                        <BIconCheckSquare style="color: green;" /> house type 1
                      </li>
                      <li class="text-left">
                        <BIconXSquare style="color: red;" /> 3 research points
                      </li>
                    </ul>
                  </b-card>
                </b-collapse>
              </b-col>
            </b-row>

            <b-row>
              <b-col sm="7" class="align-self-center">
                <div class="text-left align-middle">house type 3</div>
              </b-col>
              <b-col sm="2" class="align-self-center">
                <b-button block v-b-toggle.collapse-housing-2 variant="info">Info</b-button>
              </b-col>
              <b-col sm="3" class="align-self-center">
                <b-button block variant="primary" v-on:click="research()" disabled>research</b-button>
              </b-col>
              <b-col sm="12">
                <b-collapse id="collapse-housing-2" class="mt-2">
                  <b-card>
                    <p class="card-text">You need to research house type 2 first.</p>
                  </b-card>
                </b-collapse>
              </b-col>
            </b-row>

            <ResearchItem />
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from "vuex";
import store from "@/store/index";
// import { BIconCheckSquare, BIconXSquare } from 'bootstrap-vue';
import { BIconXSquare } from "bootstrap-vue";
import ResearchItem from './ResearchItem'
// import Research from "@/components/research/Research.vue";

export default {
  name: "Research",
  components: {
    //   BIconCheckSquare,
    BIconXSquare,
    ResearchItem
  },
  methods: {
    research: function() {
      console.log(store.state.housing);
    }
  },
  computed: mapState({
    housing: state => state.housing
  })
};
</script>

<style scoped>
ul.info {
  list-style: none;
}
</style>