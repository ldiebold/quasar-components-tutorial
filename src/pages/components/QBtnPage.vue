<template>
  <q-page
    padding
  >
    <q-btn
      icon="logout"
      round
      flat
    />
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      progress: 0
    }
  },

  methods: {
    handleClicked () {
      console.log('clicked')
    },

    buttonProps ({ isExactActive }) {
      return {
        color: isExactActive ? 'red' : undefined
      }
    },

    goToHome (event, go) {
      event.navigate = false

      setTimeout(() => {
        go()
      }, 2000)
    },

    simulateRequest () {
      this.loading = true
      this.progress = 0
      setTimeout(() => { this.progress += 20 }, 1000)
      setTimeout(() => { this.progress += 20 }, 2000)
      setTimeout(() => { this.progress += 20 }, 3000)
      setTimeout(() => { this.progress += 20 }, 4000)
      setTimeout(() => { this.progress += 20 }, 5000)

      setTimeout(() => {
        this.loading = false
      }, 5000)
    }
  }
}
</script>
