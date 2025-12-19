import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Stats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <section className="relative -mt-20 px-4 z-10" ref={ref}>
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
          <div className="grid md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-border">
            
            {/* Gerai */}
            <div className="text-center pt-8 md:pt-0">
              <div
                className={`text-4xl font-bold text-primary mb-2 transition-all duration-700 ease-out ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {inView && <CountUp end={70} duration={2} />}+
              </div>
              <div className="text-lg font-medium">Gerai</div>
            </div>

            {/* Pedagang */}
            <div className="text-center pt-8 md:pt-0">
              <div
                className={`text-4xl font-bold text-primary mb-2 transition-all duration-700 ease-out ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {inView && <CountUp end={100} duration={2} />}+
              </div>
              <div className="text-lg font-medium">Pedagang</div>
            </div>

            {/* Anggota */}
            <div className="text-center pt-8 md:pt-0">
              <div
                className={`text-4xl font-bold text-primary mb-2 transition-all duration-700 ease-out ${
                  inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                {inView && <CountUp end={100} duration={2} />}+
              </div>
              <div className="text-lg font-medium">Anggota</div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats;
