import { FaGithub } from "react-icons/fa";
import { FiX } from "react-icons/fi";
import styles from "./styles.module.scss";

export function SignInButton() {
  const isUserLoggedIn = true;
  const stateUser = {
    true: "#04d361",
    false: "#eba417",
  };
  return (
    <button type="button" className={styles.signInButton}>
      <FaGithub color={stateUser[`${isUserLoggedIn}`]} />
      Sign in with Github
      <FiX />
    </button>
  );
}
