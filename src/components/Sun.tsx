import { Sphere } from '@react-three/drei'
import { MeshProps, ThreeElements, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

const radius = 10

interface SunProps extends MeshProps {
  movingRadius: number
}

function Sun({ movingRadius, ...props }: SunProps) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [angle, setAngle] = useState(0)

  useFrame((state, delta) => {
    setAngle(angle + delta)
    const x = radius * Math.cos(angle)
    const y = radius * Math.sin(angle)

    meshRef.current.position.set(x, y, meshRef.current.position.z)
  })
  return (
    <mesh {...props} ref={meshRef}>
      <Sphere args={[1]}>
        <meshBasicMaterial color={'orange'} />
      </Sphere>
    </mesh>
  )
}

export default Sun
