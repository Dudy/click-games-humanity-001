<template>
  <div class="game">
    <Village name="Harxheim" />
    <Message />
  </div>
</template>

<script>
// @ is an alias to /src
import Village from "@/components/Village.vue"
import Message from "@/components/Message.vue"

export default {
  name: "Game",
  components: {
    Village,
    Message
  }
};
</script>
