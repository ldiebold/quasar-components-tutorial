<template>
  <q-page padding>
    <q-chip
      clickable
      label="edible"
      v-model="categories.edible"
      removable
      @remove="handleRemove"
    />

    <q-chip
      clickable
      label="poisonous"
      :selected.sync="categories.poisonous"
    />

    <div v-if="!australianPlantsFiltered.length">
      Please select a category
    </div>

    <q-list
      v-else
      bordered
      separator
      class="q-mt-lg"
    >
      <q-item
        v-for="plant in australianPlantsFiltered"
        :key="plant.label"
      >
        <q-item-section>
          {{ plant.label }}
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
export default {
  computed: {
    australianPlantsFiltered () {
      return this.australianPlants.filter(plant => {
        return this.categories[plant.category]
      })
    }
  },

  methods: {
    handleRemove (value) {
      console.log(value)
    }
  },

  data () {
    return {
      categories: {
        edible: true,
        poisonous: false
      },

      australianPlants: [
        {
          label: 'Rivermint',
          category: 'edible'
        },
        {
          label: 'Midyim berries',
          category: 'edible'
        },
        {
          label: 'Bush cherry',
          category: 'edible'
        },
        {
          label: 'Angels trumpets',
          category: 'poisonous'
        },
        {
          label: 'Oleander',
          category: 'poisonous'
        },
        {
          label: 'Milky mangrove',
          category: 'poisonous'
        }
      ]
    }
  }
}
</script>
