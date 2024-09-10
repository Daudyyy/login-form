import React from 'react';
import { Provider } from 'react-redux';
import FormSwitcher from './components/FormSwitcher';
import store from './redux/store';
import './App.css';
import { BackgroundImage } from './components/BackgroundImage';

function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <FormSwitcher />
            </div>
            <BackgroundImage/> 
        </Provider>
    );
}

export default App;