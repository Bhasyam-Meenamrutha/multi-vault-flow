import { Canvas } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Shield, Lock, Users, Zap } from 'lucide-react';

const Globe3D = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <Sphere args={[1.5, 100, 200]} scale={1.2}>
          <MeshDistortMaterial
            color="#4A90E2"
            attach="material"
            distort={0.5}
            speed={2}
            roughness={0}
            transparent
            opacity={0.8}
          />
        </Sphere>
      </Float>
      <Float speed={1.5} rotationIntensity={0.5} floatIntensity={1}>
        <Sphere args={[2, 100, 200]} scale={0.8}>
          <MeshDistortMaterial
            color="#00FFC2"
            attach="material"
            distort={0.3}
            speed={1.5}
            roughness={0}
            transparent
            opacity={0.3}
          />
        </Sphere>
      </Float>
    </Canvas>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* 3D Globe Background */}
      <div className="absolute inset-0 w-full h-full">
        <Globe3D />
      </div>
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/50 to-transparent"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Badge */}
            <motion.div
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl mb-8"
              style={{
                background: 'var(--gradient-glass)',
                backdropFilter: 'blur(20px)',
                border: '1px solid hsl(var(--primary) / 0.3)',
                boxShadow: 'var(--shadow-neon-primary)'
              }}
              whileHover={{ scale: 1.05, boxShadow: 'var(--shadow-neon-accent)' }}
            >
              <Zap className="h-5 w-5 text-primary" />
              <span className="text-primary font-semibold">Next-Gen Multi-Sig Security</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              className="text-6xl md:text-8xl font-black mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Secure Your
              </span>
              <br />
              <span className="text-foreground">Digital Vaults</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Revolutionary multi-signature savings vaults with quantum-grade security, 
              collaborative governance, and seamless DeFi integration.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link to="/create" className="btn-vault inline-flex items-center space-x-3">
                  <Shield className="h-6 w-6" />
                  <span>Launch Your Vault</span>
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/"
                  className="inline-flex items-center space-x-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 border-2 border-primary/50 bg-transparent text-primary hover:bg-primary/10"
                  style={{ boxShadow: '0 0 20px hsl(var(--primary) / 0.3)' }}
                >
                  <Lock className="h-6 w-6" />
                  <span>Explore Features</span>
                </Link>
              </motion.div>
            </motion.div>

            {/* Feature Cards */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {[
                {
                  icon: Shield,
                  title: "Quantum Security",
                  description: "Military-grade encryption with multi-signature protection"
                },
                {
                  icon: Users,
                  title: "Collaborative Control",
                  description: "Democratic governance with customizable approval thresholds"
                },
                {
                  icon: Zap,
                  title: "Lightning Fast",
                  description: "Instant transactions with zero-gas fee optimization"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 rounded-2xl transition-all duration-500"
                  style={{
                    background: 'var(--gradient-glass)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid hsl(220 20% 25% / 0.4)',
                    boxShadow: 'var(--shadow-glass)'
                  }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: 'var(--shadow-neon-secondary)',
                    borderColor: 'hsl(var(--secondary) / 0.6)'
                  }}
                >
                  <feature.icon className="h-8 w-8 text-secondary mb-4" />
                  <h3 className="text-xl font-bold mb-3 text-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-4 h-4 bg-primary rounded-full animate-pulse opacity-60"></div>
      <div className="absolute bottom-40 left-32 w-6 h-6 bg-secondary rounded-full animate-pulse opacity-40"></div>
      <div className="absolute top-1/2 right-32 w-3 h-3 bg-accent rounded-full animate-pulse opacity-70"></div>
    </section>
  );
};

export default Hero;