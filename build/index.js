const { debuglog } = require('util');

const LOG = debuglog('@artdeco/clean-stack')

/**
 * A fork of clean-stack to remove internal Node.js lines from error stacks.
 * @param {Config} config Options for the program.
 * @param {boolean} config.shouldRun A boolean option.
 */
               async function artdecoCleanStack(config) {
  const {
    type,
  } = config
  LOG('@artdeco/clean-stack called with %s', type)
  return type
}

/* documentary types/index.xml */
/**
 * @typedef {Object} Config Options for the program.
 * @prop {boolean} shouldRun A boolean option.
 */


module.exports = artdecoCleanStack
//# sourceMappingURL=index.js.map