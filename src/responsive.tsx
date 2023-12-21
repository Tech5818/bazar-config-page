import React, {ReactNode} from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile :React.FC<{ children : ReactNode}> = ({children}) => {
    const isMobile = useMediaQuery({
        query : "(max-width: 456px)"
    });

    return <>{isMobile && children}</>
}

export const PC :React.FC<{ children : ReactNode }> = ({children}) => {
    const isPc = useMediaQuery({
        query : "(min-width: 457px)"
    });
    return <>{isPc && children}</>
}