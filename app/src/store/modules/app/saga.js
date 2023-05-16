import {takeLatest, all} from 'redux-saga/effects'
import types from './types'

export function* loginUser(){

}
export default all([takeLatest(types.LOGIN_USER, loginUser)])