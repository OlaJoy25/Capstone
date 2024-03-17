import { useRef } from 'react';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

function App() {
    const tawkMessengerRef = useRef();

    const handleMinimize = () => {
        tawkMessengerRef.current.minimize();
    };

    return (
        <div className="App">
            <button onClick={handleMinimize}> Minimize the Chat </button>

            <TawkMessengerReact
                propertyId="65f73745cc1376635adb91e2" 
                widgetId="1hp6qvr59"
                ref={tawkMessengerRef}/>
        </div>
    );
}

function App() {
    const onLoad = () => {
        console.log('onLoad works!');
    };

    return (
        <div className="App">
            <TawkMessengerReact
                propertyId="65f73745cc1376635adb91e2"
                widgetId="1hp6qvr59"
                onLoad={onLoad}/>
        </div>
    );
}