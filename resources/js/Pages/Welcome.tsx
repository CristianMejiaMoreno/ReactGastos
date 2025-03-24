import Navbar from '@/Components/Navbar'
import Footer from '@/Components/Footer'
import Jumbotron from '@/Components/Jumbotron'
import Timeline from '@/Components/Timeline'
import Accordion from '@/Components/Accordion'
import Card from '@/Components/Card'
import { Head } from '@inertiajs/react';


 const Welcome = () => {
  return (
    <>
    <Head title="Welcome" />

    <div className="relative z-0 h-full w-full">
        <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
            {/* Aquí va el fondo */}
        </div>

        <Navbar />
        <div className="mt-8" />
        <Jumbotron />
        <div className="mt-8" />
        <Timeline />
        <div className="mt-8" />
        <Accordion />
        <div className="mt-8" />
        <Card />
        <div className="mt-8" />
        <Footer />
    </div>

    </>
  )
}

export default Welcome

