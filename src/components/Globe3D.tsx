import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, Float, Text3D, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

// Floating donation icons component
function FloatingIcons() {
  const groupRef = useRef<THREE.Group>(null)
  
  // Define donation items positions around the globe
  const items = useMemo(() => [
    { position: [2.2, 0.5, 0.8], icon: '📚', color: '#4ade80' },
    { position: [-1.8, 1.2, 1.5], icon: '👕', color: '#60a5fa' },
    { position: [0.5, -2.1, 1.2], icon: '💻', color: '#f59e0b' },
    { position: [-2.0, -0.8, -1.1], icon: '🎒', color: '#ec4899' },
    { position: [1.5, 1.8, -1.0], icon: '🍎', color: '#10b981' },
    { position: [-0.3, 2.2, 0.5], icon: '🧸', color: '#8b5cf6' },
  ], [])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.getElapsedTime() * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      {items.map((item, index) => (
        <Float
          key={index}
          speed={1.5 + index * 0.2}
          rotationIntensity={0.5}
          floatIntensity={0.8}
        >
          <mesh position={item.position as [number, number, number]}>
            <planeGeometry args={[0.4, 0.4]} />
            <meshBasicMaterial transparent>
              <canvasTexture
                attach="map"
                image={(() => {
                  const canvas = document.createElement('canvas')
                  canvas.width = 64
                  canvas.height = 64
                  const ctx = canvas.getContext('2d')!
                  ctx.font = '40px Arial'
                  ctx.textAlign = 'center'
                  ctx.textBaseline = 'middle'
                  ctx.fillText(item.icon, 32, 32)
                  return canvas
                })()}
              />
            </meshBasicMaterial>
          </mesh>
        </Float>
      ))}
    </group>
  )
}

// Globe component
function Globe() {
  const globeRef = useRef<THREE.Mesh>(null)
  
  useFrame((state) => {
    if (globeRef.current) {
      globeRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
    }
  })

  // Create earth-like texture with professional green tones
  const earthMaterial = useMemo(() => {
    return new THREE.MeshPhongMaterial({
      color: new THREE.Color('hsl(147, 25%, 35%)'),
      shininess: 0.1,
      transparent: true,
      opacity: 0.9,
    })
  }, [])

  return (
    <Sphere ref={globeRef} args={[1.5, 32, 32]} material={earthMaterial}>
      <meshPhongMaterial
        color="hsl(147, 25%, 35%)"
        shininess={0.1}
        transparent
        opacity={0.9}
      />
    </Sphere>
  )
}

// Ambient particles
function Particles() {
  const particlesRef = useRef<THREE.Points>(null)
  
  const particlesGeometry = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(200 * 3)
    
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return geometry
  }, [])

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.getElapsedTime() * 0.02
      particlesRef.current.rotation.x = state.clock.getElapsedTime() * 0.01
    }
  })

  return (
    <points ref={particlesRef} geometry={particlesGeometry}>
      <pointsMaterial
        color="hsl(147, 30%, 45%)"
        size={0.02}
        transparent
        opacity={0.6}
      />
    </points>
  )
}

export default function Globe3D() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.4} />
        <directionalLight 
          position={[5, 5, 5]} 
          intensity={0.8}
          color="hsl(144, 20%, 75%)"
        />
        <pointLight 
          position={[-5, -5, -5]} 
          intensity={0.3}
          color="hsl(15, 30%, 65%)"
        />
        
        {/* Globe and elements */}
        <Globe />
        <FloatingIcons />
        <Particles />
        
        {/* Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          autoRotate
          autoRotateSpeed={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
      </Canvas>
    </div>
  )
}