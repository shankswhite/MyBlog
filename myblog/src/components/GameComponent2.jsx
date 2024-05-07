import React, { useState, useEffect } from "react";
import { Unity, useUnityContext } from "react-unity-webgl";

function GameComponent2() {
  const { unityProvider, sendMessage, isLoaded, loadingProgression } = useUnityContext({
    loaderUrl: "wizefi/Build/wizefi.loader.js",
    dataUrl: "wizefi/Build/wizefi.data",
    frameworkUrl: "wizefi/Build/wizefi.framework.js",
    codeUrl: "wizefi/Build/wizefi.wasm",
  });

  
  const loadingPercentage = Math.round(loadingProgression * 100);

  const [devicePixelRatio, setDevicePixelRatio] = useState(
    window.devicePixelRatio
  );

  function handleShoot() {
    sendMessage("Player", "Shoot", );
  }


  useEffect(
    function () {
      // A function which will update the device pixel ratio of the Unity
      // Application to match the device pixel ratio of the browser.
      const updateDevicePixelRatio = function () {
        setDevicePixelRatio(window.devicePixelRatio);
      };
      // A media matcher which watches for changes in the device pixel ratio.
      const mediaMatcher = window.matchMedia(
        `screen and (resolution: ${devicePixelRatio}dppx)`
      );
      // Adding an event listener to the media matcher which will update the
      // device pixel ratio of the Unity Application when the device pixel
      // ratio changes.
      mediaMatcher.addEventListener("change", updateDevicePixelRatio);
      return function () {
        // Removing the event listener when the component unmounts.
        mediaMatcher.removeEventListener("change", updateDevicePixelRatio);
      };
    },
    [devicePixelRatio]
  );

  return (
    <div className="container">
      {isLoaded === false && (
        // We'll conditionally render the loading overlay if the Unity
        // Application is not loaded.
        <div className="loading-overlay">
          <p>Loading... ({loadingPercentage}%)</p>
        </div>
      )}
      <Unity className="unity" unityProvider={unityProvider} 
        style={{ width: 960, height: 600 }} 
        devicePixelRatio={devicePixelRatio}/>

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

export default GameComponent2;