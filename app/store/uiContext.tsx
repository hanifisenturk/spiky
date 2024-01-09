'use client';
import {createContext, useCallback, useContext, useMemo, useState} from 'react';

import {type Modal as ModalType, UIContext} from '@/types';

import {Modal} from '@/components/ui';
import {AnimatePresence} from 'framer-motion';

const UIContext = createContext<UIContext>({} as UIContext);

const UIProvider = ({children}: {children: React.ReactNode}) => {
  const [view, setView] = useState<UIContext['view']>('instructions');

  const [modal, setModal] = useState<ModalType>({
    isOpen: false,
    component: null,
    title: '',
    className: '',
  });

  const modalCloseHandler = useCallback(() => {
    setModal((prev) => ({...prev, isOpen: false}));
  }, []);

  const value = useMemo(
    () => ({
      view,
      setView,
      modal,
      setModal,
    }),
    [view, modal],
  );

  return (
    <UIContext.Provider value={value}>
      {children}
      <AnimatePresence key="modal">
        {modal.isOpen && modal.component && modal.title && (
          <Modal
            onClose={modalCloseHandler}
            title={modal.title}
            className={modal.className}
          >
            {modal.component}
          </Modal>
        )}
      </AnimatePresence>
    </UIContext.Provider>
  );
};

const useUIContext = () => useContext(UIContext);

export default UIProvider;
export {UIProvider, useUIContext};
