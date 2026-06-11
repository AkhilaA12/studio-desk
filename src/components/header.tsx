import Link from "next/link";

export function Header() {
  return (
    <header className="site-header">
      <div>
        <Link href="/" className="wordmark">
          Studio<br />Desk
        </Link>
        <p>Lead review for<br />small web studios</p>
      </div>
      <nav aria-label="Main navigation">
        <Link href="/" className="nav-link"><span>01</span> Inquiries</Link>
        <Link href="/new" className="nav-link"><span>02</span> New inquiry</Link>
      </nav>
      <div className="studio-mark">
        <span>North Street Studio</span>
        <small>Local workspace</small>
      </div>
    </header>
  );
}
