import Link from "next/link";
import styles from "./menu.module.css";
import Image from "next/image";

export default function Menu(){
    return(
       <header className={styles.cabecalho}>
        <Image
            width={100}
            height={100}
            src={"https://www.ifms.edu.br/marcaifms.png"} />
            src={"https://www.google.com/url?sa=i&url=https%3A%2F%2Fpt.m.wikipedia.org%2Fwiki%2FFicheiro%3AMoodle-logo.svg&psig=AOvVaw1_L_WvZVMZiA5IIwKICGAz&ust=1709812662568000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIDi5dPK34QDFQAAAAAdAAAAABAJ"}

        < h1>Menu</h1>
        <nav>
            <ul>
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/registro">
                    <li>Registrar</li>
                </Link>
            </ul>
        </nav>
       </header>
    )
}