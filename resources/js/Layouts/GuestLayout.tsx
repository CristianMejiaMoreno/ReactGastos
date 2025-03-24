import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';
import { PropsWithChildren } from 'react';

export default function Guest({ children }: PropsWithChildren) {
    return (
        <div className="flex min-h-screen flex-col items-center pt-6 sm:justify-center sm:pt-0">
            {/* Fondo con gradiente suave */}
            <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
              
            {/* <div className="z-10">
            <Link href="/">
            <ApplicationLogo className="h-20 w-20 fill-current text-gray-500" />
            </Link>
            </div> */}


            {/* Contenedor para el contenido */}
            <div className="mt-6 w-full overflow-hidden px-6 py-4 sm:max-w-md sm:rounded-lg bg-transparent backdrop-blur-sm z-10">
                {children}
            </div>
        </div>
    );
}
