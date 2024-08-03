import { useEffect, useState } from "react"

const useOnlineStatus=()=>{
    const [onlinestat,setonlinestat]=useState(true);

//now we need to buit an event listner to track online satatus.documentation

        useEffect(()=>{
            window.addEventListener("offline",()=>{
                setonlinestat(false);
            });
            window.addEventListener("online",()=>{
                setonlinestat(true);
            });
        }, []);
            return onlinestat;
};
export default useOnlineStatus;