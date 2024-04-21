import { Button } from "@/components/ui/button";
import {
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/clerk-react";

export default function Header() {
  return (
    <div className="relative z-10 bg-trasnparent border-b py-2 bg-gray-50 bg-opacity-25">
      <div className="items-center container mx-auto justify-between flex">
        <a href="/" className="flex gap-2 items-center text-xl uppercase font-extrabold text-black">
          <img
            src="./src/assets/maze.png"
            width="25"
            height="25"
            alt="logo"
          />
          Vault
        </a>

        <SignedIn>
          <Button variant={"destructive"}>
            <a href="/dashboard/files">Your Files</a>
          </Button>
        </SignedIn>

        <div className="flex gap-2">
          <UserButton />
          <SignedOut>
            <SignInButton>
              <Button>Sign In</Button>
            </SignInButton>
          </SignedOut>
        </div>
      </div>
    </div>
  );
}
