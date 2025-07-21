import Image from 'next/image';
export default function AboutSection() {
  return (
    <section id="about" className="w-full py-20 px-8 bg-white">
      <div className="max-w-6xl mx-auto p-10 bg-echofy-light-gray rounded-2xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center">
          <div className="md:col-span-1"><Image src="/mateo.png" alt="Mateo Villacreses, Fundador de Echofy" width={400} height={400} className="rounded-2xl shadow-xl object-cover w-full h-auto" /></div>
          <div className="md:col-span-2"><h2 className="text-4xl md:text-5xl font-bold text-echofy-dark-blue">Nacido de una Necesidad Real</h2><p className="mt-6 text-lg text-gray-600 leading-relaxed">Echofy nació de la visión de Mateo Villacreses, un apasionado desarrollador de voz que identificó la necesidad de una comunicación más fluida y eficiente en entornos organizacionales...</p><p className="mt-4 text-xl font-semibold">Mateo Villacreses<br /><span className="text-base font-normal text-gray-500">Fundador y Desarrollador de Voz</span></p></div>
        </div>
      </div>
    </section>
  );
}