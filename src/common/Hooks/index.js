import { useCallback, useState } from "react";

export const useOpenController =(initialState = false) =>{
    const [isOpen, setOpenState] = useState(initialState);
  
    const toggle = useCallback(() => {
      setOpenState((state) => !state);
    }, [setOpenState]);
  
    return { isOpen, toggle };
  }