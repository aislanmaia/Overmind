import { Api } from './effects'

export const getUsuarios = async ({ effects, state, actions }) => {
  const api = new Api()
  await api.getUsers().then(res => {
    state.admin.usuarios = res.data
  })
}

// export const addNewPost = async ({ effects, state, actions }) => {
//   await state
// }
