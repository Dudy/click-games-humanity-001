<template>
  <b-container class="research h-100">
    <b-row>
      <b-col sm="5" class="align-self-center">
        <div class="text-left align-middle">house</div>
      </b-col>
      <b-col sm="4" class="align-self-center">
        <div class="text-left align-middle">type 1</div>
      </b-col>
      <b-col sm="3" class="align-self-center">
        <b-button block variant="outline-success" disabled>research done</b-button>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="5" class="align-self-center">
        <div class="text-left align-middle">house</div>
      </b-col>
      <b-col sm="3" class="align-self-center">
        <div class="text-left align-middle">type 2</div>
      </b-col>
      <b-col sm="1" class="align-self-center">
        <b-button block v-b-toggle.collapse-1 variant="info">Info</b-button>
      </b-col>
      <b-col sm="3" class="align-self-center">
        <b-button
          block
          variant="primary"
          v-on:click="research()"
        >research</b-button>
      </b-col>
      <b-col sm="12">
        <b-collapse id="collapse-1" class="mt-2">
          <b-card>
            <ul class="info">
              <li class="text-left"><BIconCheckSquare style="color: green;"/> house type 1</li>
              <li class="text-left"><BIconXSquare style="color: red;"/> 3 research points</li>
            </ul>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>

    <b-row>
      <b-col sm="5" class="align-self-center">
        <div class="text-left align-middle">house</div>
      </b-col>
      <b-col sm="3" class="align-self-center">
        <div class="text-left align-middle">type 3</div>
      </b-col>
      <b-col sm="1" class="align-self-center">
        <b-button block v-b-toggle.collapse-2 variant="info">Info</b-button>
      </b-col>
      <b-col sm="3" class="align-self-center">
        <b-button
          block
          variant="primary"
          v-on:click="research()"
          disabled
        >research</b-button>
      </b-col>
      <b-col sm="12">
        <b-collapse id="collapse-2" class="mt-2">
          <b-card>
            <p class="card-text">You need to research house type 2 first.</p>
          </b-card>
        </b-collapse>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import store from '../store/index';
// import { BIconCheckSquare, BIconXSquare } from 'bootstrap-vue';
import { BIconXSquare } from 'bootstrap-vue';

export default {
  name: "Research",
  components: {
  //   BIconCheckSquare,
    BIconXSquare
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
    list-style: none
  }
</style>