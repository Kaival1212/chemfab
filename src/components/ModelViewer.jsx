import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useState } from 'react';

export const ModelViewer = () => {
    const myModel = useGLTF('/reactor2.gltf');
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Canvas style={{ height: '500px', width: '100%' }} camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
                <pointLight position={[-10, -10, -10]} intensity={500} />
                <pointLight position={[10, 10, 10]} intensity={500} />
                <primitive object={myModel.scene} scale={[1.5, 1.5, 1.5]} />
                {screenSize > 640 && <OrbitControls enableZoom={true} />}
            </Suspense>
        </Canvas>
    );
};