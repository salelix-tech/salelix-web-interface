import { motion } from "framer-motion"; // Note: 'motion/react' works but 'framer-motion' is the standard package name
import type { Route } from "./+types/home";
import { Logo } from "~/components/Logo";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Salelix | Under Construction" },
    { name: "description", content: "Something awesome is coming soon." },
  ];
}

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black overflow-hidden font-sans">
      {/* Subtle Grid Background - Using Tailwind utility for the gradient */}
      <div
        className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff12_1px,transparent_1px),linear-gradient(to_bottom,#ffffff12_1px,transparent_1px)] bg-[size:24px_24px]"
        aria-hidden="true"
      />

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <div className="max-w-3xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center space-y-8"
          >
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1,
              }}
              className="flex justify-center mb-12"
            >
              <Logo />
            </motion.div>

            {/* Message */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-3xl sm:text-4xl font-medium tracking-tight text-white">
                Under Construction
              </h1>

              <div className="space-y-2">
                <p className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto">
                  We are working hard to bring something awesome.
                </p>

                <p className="text-base sm:text-lg text-white/40 italic">
                  Please check back soon!
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}