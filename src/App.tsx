import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { WalletProvider, PontemWalletAdapter, MartianWalletAdapter } from '@manahippo/aptos-wallet-adapter';

import './styles.scss';
import { PontemWallet } from "./PontemWallet";
import { HippoPontemWallet } from "./HippoPontemWallet";
import { Header } from './Headers';

const wallets = [
    new PontemWalletAdapter(),
    new MartianWalletAdapter(),
];

export const localStorageKey = 'hippoWallet';

function App() {
    return (
        <HashRouter>
            <div className="app">
                <Header />
                <Routes>
                    <Route path='/pontem-native' element={<PontemWallet />}/>
                    <Route path='/hippo-adapter' element={
                        <WalletProvider wallets={wallets} localStorageKey={localStorageKey}>
                            <HippoPontemWallet />
                        </WalletProvider>
                    }/>
                </Routes>
            </div>
        </HashRouter>
    );
}

export default App;