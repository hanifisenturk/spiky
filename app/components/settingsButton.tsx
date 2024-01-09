'use client';

import {useCallback, useEffect} from 'react';
import {useUIContext} from '../store/uiContext';
import {SettingsIcon} from './icons';

import {AppSettings} from './settings';

const SettingsButton = () => {
  const {setModal} = useUIContext();

  useEffect(() => {
    // Accessibility operation
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.key === 'm') {
        e.preventDefault();
        modalHandler();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const modalHandler = useCallback(() => {
    setModal({
      isOpen: true,
      component: <AppSettings />,
      title: 'Settings',
      className: 'w-full md:max-w-md',
    });
  }, []);

  return (
    <button
      title="You can open the modal with CTRL+M"
      className="absolute right-4 top-4"
      onClick={modalHandler}
    >
      <SettingsIcon />
    </button>
  );
};

export {SettingsButton, SettingsButton as default};
