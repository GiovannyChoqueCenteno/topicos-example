import {configureStore} from '@reduxjs/toolkit'
import personas from './slices/personas';

const store = configureStore({
    reducer :{
        personas 
    },
})
export type RootState = ReturnType<typeof store.getState>

export default store;