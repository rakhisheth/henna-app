"use client";

import { Button } from "@/app/components";

export const Login = () => {
  const onLoginHandler = async (event: React.MouseEvent<HTMLElement>) => {
    console.log("Login");
    event.preventDefault();
    const response = await fetch("/api/login", {
      method: "GET",
    });

    console.log(response);

    const data = await response.json();
  };

  return (
    <div>
      <Button name="Login" onClick={onLoginHandler} />
    </div>
  );
};
