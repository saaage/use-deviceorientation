import React from "react";

const useDeviceOrientation = () => {
  const [orientation, setOrientation] = React.useState({
    alpha: null,
    beta: null,
    gamma: null,
    absolute: false
  });

  const handle = (e) => {
    console.log("HELLO FROM HANDLE");
    setOrientation({
      beta: e.beta,
      alpha: e.alpha,
      gamma: e.gamma,
      absolute: e.absolute
    });
  };

  React.useEffect(() => {
    if (window.DeviceOrientationEvent) {
      console.log("HI FROM UE", window.DeviceOrientationEvent);
      window.addEventListener("deviceorientation", handle);

      return () => {
        window.removeEventListener("deviceorientation", handle);
      };
    }
  }, []);

  return orientation;
};

export default useDeviceOrientation;
