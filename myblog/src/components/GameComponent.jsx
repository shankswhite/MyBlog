import React from 'react';
import { useEffect} from 'react';

function GameComponent() {
    const iframeRef = React.useRef(null);

    const handleShoot = () => {
        if (iframeRef.current && iframeRef.current.contentWindow) {
            console.log("pressed");
            iframeRef.current.contentWindow.postMessage({
                target: 'Player',
                method: 'Shoot',
                args: ''
            }, '*');
        }
    };

    useEffect(() => {
        const iframe = iframeRef.current;
        if (iframe) {
            iframe.onload = () => {
                console.log("Iframe loaded and ready to receive messages.");
            };
        }
    }, []);

    return (
        <div className="GameComponent">
            <div>
                <iframe
                    ref={iframeRef}
                    onLoad={() => console.log("Iframe loaded")}
                    title="Unity WebGL Game"
                    src={process.env.PUBLIC_URL + "/wizefi/index.html"}
                    width="960"
                    height="600"
                    style={{ border: "none" }}
                ></iframe>
            </div>

            <button
                onClick={handleShoot}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    padding: '10px 20px',
                    fontSize: '16px',
                    cursor: 'pointer'
                }}
            >
                Shoot
            </button>
        </div>
    );
}

export default GameComponent