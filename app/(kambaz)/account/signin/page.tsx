"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as client from "../client";
import { useAccountContext } from "../AccountContext";

export default function Signin() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const { setCurrentUser } = useAccountContext();
  const router = useRouter();
  const [error, setError] = useState("");
  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return;
      setCurrentUser(user);
      router.push("/dashboard");
    } catch {
      setError("Unable to sign in. Check your username and password.");
    }
  };
  return (
    <div id="wd-signin-screen" className="max-w-sm">
      <h1 className="mb-3 text-2xl font-semibold">Sign in</h1>
      <input
        placeholder="username"
        id="wd-username"
        value={credentials.username}
        onChange={(e) =>
          setCredentials({ ...credentials, username: e.target.value })
        }
        className="wd-username mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <input
        placeholder="password"
        type="password"
        id="wd-password"
        value={credentials.password}
        onChange={(e) =>
          setCredentials({ ...credentials, password: e.target.value })
        }
        className="wd-password mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      <label htmlFor="wd-ai-signin-note" className="mb-1 block text-sm">
        Sample note
      </label>
      <input
        id="wd-ai-signin-note"
        placeholder="sample note"
        className="mb-2 w-full rounded border border-neutral-300 px-3 py-2"
      />
      {error && (
        <p id="wd-signin-error" className="mb-2 rounded bg-red-100 px-3 py-2 text-sm text-red-800">
          {error}
        </p>
      )}
      <button
        type="button"
        onClick={signin}
        id="wd-signin-btn"
        className="mb-2 block w-full rounded bg-blue-600 px-3 py-2 text-center text-white"
      >
        Sign in
      </button>
      <Link id="wd-signup-link" href="/account/signup">
        Sign up
      </Link>
    </div>
  );
}
