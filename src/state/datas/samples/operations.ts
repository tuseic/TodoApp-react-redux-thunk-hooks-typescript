import { Dispatch } from 'redux'
import State from './state'
import actions from './actions'
// import db from '../../../firebase'
import axios from 'axios'

const getSamples = () => {
  return (dispatch: Dispatch, _getState: () => State) => {
    // db.collection('samples').get()
    axios.get('http://localhost:3001/samples')
      .then((res) => {
        // const docs = res.docs.map(doc => doc.data()) as State
        // dispatch(actions.getSamples.done({result: docs, params: {}}))
        dispatch(actions.getSamples.done({result: res.data as State['data'], params: {}}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

const createSample = (form: State['form']) => {
  return (dispatch: Dispatch, _getState: () => State) => {
    axios.post('http://localhost:3001/samples', { ...form })
      .then((res) => {
        dispatch(actions.createSample.done({ result: res.data as State['form'] ,params: form}))
      })
      .catch((reason) => {
        console.log(reason)
      })
  }
}

export default {
  getSamples,
  createSample
}
