# bindPromiseToDispatch
use dispatch as Promise in redux-saga

## Installation
```sh
$ npm i -S bind-promise-to-dispatch
```

## Usage
redux-saga
```js
// add resolve and reject paramers
function* foo({ payload, resolve = () => {}, reject = () => {} }) {
  // try to get api data
  try {
    // success flow
    const res = yield call(request, payload)
    resolve(res)
  } catch (err) {
    // err flow
    reject(err)
  }
}
```
react component
```js
import bindPromiseToDispatch from 'bind-promise-to-dispatch'
import { connect } from 'react-redux'

@connect()
class Foo extends React.Component {
  constructor(props){
    super(props)
    this.state = {}
    this.promiseDispatch = bindPromiseToDispatch(this.props.dispatch)
  }

  componentDidMound() {
    this.promiseDispatch({
      type: 'xxx',
      payload: 'xxx'
    }).then(res => {
      // do something after get api data
    }).catch(err => {
      // catch something
    })
  }
}
```