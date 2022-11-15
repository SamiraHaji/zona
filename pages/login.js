import Link from 'next/link';
import React from 'react';
import Layout from '../components/Layout';
import { useForm } from 'react-hook-form';

export default function LoginScreen() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const submitHandler = ({ email, password }) => {
    console.log(email, password);
  };
  return (
    <Layout title="connexion">
      <form
        className="mx-auto max-w-screen-md"
        onSubmit={handleSubmit(submitHandler)}
      >
        <h1 className="mb-4 text-xl">Connexion</h1>
        <div className="mb-4">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            {...register('email', {
              required:
                "L'adreese e-mail n'est pas saisie, merci de le saisir.",

              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9_.]+$/i,
                message:
                  "L'adresse e-mail saisie est incomplete ou incorrecte ",
              },
            })}
            placeholder="email"
            className="w-full"
            id="email"
            autoFocus
          ></input>
          {errors.email && (
            <div className="text-red-500">{errors.email.message}</div>
          )}
        </div>
        <div className="mb-4">
          <label htmlFor="password">Mot de Passe</label>
          <input
            placeholder="**********"
            type="password"
            {...register('password', {
              required: "Le mot de passe n'est pas saisie, merci de le saisir.",
              minLength: { value: 6, message: 'Il faut plus de 5 caractères' },
            })}
            className="w-full"
            id="password"
            autoFocus
          ></input>
          {errors.password && (
            <div className="text-red-500">{errors.password.message}</div>
          )}
        </div>
        <div className="mb-4">
          <button className="primary-button">Connexion</button>
        </div>
        <div className="mb-4">
          Vous n&apos;aviez pas de compte ? &nbsp;
          <Link
            href="register"
            className="italic font-semibold hover:text-gray-400"
          >
            Créer mon compte
          </Link>
        </div>
      </form>
    </Layout>
  );
}
