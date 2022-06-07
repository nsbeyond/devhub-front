/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit'
import _ from 'lodash'

const initialState = {
  usageData: '',
  visibleWaitingPopup: false,
}

export const domainsStore = createSlice({
  name: 'domains',
  initialState,
  reducers: {
    setUsageData: (state, action) => {
      state.usageData = _.get(action, 'payload')
    },
    setWaitingPopup: (state, action) => {
      state.visibleWaitingPopup = _.get(action, 'payload')
    },
  },
})

// Action creators are generated for each case reducer function
export const { setUsageData, setWaitingPopup } = domainsStore.actions

export default domainsStore.reducer
