import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { mount } from 'auth/AuthApp';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const initialPath = history.location.pathname;
    const { onParentNavigate } = mount(ref.current, {
      initialPath,
      onNavigate: ({ pathname: nextPathName }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathName) {
          history.push(nextPathName);
        }
      },
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return <div ref={ref}></div>;
};
