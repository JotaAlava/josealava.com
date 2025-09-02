export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700 text-white">
      <div className="text-center max-w-4xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Jose Alava
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-slate-300">
          Senior Software Engineer
        </p>
        <p className="text-lg md:text-xl mb-12 text-slate-400 max-w-3xl mx-auto leading-relaxed">
          Engineer with over a decade of experience building high-performance backend systems, APIs, and AI-enhanced services. 
          Expert in AWS cloud services, distributed systems, and event-driven architectures. Passionate about improving product 
          scalability and performance, with a strong track record of cross-functional collaboration and technical ownership.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <div className="text-slate-400">
            📍 255 6th Ave, New York, NY 10014
          </div>
          <div className="text-slate-400">
            📧 jalava85@gmail.com
          </div>
          <div className="text-slate-400">
            📱 (954) 683-9628
          </div>
        </div>
      </div>
    </section>
  );
}