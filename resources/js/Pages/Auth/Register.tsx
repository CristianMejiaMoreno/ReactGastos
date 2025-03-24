import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import GuestLayout from "@/Layouts/GuestLayout";
import { Head, Link, useForm } from "@inertiajs/react";
import type { FormEventHandler } from "react";

export default function Register() {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const submit: FormEventHandler = (e) => {
    e.preventDefault();

    post(route("register"), {
      onFinish: () => reset("password", "password_confirmation"),
    });
  };

  return (
    <GuestLayout>
       <Head title="Registro" />

       <div className="w-full">
         <div className="mb-8">
           <h1 className="text-2xl font-medium text-gray-900">Crea una cuenta</h1>
           <p className="text-gray-500 mt-2">Ingresa tus datos para registrarte</p>
         </div>

        <form onSubmit={submit} className="space-y-6">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* You can add an icon here if you want */}
              </div>
              <TextInput
                id="name"
                type="text"
                name="name"
                value={data.name}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-white/70 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                autoComplete="name"
                placeholder="Nombre Completo"
                isFocused={true}
                onChange={(e) => setData("name", e.target.value)}
              />
            </div>
            <InputError message={errors.name} className="mt-2" />
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* You can add an icon here if you want */}
              </div>
              <TextInput
                id="email"
                type="email"
                name="email"
                value={data.email}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-white/70 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                autoComplete="username"
                placeholder="Email"
                onChange={(e) => setData("email", e.target.value)}
              />
            </div>
            <InputError message={errors.email} className="mt-2" />
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* You can add an icon here if you want */}
              </div>
              <TextInput
                id="password"
                type="password"
                name="password"
                value={data.password}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-white/70 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                autoComplete="new-password"
                placeholder="Contraseña"
                onChange={(e) => setData("password", e.target.value)}
              />
            </div>
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                {/* You can add an icon here if you want */}
              </div>
              <TextInput
                id="password_confirmation"
                type="password"
                name="password_confirmation"
                value={data.password_confirmation}
                className="pl-10 block w-full rounded-lg border-gray-200 bg-white/70 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                autoComplete="new-password"
                placeholder="Confirmar contraseña"
                onChange={(e) =>
                  setData("password_confirmation", e.target.value)
                }
              />
            </div>
            <InputError message={errors.password_confirmation} className="mt-2" />
          </div>

          <div>
            <PrimaryButton
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 text-white uppercase font-medium tracking-wider transition-all duration-200 ease-in-out rounded-lg"
              disabled={processing}
            >
              {processing ? "Creando cuenta..." : "Registrar"}
            </PrimaryButton>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">¿Ya tienes una cuenta?</span>{" "}
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
