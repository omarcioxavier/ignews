import styles from "./styles.module.scss";
import { FaGithub } from "react-icons/fa"
import { FiX } from "react-icons/fi";
import { useSession, signIn, signOut } from "next-auth/react"

export default function SignInButton() {
    const { data: session } = useSession();

    if (session) { console.log(session); }

    return session ? (
        <button type="button" className={styles.signInButton} onClick={() => signOut()}>
            <FaGithub color="#04d361" />
            {session.user?.name} (logout)
            <FiX color="#737380" className={styles.closeIcon} />
        </button >
    ) :
        (
            <button type="button" className={styles.signInButton} onClick={() => signIn("github")}>
                <FaGithub color="#eba417" />
                Sigin with GitHub
            </button>
        )
};