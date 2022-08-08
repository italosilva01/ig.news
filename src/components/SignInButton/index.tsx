import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";
import { signIn,signOut,useSession} from 'next-auth/react';
import { useMemo } from "react";

export function SignInButton() {

 const {status,data}= useSession();

  const authenticated = useMemo(()=>status==='authenticated',[status])
  const stateUser = {
    true: "#04d361",
    false: "#eba417",
  };
  return (
    <button type="button" className={styles.signInButton}
       onClick={()=>{

        signIn('github')}}
      >
      <FaGithub 
       color={stateUser[`${authenticated}`]} 
      />
      {authenticated?data.user.name:'Sign in with Github'}
      <FiX  
       onClick={(e)=>{
          
        signOut()
        e.stopPropagation()
      }}
      />
      
    </button>
    
    
  );
}
