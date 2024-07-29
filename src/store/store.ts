import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { openAiApi } from './Server/ApiOpenAi'

const rootReducer = combineReducers({
    [openAiApi.reducerPath]: openAiApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(openAiApi.middleware)
    })
}