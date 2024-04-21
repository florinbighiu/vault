import { Outlet, useNavigate } from "react-router-dom";
import { ClerkProvider, SignedIn } from "@clerk/clerk-react";
import Header from "./Header";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

export default function RootLayout() {
  const navigate = useNavigate();

  return (
    <ClerkProvider navigate={navigate} publishableKey={PUBLISHABLE_KEY}>
      <Header /> 
      <Outlet />
    </ClerkProvider>
  );
}
