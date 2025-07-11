import { Redirect } from "expo-router";

export default function TypeRedirect({ href }: { href: string }) {
  return <Redirect href={href as any} />;
}