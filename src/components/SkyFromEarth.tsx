import { ThreeElements } from '@react-three/fiber'
import React, { useRef } from 'react'
import Sun from './Sun'
import { Circle } from '@react-three/drei'

const movingRadius = 10
const rotateX = Math.PI / 4
const offsetAngle = Math.PI / 8

const distanceOffsetFromEquaterByDegree = (offsetAngle, movingRadius) => {
  return Math.sin(offsetAngle) * movingRadius
}
const caculateMovingRadiusByDegree = (offsetAngle, movingRadius) => {
  return Math.cos(offsetAngle) * movingRadius
}

function SkyFromEarth(props: ThreeElements['mesh']) {
  const skySphereRef = useRef<THREE.Mesh>(null!)
  const offsetFromEquator = distanceOffsetFromEquaterByDegree(offsetAngle, movingRadius)
  const caculatedMovingRadius = caculateMovingRadiusByDegree(offsetAngle, movingRadius)
  return (
    <>
      <mesh {...props} ref={skySphereRef} rotation={[rotateX, 0, 0]} position={[0, 0, offsetFromEquator]}>
        <Sun movingRadius={caculatedMovingRadius} />
        <Circle args={[caculatedMovingRadius]}>
          <meshBasicMaterial wireframe color={'red'} />
        </Circle>
      </mesh>
    </>
  )
}

export default SkyFromEarth
