import { useUser } from "@clerk/clerk-expo";
import TypeRedirect from "@/components/TypeRedirect";
import { Stack } from "expo-router";

export default function Layout() {
  const { isSignedIn, isLoaded } = useUser();
  if (!isLoaded) return null; // this is for better CLERK UX
  if (!isSignedIn) return <TypeRedirect href="/(auth)/sign-in" />;

  return <Stack screenOptions={{ headerShown: false }} />;
}
