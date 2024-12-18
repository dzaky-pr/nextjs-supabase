import React from "react";

export default function Login() {
  return (
    <form action="/auth/signup" method="post">
      <label htmlFor="email">Email</label>
      <input value="dzaky.pr.mulyono97@gmail.com" name="email" />
      <label htmlFor="password">Password</label>
      <input value="testsix" type="password" name="password" />
      <button>Sign in</button>
    </form>
  );
}
