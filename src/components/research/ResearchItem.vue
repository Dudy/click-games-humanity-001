<template>
  <b-row>
    <b-col sm="7" class="align-self-center">
      <div class="text-left align-middle">house type 2</div>
    </b-col>
    <b-col sm="2" class="align-self-center">
      <b-button block v-b-toggle.{{collapseId}} variant="info">Info</b-button>
      <button type="button" class="btn btn-info btn-block collapsed" aria-expanded="false" :aria-controls="collapseId">Info</button>
    </b-col>
    <b-col sm="3" class="align-self-center">
      <b-button block variant="primary" v-on:click="research()">research</b-button>
    </b-col>
    <b-col sm="12">
      <b-collapse :id="collapseId" class="mt-2">
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
</template>

<script>
import { createUid } from '@/mixins/ComponentHelper'

export default {
  name: "ResearchItem",
  mixins: [ createUid ],
  props: {
    researchItemData: Object
  },
  data: function() {
    return {
      collapseId: 'collapse-' + this.uid
    }
  }
}
</script>
