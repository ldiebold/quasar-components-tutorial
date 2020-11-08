<template>
  <q-page padding>
    <div style="width: 50%;">
      <q-form
        action="/some-url"
        method="post"
      >
        <h2>QInput</h2>
        <q-input
          name="input"
          v-model="text"
        />

        <h2>QSelect</h2>
        <q-select
          name="select"
          :options="['Panda', 'Lily', 'Moe']"
          v-model="list"
        />

        <h2>QBtnToggle</h2>
        <q-btn-toggle
          name="btntoggle"
          :options="[
            { label: 'Panda', value: 'Panda' },
            { label: 'Lily', value: 'Lily' },
            { label: 'Moe', value: 'Moe' }
          ]"
          v-model="list"
        />

        <h2>QRadio</h2>
        <q-radio
          name="radio1"
          v-model="list"
          val="Lily"
        />
        <q-radio
          name="radio2"
          v-model="list"
          val="Panda"
        />
        <q-radio
          name="radio3"
          v-model="list"
          val="Moe"
        />

        <h2>QCheckbox</h2>
        <q-checkbox
          name="checkbox"
          v-model="selectedOption"
        />

        <h2>QToggle</h2>
        <q-toggle
          name="toggle"
          v-model="selectedOption"
        />

        <h2>QSlider</h2>
        <q-slider
          name="slider"
          label
          v-model="distance"
        />

        <h2>QRange</h2>
        <q-range
          name="range"
          label
          v-model="range"
        />

        <h2>QFile</h2>
        <q-file
          name="file"
          v-model="file"
        />

        <h2>QTime</h2>
        <q-time
          name="time"
          v-model="time"
        />

        <h2>QDate</h2>
        <q-date
          name="date"
          v-model="date"
        />

        <h2>Submit Button</h2>
        <q-btn
          label="submit"
          type="submit"
        />
      </q-form>
    </div>

    <q-page-sticky
      position="right"
      style="width: 50%;"
    >
      <q-card>
        <q-card-section>
          <pre>{{ $data }}</pre>
        </q-card-section>
      </q-card>

      <q-card-actions>
        <q-btn
          @click="logger($data)"
          label="logger"
        />
      </q-card-actions>
    </q-page-sticky>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      text: 'Luke',
      list: null,
      selectedOption: null,
      isHuman: false,
      distance: 10,
      range: {
        min: 10,
        max: 20
      },
      file: null,
      time: null,
      date: null
    }
  },

  methods: {
    logger (...params) {
      console.log(...params)
    }
  }
}
</script>

<style>
h2 {
  margin-bottom: 12px;
  margin-top: 120px;
}
</style>
