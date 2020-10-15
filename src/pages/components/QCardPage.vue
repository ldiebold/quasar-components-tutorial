<template>
  <q-page
    padding
    style="margin-bottom: 4000px;"
  >
    <q-card style="max-width: 300px;">
      <q-item>
        <q-item-section avatar>
          <q-avatar class="bg-primary text-white">
            L
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>Author</q-item-label>
          <q-item-label caption>
            Luke Diebold
          </q-item-label>
        </q-item-section>
      </q-item>

      <q-parallax
        :height="150"
        src="https://yummyux.com.au/wp-content/uploads/2018/10/attachment-27-1920x960.jpg"
      >
      <!--
      <q-separator inset />

      <q-card-section>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa modi, totam vero numquam, optio sint dignissimos ducimus ratione voluptates reiciendis sapiente quisquam dolor accusamus enim qui sunt earum, cupiditate atque!
      </q-card-section> -->
      </q-parallax>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
}
</script>
