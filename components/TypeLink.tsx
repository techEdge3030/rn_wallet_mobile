import { Link } from "expo-router";

export default function TypeLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return <Link href={href as any}>{children}</Link>;
}
