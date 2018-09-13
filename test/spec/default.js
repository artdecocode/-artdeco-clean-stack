import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import artdecoCleanStack from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof artdecoCleanStack, 'function')
  },
  async 'calls package without error'() {
    await artdecoCleanStack()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await artdecoCleanStack({
      type: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T