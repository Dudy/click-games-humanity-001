<template>
  <transition name="fadeAway" v-on:enter="enter">
    <div class="message" v-if="this.$store.state.message">
      <p>{{this.$store.state.message }}</p>
    </div>
  </transition>
</template>

<script>
export default {
  name: "Message",
  methods: {
    enter: function() {
      var that = this
      setTimeout(function() {
        that.$store.dispatch('deleteMessage')
      }, 2000)
    }
  }
};
</script>

<style scoped>
.fadeAway-enter-active {
    background-color: aquamarine;
}

.fadeAway-leave-active {
  transition: opacity 2s;
}

.fadeAway-leave-to {
  opacity: 0;
  background-color: transparent;
}

.message {
  position: absolute;
  background-color: aquamarine;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 40px;
}

.message p{
    margin-top: 12px;
}
</style>