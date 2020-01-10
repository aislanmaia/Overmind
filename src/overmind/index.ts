import { createOvermind } from 'overmind'
import { createConnect, createPlugin } from 'overmind-vue'
import { namespaced } from 'overmind/config'
import * as admin from './admin'

export const config = namespaced({
  admin
})

const overmind = createOvermind(config)

export const connect = createConnect(overmind)
