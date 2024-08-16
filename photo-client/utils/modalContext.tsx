import { createContext, useContext, useState, ReactNode, Dispatch, SetStateAction } from 'react';

interface ModalProviderProps {
  children: ReactNode;
}

type ModalContextType = [boolean, Dispatch<SetStateAction<boolean>>];

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider = ({ children } : ModalProviderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <ModalContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModalContext = (): ModalContextType => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModalContext must be used within a ModalProvider');
  }
  return context;
};

