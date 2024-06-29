import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useEffect, useState, useRef } from 'react';

const AnimatedModel = () => {
    const myModel = useGLTF('/reactor2.gltf');
    const modelRef = useRef();
    const [rotationDirection, setRotationDirection] = useState(1); // 1 for forward, -1 for backward

    useFrame((state, delta) => {
        if (modelRef.current) {
            modelRef.current.rotation.y += delta; // Rotate model around y-axis

            // Adjust the x-axis rotation
            modelRef.current.rotation.x += delta * 0.1 * rotationDirection;
            if (modelRef.current.rotation.x >= 1.1) {
                setRotationDirection(-1); // Reverse direction
            } else if (modelRef.current.rotation.x <= -1.1) {
                setRotationDirection(1); // Forward direction
            }
        }
    });

    return <primitive ref={modelRef} object={myModel.scene} scale={[1.7, 1.7, 1.7]} />;
};

export const ModelViewer = () => {
    const [screenSize, setScreenSize] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Canvas style={{ height: '700px', width: '100%' }} camera={{ position: [0, 0, 5] }}>
            <Suspense fallback={null}>
                <pointLight position={[-10, -10, -10]} intensity={500} />
                <pointLight position={[10, 10, 10]} intensity={500} />
                <AnimatedModel />
                {screenSize > 640 && <OrbitControls enableZoom={true} />}
            </Suspense>
        </Canvas>
    );
};

export default ModelViewer;
