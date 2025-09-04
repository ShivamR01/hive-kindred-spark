import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sphere, Float, OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

// 🌍 Globe with bigger green dots
function Globe() {
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
    for (let i = 0; i < 200; i++) {
      const x = Math.random() * size;
      const y = Math.random() * size;
      const r = Math.random() * 6 + 2; // bigger dots
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }

    return new THREE.CanvasTexture(canvas);
  }, []);

  return (
    <Sphere ref={globeRef} args={[2.3, 64, 64]}>
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

// 🎁 More Donation Items
function DonationItems() {
  const groupRef = useRef<THREE.Group>(null);

  const items = useMemo(() => {
    const icons = ["📚", "👕", "💻", "🎒", "🍎", "🧸", "🥾", "🩺", "🍞", "💧"];
    const positions: { position: [number, number, number]; icon: string }[] = [];

    for (let i = 0; i < 20; i++) {
      const angle = (i / 20) * Math.PI * 2;
      const radius = 5 + Math.random() * 1.5;
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
  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        camera={{ position: [0, 0, 9], fov: 50 }}
        gl={{ antialias: true }}
      >
        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[6, 5, 6]} intensity={1.2} castShadow />
        <hemisphereLight intensity={0.6} groundColor="#222" />

        {/* Globe */}
        <Globe />

        {/* More & faster items */}
        <DonationItems />

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
