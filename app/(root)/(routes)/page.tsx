"use client"

import { useStoreModal } from "@/hooks/use-store-modal";
import { useEffect } from "react";

const SetupPage = () => {

    const onOPen = useStoreModal((state) => state.onOpen);
    const isOpen = useStoreModal((state) => state.isOpen);

    useEffect(() => {
        if(!isOpen) {
            onOPen();
        }
    },[isOpen , onOPen]);

    return null;
  }
  
export default SetupPage;