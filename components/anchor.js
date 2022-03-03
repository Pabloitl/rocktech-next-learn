import Link from "next/link";

export default function Anchor({ to, children }) {
  return (
    <Link href={to}>
        <a className="text-sky-600 hover:text-sky-800">{children}</a>
    </Link>
  );
}
