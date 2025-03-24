import { usePage } from '@inertiajs/react';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import NavBarAuth from '@/Components/NavBarAuth';
import NavBarAuthMobile from '@/Components/NavBarAuthMobile';
import SpeedDial from '@/Components/SpeedDial';

export default function Authenticated({ children }) {
  const { user } = usePage().props.auth;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <motion.div
      className="min-h-screen w-full"
      initial={{ background: 'radial-gradient(125% 125% at 50% 10%, #b3b3ff 40%, #ccccff 100%)' }}
      animate={{ background: 'radial-gradient(125% 125% at 50% 10%, #ccccff 40%, #b3b3ff 100%)' }}
      transition={{ duration: 1 }}
    >
      {/* Renderiza NavBarAuth y SpeedDial si es desktop */}
      {!isMobile && (
        <>
          <NavBarAuth />
          <SpeedDial />
        </>
      )}

      {/* Renderiza NavBarAuthMobile si es mobile */}
      {isMobile && <NavBarAuthMobile />}

      {/* Contenedor de contenido con animaciones */}
      <AnimatePresence>
        <motion.main
          key={window.location.pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
    </motion.div>
  );
}
