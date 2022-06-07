/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  userData: {},
}

export const entitiesStore = createSlice({
  name: 'entities',
  initialState,
  reducers: {
    setStore: (state, action) => {
      state.userData = _.get(action, 'payload')
    },
    clearStore: (state) => {
      state.userData = {}
    },
  },
})

// Action creators are generated for each case reducer function
export const { setStore, clearStore } = entitiesStore.actions

export default entitiesStore.reducer
