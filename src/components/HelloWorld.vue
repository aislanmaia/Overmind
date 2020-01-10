<template>
  <div class='hello'>
    <h2> {{ state.usuarios }} </h2>
    <button @click.prevent="actions.getUsuarios"> GET USUARIOS </button>
  </div>
</template>

<script lang="ts">
import { connect } from '../overmind'
import { Component, Vue } from 'vue-property-decorator'

@Component(
  connect(
    ({ state, effects, actions }) => ({
      state: state.admin,
      actions: actions.admin
    }),
    {}
  )
)
// @Component
export default class Hello extends Vue {}

// const Component = {
//   // data: (self) => ({
//   //   get usuarios () {
//   //     return self.state.admin
//   //   }
//   // })
// }

// export default connect(({ state, effects, actions }) => ({
//   state: state.admin,
//   actions: actions.admin
// }), Component)
</script>
