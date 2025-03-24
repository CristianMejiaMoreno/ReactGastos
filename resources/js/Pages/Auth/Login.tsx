import Checkbox from "@/Components/Checkbox"
import InputError from "@/Components/InputError"
import PrimaryButton from "@/Components/PrimaryButton"
import TextInput from "@/Components/TextInput"
import GuestLayout from "@/Layouts/GuestLayout"
import { Head, Link, useForm } from "@inertiajs/react"
import type { FormEventHandler } from "react"
import { AtSign, Lock } from "lucide-react"

export default function Login({
  status,
  canResetPassword,
}: {
  status?: string
  canResetPassword: boolean
}) {
  const { data, setData, post, processing, errors, reset } = useForm({
    email: "",
    password: "",
    remember: false as boolean,
  })

  const submit: FormEventHandler = (e) => {
    e.preventDefault()

    post(route("login"), {
      onFinish: () => reset("password"),
    })
  }

  return (
    <GuestLayout>
      <Head title="Iniciar sesión" />

      <div className="w-full">
        <div className="mb-8">
          <h1 className="text-2xl font-medium text-gray-900">Iniciar sesión</h1>
          <p className="text-gray-500 mt-2">Ingresa a tu cuenta</p>
        </div>

        {status && (
          <div className="mb-6 p-4 rounded-lg bg-green-50 text-sm font-medium text-green-600 border border-green-200">
            {status}
          </div>
        )}

        <form onSubmit={submit} className="space-y-6">
          <div>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <AtSign className="h-5 w-5 text-gray-400" />
              </div>
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

          <div>
            <div className="flex items-center justify-between mb-2">
              <div className="relative w-full">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  name="password"
                  value={data.password}
                  className="pl-10 block w-full rounded-lg border-gray-200 bg-white/70 shadow-sm focus:border-purple-500 focus:ring-purple-500"
                  autoComplete="current-password"
                  placeholder="Contraseña"
                  onChange={(e) => setData("password", e.target.value)}
                />
              </div>
            </div>
            <div className="flex justify-end">
              {canResetPassword && (
                <Link
                  href={route("password.request")}
                  className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                >
                  ¿Olvidaste tu contraseña?
                </Link>
              )}
            </div>
            <InputError message={errors.password} className="mt-2" />
          </div>

          <div className="flex items-center">
            <Checkbox
              name="remember"
              checked={data.remember}
              onChange={(e) => setData("remember", (e.target.checked || false) as false)}
              className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
            />
            <span className="ml-2 text-sm text-gray-600">Recordarme</span>
          </div>

          <div>
            <PrimaryButton
              className="w-full py-3 bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 text-white uppercase font-medium tracking-wider transition-all duration-200 ease-in-out rounded-lg"
              disabled={processing}
            >
              {processing ? "Iniciando sesión..." : "Iniciar sesión"}
            </PrimaryButton>
          </div>
        </form>

        <div className="mt-6 text-center text-sm">
          <span className="text-gray-600">¿No tienes una cuenta?</span>{" "}
          <Link href={route("register")} className="font-medium text-purple-600 hover:text-purple-800">
            Regístrate
          </Link>
        </div>
      </div>
    </GuestLayout>
  )
}

