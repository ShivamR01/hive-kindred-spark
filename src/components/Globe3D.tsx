import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float, OrbitControls, Stars } from "@react-three/drei";
import { useIsMobile } from "@/hooks/use-mobile";
import * as THREE from "three";

// 🌍 Globe with bigger green dots
function Globe({ isMobile }: { isMobile: boolean }) {
  const globeRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.getElapsedTime() * 0.15; // faster rotation
    }
  });

  // Texture with blue + green dots
  const texture = useMemo(() => {
    const size = 512;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d")!;

    // Ocean gradient
    const gradient = ctx.createRadialGradient(
      size / 2,
      size / 2,
      size / 6,
      size / 2,
      size / 2,
      size / 1.2
    );
    gradient.addColorStop(0, "#1e90ff");
    gradient.addColorStop(1, "#0b3d91");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, size, size);

    // Larger green dots
    ctx.fillStyle = "rgba(34,139,34,0.85)";
    for (let i = 0; i < 100; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = Math.random() * 35; // bigger dots
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  // Responsive globe size
  const globeSize = isMobile ? 1.8 : 2.3;

  return (
    <Sphere ref={globeRef} args={[globeSize, 64, 64]}>
      <meshStandardMaterial map={texture} metalness={0.15} roughness={0.9} />
    </Sphere>
  );
}

// 🎁 Donation Item
function DonationItem({
  position,
  icon,
}: {
  position: [number, number, number];
  icon: string;
}) {
  const texture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d")!;
    ctx.clearRect(0, 0, 128, 128);
    ctx.font = "80px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(icon, 64, 64);
    return new THREE.CanvasTexture(canvas);
  }, [icon]);

  return (
    <Float speed={3} rotationIntensity={2} floatIntensity={2}>
      <mesh position={position}>
        <planeGeometry args={[0.9, 0.9]} />
        <meshStandardMaterial map={texture} transparent />
      </mesh>
    </Float>
  );
}

// 🎁 More Donation Items with Enhanced Objects
function DonationItems() {
  const groupRef = useRef<THREE.Group>(null);

  const items = useMemo(() => {
    const icons = ["📚", "👕", "💻", "🎒", "🍎", "🧸", "🥾", "🩺", "🍞", "💧"];
    const positions: { position: [number, number, number]; icon: string }[] = [];

    // Main donation items ring
    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 5 + Math.random() * 0.5;
      positions.push({
        position: [
          Math.cos(angle) * radius,
          (Math.random() - 0.5) * 5,
          Math.sin(angle) * radius,
        ],
        icon: icons[i % icons.length],
      });
    }

    return positions;
  }, []);

  // Rotate faster
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.25;
    }
  });

  return (
    <group ref={groupRef}>
      {items.map((item, i) => (
        <DonationItem key={i} {...item} />
      ))}
    </group>
  );
}

