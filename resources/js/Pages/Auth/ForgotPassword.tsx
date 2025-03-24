import InputError from "@/Components/InputError";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, useForm, Link } from "@inertiajs/react";
import { FormEventHandler } from "react";

export default function ForgotPassword({ status }: { status?: string }) {
  const { data, setData, post, processing, errors } = useForm({
    email: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("password.email"));
  };

  return (
    <GuestLayout>
      <Head title="Recuperar Contraseña" />

      <div className="w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Recuperar Contraseña</h1>
          <p className="text-gray-500 mt-2">
            ¿Olvidaste tu contraseña? No hay problema. Solo ingresa tu dirección de correo electrónico y te enviaremos un enlace de restablecimiento de contraseña que te permitirá elegir una nueva.
          </p>
        </div>

        {status && (
          <div className="mb-6 p-4 rounded-lg bg-green-50 text-sm font-medium text-green-600 border border-green-200">
            {status}
          </div>
        )}

        <form onSubmit={submit} className="space-y-6">
          <div>
            <div className="relative">
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-white/70 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                autoComplete="username"
                placeholder="Correo electrónico"
                isFocused={true}
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>
            <InputError message={errors.email} className="mt-2" />
          </div>

          <div className="mt-4">
            <PrimaryButton
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 text-white uppercase font-medium tracking-wider transition-all duration-200 ease-in-out rounded-lg"
              disabled={processing}
            >
              {processing ? "Enviando correo..." : "Enviar enlace de recuperación de contraseña"}
            </PrimaryButton>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">¿Recuperaste tu contraseña?</span>{" "}
          <Link
            href={route("login")}
            className="font-medium text-purple-600 hover:text-purple-800"
          >
            Iniciar sesión
          </Link>
        </div>
      </div>
    </GuestLayout>
  );
}
