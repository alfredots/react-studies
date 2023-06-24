import { FormEvent, useRef } from 'react';

export default function LoginWithRef() {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    alert(
      JSON.stringify({
        email: emailRef?.current?.value,
        password: passwordRef?.current?.value
      })
    );
  };

  return (
    <section className="w-100 h-screen flex items-center justify-center">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="border-blue-400 border"
          type="email"
          ref={emailRef}
          placeholder="Seu E-mail"
          aria-label="email"
          autoFocus
        />
        <input
          className="border-blue-400 border"
          type="password"
          ref={passwordRef}
          placeholder="Sua senha"
          aria-label="password"
        />
        <button className="bg-blue-700 text-white cursor-pointer" type="submit">
          Entrar
        </button>
      </form>
    </section>
  );
}
