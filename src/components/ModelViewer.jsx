'use client';

import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense } from 'react';

export const ModelViewer = () => {
    const myModel = useGLTF('/reactor.gltf');

    return (
        <Canvas style={{ height: '500px', width: '100%' }} camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
                <pointLight position={[-10, -10, -10]} color="#48cc90" intensity={500} />
                <pointLight position={[10, 10, 10]} color="#36e2e2" intensity={500} />
                <primitive object={myModel.scene} scale={[1.5, 1.5, 1.5]} />
                <OrbitControls enableZoom={true} />
            </Suspense>
        </Canvas>
    );
};
