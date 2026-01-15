"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "../lib/auth";


export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "admin@greengadgets.com" && password === "123456") {
      login(); // use auth.js helper
      router.push("/items");
    } else {
      alert("Invalid Credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>
      <input
        className="mb-2 px-3 py-2 border rounded w-64"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="mb-4 px-3 py-2 border rounded w-64"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
        onClick={handleLogin}
      >
        Login
      </button>
    </div>
  );
}
