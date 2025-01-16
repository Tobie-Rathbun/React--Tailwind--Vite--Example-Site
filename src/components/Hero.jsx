import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      {/* Text Container */}
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 z-10`}
        style={{ pointerEvents: 'none' }} // Allow interactions to pass through
      >
        <div className='flex flex-col justify-center items-center mt-1.5'>
          {/* Ball on home screen */}
          <div className='w-2 h-2 bg-[#ad4276]' />
          <div className='w-1 sm:h-50 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            <span className='text-[#ad4276]'>Tobie</span>, the Developer
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            TypeScript & React components <br className='sm:block hidden' />
            with 3D graphics and interactivity
          </p>
        </div>
      </div>

      {/* 3D Canvas */}
      <ComputersCanvas className="relative z-0" /> {/* Canvas remains interactive */}

      {/* Scroll Indicator */}
      <div className='absolute xs:bottom-10 bottom-40 w-full flex justify-center items-center z-10'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
