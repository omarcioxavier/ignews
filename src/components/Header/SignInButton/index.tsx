import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi";

export default function SignInButton() {
    const isUserLoggedIn = true;

    return isUserLoggedIn ? (
        <button type="button" className={styles.signInButton}>
            <FaGithub color="#04d361" />
            Márcio Xavier
            <FiX color="#737380" className={styles.closeIcon} />
        </button>
    ) :
        (
            <button type="button" className={styles.signInButton}>
                <FaGithub color="#eba417" />
                Sigin with GitHub
            </button>
        )
};