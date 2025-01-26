"use client";

import React, { useState } from "react";
import SignForm from "./SignForm";

interface AuthFormProps {
  type: "sign-in" | "sign-up";
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const [user, setUser] = useState<null | { name: string }>(null);

  return (
    <section className="">
      {/* Form Container */}
      <div className="">
        <h1 className="">
          {user ? "Link Account" : type === "sign-in" ? "Sign In" : "Sign Up"}
        </h1>
        <div className="">
          <SignForm type={type} />
        </div>
      </div>

      
    </section>
  );
};

export default AuthForm;
