import React from "react";
import styles from "./styles.module.scss";
import {useSession,signIn} from 'next-auth/react';
interface SubscribeButtonProps {
  priceId:string
}
export const  SubscribeButton:React.FC<SubscribeButtonProps> = ()=> {
  const {data} = useSession()

  function handleSubscribe(){
    console.log(data)
    if(!data){
      signIn("github")
      return
    }

    //Criar a checkout session
  }

  return <button className={styles.subscribeButton} onClick={handleSubscribe}>Subscribe now</button>;
}
