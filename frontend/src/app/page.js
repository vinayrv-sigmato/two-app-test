"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Call the backend API (Express server)
    fetch(
      "https://node-next-test-dua6eqaacxa6gdbu.centralindia-01.azurewebsites.net/api/hello"
    )
      .then((response) => response.json())
      .then((data) => setMessage(data.message))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      <h1>{message || "Loading..."}</h1>
    </div>
  );
}
