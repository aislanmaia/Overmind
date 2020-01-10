import { createOvermindMock } from 'overmind'
import { config } from '../../src/overmind/index'

describe('Actions', () => {
  describe('getUsuarios', () => {
    test('should get post with passed id', async () => {
      const overmind = createOvermindMock(config, {
        api: {
          getUsuarios () {
            return Promise.resolve(
              [{ 'id': 7, 'name': 'Brendon Marcos', 'email': 'brendon@gmail.com', 'cpf': '07037113355', 'age': 22 }]
            )
          }
        }
      })

      expect(overmind.state.admin).toEqual({
        usuarios: [],
        errors: []
      })

      await overmind.actions.admin.getUsuarios()

      expect(overmind.state.admin.usuarios).toHaveLength(4)
    })
  })
})
