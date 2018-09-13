# @artdeco/clean-stack

[![npm version](https://badge.fury.io/js/@artdeco/clean-stack.svg)](https://npmjs.org/package/@artdeco/clean-stack)

`@artdeco/clean-stack` is A fork of clean-stack to remove internal Node.js lines from error stacks.

```sh
yarn add -E @artdeco/clean-stack
```

## Table Of Contents

- [Table Of Contents](#table-of-contents)
- [API](#api)
  * [`artdecoCleanStack(arg1: string, arg2?: boolean)`](#mynewpackagearg1-stringarg2-boolean-void)
- [TODO](#todo)
- [Copyright](#copyright)

## API

The package is available by importing its default function:

```js
import artdecoCleanStack from '@artdeco/clean-stack'
```

### `artdecoCleanStack(`<br/>&nbsp;&nbsp;`arg1: string,`<br/>&nbsp;&nbsp;`arg2?: boolean,`<br/>`): void`

Call this function to get the result you want.

```js
/* yarn example/ */
import artdecoCleanStack from '@artdeco/clean-stack'

(async () => {
  await artdecoCleanStack()
})()
```

## TODO

- [ ] Add a new item to the todo list.

## Copyright

(c) [Art Deco][1] 2018

[1]: https://artdeco.bz
