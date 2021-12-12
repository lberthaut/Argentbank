import {configureStore} from '@reduxjs/toolkit';
import loginReducer from './login';
import profileReducer from './profile';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux'

/**Store */

export const store = configureStore({
    reducer:{
        login: loginReducer,
        profile: profileReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = ()=> useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;