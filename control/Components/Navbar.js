
import Link from 'next/link'
import styles from '../styles/Nav.module.css'
export default function Navbar() {
  return (

      <ul className={styles.navbar}>
        <li>
          <Link href="/"> Home</Link>
        </li>
        <li>
          <Link href="/form"> Form</Link>
        </li>
        <li>
          <Link href=""> Contato</Link>
        </li>
        <li>
          <Link href=""> Sobre nós</Link>
        </li>
        <li>
          <Link href=""> Todos</Link>
        </li>
      </ul>

  )
}