// 🌟 Orbital Rings - Additional rotating objects
function OrbitalRings() {
  const innerRingRef = useRef<THREE.Group>(null);
  const outerRingRef = useRef<THREE.Group>(null);
  const particleRingRef = useRef<THREE.Group>(null);

  const ringItems = useMemo(() => {
    const innerItems: Array<{ position: [number, number, number]; scale: number; icon: string }> = [];
    const outerItems: Array<{ position: [number, number, number]; scale: number; icon: string }> = [];
    const particles: Array<{ position: [number, number, number] }> = [];

    // Inner ring - smaller items
    for (let i = 0; i < 12; i++) {
      const angle = (i / 12) * Math.PI * 2;
      const radius = 3.5;
      innerItems.push({
        position: [Math.cos(angle) * radius, 0, Math.sin(angle) * radius] as [number, number, number],
        scale: 0.9,
        icon: ["📱", "🖱️", "⌨️", "🖥️", "🎧", "🔌","🎲", "🪀", "🎮", "🏐", "🎨", "🪁","🥛", "🍌", "🥚", "🍚", "🥗", "☕"][i % 12],
      });
    }

    // Outer ring - environmental symbols
    for (let i = 0; i < 8; i++) {
      const angle = (i / 8) * Math.PI * 2;
      const radius = 7.5;
      outerItems.push({
        position: [Math.cos(angle) * radius, Math.sin(angle * 2) * 1.5, Math.sin(angle) * radius] as [number, number, number],
        scale: 1,
        icon: ["🔦", "🧭", "🏕️", "🕯️", "🪣","👟", "🧢", "🧥", "🧦", "🕶️"][i % 12],
      });
    }

    // Particle ring - small glowing dots
    for (let i = 0; i < 30; i++) {
      const angle = (i / 30) * Math.PI * 2;
      const radius = 8.5 + Math.sin(i * 0.5) * 0.5;
      particles.push({
        position: [
          Math.cos(angle) * radius,
          Math.sin(angle * 3) * 2,
          Math.sin(angle) * radius
        ] as [number, number, number],
      });
    }

    return { innerItems, outerItems, particles };
  }, []);

  useFrame((state) => {
    if (innerRingRef.current) {
      innerRingRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
      innerRingRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1;
    }
    if (outerRingRef.current) {
      outerRingRef.current.rotation.y = -state.clock.getElapsedTime() * 0.2;
      outerRingRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.05;
    }
    if (particleRingRef.current) {
      particleRingRef.current.rotation.y = state.clock.getElapsedTime() * 0.4;
      particleRingRef.current.rotation.x = state.clock.getElapsedTime() * 0.1;
    }
  });

  return (
    <>
      {/* Inner Ring */}
      <group ref={innerRingRef}>
        {ringItems.innerItems.map((item, i) => (
          <Float key={`inner-${i}`} speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh position={item.position} scale={item.scale}>
              <planeGeometry args={[0.7, 0.7]} />
              <meshStandardMaterial
                map={(() => {
                  const canvas = document.createElement("canvas");
                  canvas.width = 64;
                  canvas.height = 64;
                  const ctx = canvas.getContext("2d")!;
                  ctx.clearRect(0, 0, 64, 64);
                  ctx.font = "48px Arial";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.fillText(item.icon, 32, 32);
                  return new THREE.CanvasTexture(canvas);
                })()}
                transparent
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Outer Ring */}
      <group ref={outerRingRef}>
        {ringItems.outerItems.map((item, i) => (
          <Float key={`outer-${i}`} speed={1.5} rotationIntensity={2} floatIntensity={1.5}>
            <mesh position={item.position} scale={item.scale}>
              <planeGeometry args={[1.0, 1.0]} />
              <meshStandardMaterial
                map={(() => {
                  const canvas = document.createElement("canvas");
                  canvas.width = 96;
                  canvas.height = 96;
                  const ctx = canvas.getContext("2d")!;
                  ctx.clearRect(0, 0, 96, 96);
                  ctx.font = "64px Arial";
                  ctx.textAlign = "center";
                  ctx.textBaseline = "middle";
                  ctx.fillText(item.icon, 48, 48);
                  return new THREE.CanvasTexture(canvas);
                })()}
                transparent
              />
            </mesh>
          </Float>
        ))}
      </group>

      {/* Particle Ring */}
      <group ref={particleRingRef}>
        {ringItems.particles.map((particle, i) => (
          <mesh key={`particle-${i}`} position={particle.position}>
            <sphereGeometry args={[0.05, 8, 8]} />
            <meshStandardMaterial
              color="#4ade80"
              emissive="#22c55e"
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </>
  );
}

// 🌌 Background
function Background() {
  return (
    <>
      <Stars radius={100} depth={60} count={6000} factor={4} fade />
      <color attach="background" args={["#02030f"]} />
    </>
  );
}

// 🎬 Main Scene
export default function Globe3D() {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full h-full">
      <Canvas
        shadows
        camera={{ 
          position: [0, 0, isMobile ? 12 : 9], 
          fov: isMobile ? 65 : 50 
        }}
        gl={{ antialias: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 5, 6]} intensity={1.2} castShadow />
        <hemisphereLight intensity={0.6} groundColor="#222" />

        {/* Globe */}
        <Globe isMobile={isMobile} />

        {/* More & faster items */}
        <DonationItems />
        
        {/* Enhanced orbital rings */}
        <OrbitalRings />

        <Background />

        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={1.2}
        />
      </Canvas>
    </div>
  );
}
