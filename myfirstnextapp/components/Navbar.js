import Link from "next/link"

const Navbar = () => {
  return (
    <div>
        <nav>
        <ul className="menu-bar">
          <li>
            <Link href="/" legacyBehavior>
              <a> Home </a>
            </Link>
          </li>
          <li>
            <Link href="/about" legacyBehavior>
              <a> About </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" legacyBehavior>
              <a> Contact </a>
            </Link>
          </li>
          <li>
            <Link href="/blog" legacyBehavior>
              <a> Blog </a>
            </Link>
          </li>
          <li>
            <Link href="/product" legacyBehavior>
              <a> Product </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar