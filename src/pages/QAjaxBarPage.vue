<template>
  <q-page padding>
    <q-ajax-bar
      color="purple"
      size="14px"
      position="top"
      reverse
      skip-hijack
      ref="bar"
    />

    <q-btn
      label="fake request"
      @click="fakeAjaxRequest"
    />

    <pre>{{ result }}</pre>
  </q-page>
</template>

<script>
export default {
  methods: {
    fakeAjaxRequest () {
      // this.$axios.get('https://jsonplaceholder.typicode.com/posts')
      //   .then(response => {
      //     this.result = response.data
      //   })
      const bar = this.$refs.bar

      bar.start()

      setTimeout(() => {
        bar.stop()
      }, 3000)
    }
  },

  data () {
    return {
      result: null
    }
  }
}
</script>
