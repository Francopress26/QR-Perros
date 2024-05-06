'use client'
import {store} from '../store/index.js';
import {Provider} from 'react-redux'


export const ProviderR = ({children})=>{

    return (
<Provider store={store}>
{children}
</Provider>
    )
}