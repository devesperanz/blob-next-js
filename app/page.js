import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>Hello Next 13</h1>
      <Link href="/about">About</Link>
      <Link href="/about/team">Team</Link>
      <Link href="/code/repos">code</Link>
    </main>
  );
}
