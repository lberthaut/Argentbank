import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './login';
import profileReducer from './profile';

/**Store */

export const store = configureStore({
    reducer:{
        login: loginReducer,
        profile: profileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;