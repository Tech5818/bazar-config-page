import React, {createContext, useState, useContext} from "react";

type ContextType = {
    archeryCheck: boolean;
    setArcheryCheck: React.Dispatch<React.SetStateAction<boolean>>;
    tuhoCheck: boolean;
    setTuhoCheck: React.Dispatch<React.SetStateAction<boolean>>;
    jegichagiCheck: boolean;
    setJegichagiCheck: React.Dispatch<React.SetStateAction<boolean>>;
    onPopup: boolean;
    setOnPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const defaultValue: ContextType = {
    archeryCheck: true,
    setArcheryCheck: () => {},
    tuhoCheck: false,
    setTuhoCheck: () => {},
    jegichagiCheck: false,
    setJegichagiCheck: () => {},
    onPopup: false,
    setOnPopup: () => {},
}

const Context = createContext(defaultValue);

export const ContextProvider = ({children}: {children:React.ReactNode}) => {
    const [archeryCheck, setArcheryCheck] = useState(true);
    const [tuhoCheck, setTuhoCheck] = useState(false);
    const [jegichagiCheck, setJegichagiCheck] = useState(false);
    const [onPopup, setOnPopup] = useState(false);

    return(
        <Context.Provider value={{archeryCheck, setArcheryCheck,
                                  tuhoCheck, setTuhoCheck,
                                  jegichagiCheck, setJegichagiCheck,
                                  onPopup, setOnPopup}}>
            {children}
        </Context.Provider>
    )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useStateContext = () => {
    return useContext(Context);
}