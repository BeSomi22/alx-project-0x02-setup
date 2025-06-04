import Link from 'next/link';

export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <nav className="flex justify-between items-center max-w-4xl mx-auto">
        <h1 className="text-lg font-semibold">ALX Project 2</h1>
        <ul className="flex gap-6">
          <li>
            <Link href="/" className="hover:underline">Home (Index)</Link>
          </li>
          <li>
            <Link href="/home" className="hover:underline">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
