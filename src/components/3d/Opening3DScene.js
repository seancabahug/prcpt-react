/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Suspense } from "react";
import { motion, useSpring, useTransform, MotionConfig } from "framer-motion";
import { motion as motion3 } from "framer-motion-3d";
import { useRef, useLayoutEffect } from "react";

import { transition } from "../../config";
import OpeningBackground from "../../assets/images/opening_bg.jpg";
import Glasses1 from "./Glasses1";

import { Canvas, useThree } from "@react-three/fiber";
import Glasses2 from "./Glasses2";

// THANK YOU FRAMER MOTION 3D EXAMPLES

const useSmoothTransform = (value, springOptions, transformer) => {
  return useSpring(useTransform(value, transformer), springOptions);
};

// Adapted from https://github.com/pmndrs/drei/blob/master/src/core/PerspectiveCamera.tsx
function Camera({ mouseX, mouseY, ...props }) {
  const cameraX = useSmoothTransform(mouseX, spring, (x) => x / 1050);
  const cameraY = useSmoothTransform(mouseY, spring, (y) => (-1 * y) / 350);

  const set = useThree(({ set }) => set);
  const camera = useThree(({ camera }) => camera);
  const size = useThree(({ size }) => size);
  const scene = useThree(({ scene }) => scene);
  const cameraRef = useRef();

  useLayoutEffect(() => {
    const { current: cam } = cameraRef;
    if (cam) {
      cam.aspect = size.width / size.height;
      cam.updateProjectionMatrix();
    }
  }, [size, props]);

  useLayoutEffect(() => {
    if (cameraRef.current) {
      const oldCam = camera;
      set(() => ({ camera: cameraRef.current }));
      return () => set(() => ({ camera: oldCam }));
    }
  }, [camera, cameraRef, set]);

  useLayoutEffect(() => {
    return cameraX.onChange(() => camera.lookAt(scene.position));
  }, [cameraX]);

  return (
    <motion3.perspectiveCamera
      ref={cameraRef}
      fov={90}
      position={[cameraX, cameraY, 3.8]}
    />
  );
}

function Lights() {
  return (
    <>
      <spotLight color="#F4E98C" position={[-10, -10, -10]} intensity={0.2} />
      <spotLight color="#F4E98C" position={[-10, 0, 15]} intensity={0.8} />
      <spotLight color="#F4E98C" position={[-5, 20, 2]} intensity={0.5} />
      <spotLight color="#f2056f" position={[15, 10, -2]} intensity={2} />
      <spotLight color="#f2056f" position={[15, 10, 5]} intensity={1} />
      <spotLight color="#b107db" position={[5, -10, 5]} intensity={0.8} />
    </>
  );
}

function Icosahedron() {
  return (
    <motion3.mesh
      position={[1.1, 0, 0]}
      rotation-z={0.5}
      variants={{
        hover: {
          x: 1.8,
          z: 0.6,
          y: 0.6,
          rotateZ: -0.5,
        },
      }}
    >
      <icosahedronGeometry args={[0.7, 0]} />
      <Material />
    </motion3.mesh>
  );
}

function Material() {
  return <meshPhongMaterial color="#fff" specular="#61dafb" shininess={10} />;
}

const spring = { stiffness: 600, damping: 30 };
const mouseToLightRotation = (v) => (-1 * v) / 140;

export function Opening3DScene({ isHover, mouseX, mouseY }) {
  const lightRotateX = useSmoothTransform(mouseY, spring, mouseToLightRotation);
  const lightRotateY = useSmoothTransform(mouseX, spring, mouseToLightRotation);

  return (
    <div
      css={css`
        width: 100vw;
        height: 100vh;
        position: absolute;
        top: 0;
        left: 0;
        filter: blur(${isHover ? "0px" : "15px"})
          grayscale(${isHover ? "0" : "0.8"});
        transition: filter 0.75s;
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #111111;
        background-image: url(${OpeningBackground});
        background-attachment: fixed;
        background-position: bottom;
      `}
    >
      <motion.div
        variants={{
          hover: { scale: 1.5, opacity: 1 },
          rest: { scale: 1, opacity: 0 }
        }}
        animate={isHover ? "hover" : "rest"}
        css={css`
          width: 75vw;
          height: 75vh;
          
          @media screen and (max-width: 992px) {
            scale: 0.25;
          }
        `}
        transition={{ duration: 0.3 }}
      >
        <Suspense fallback={null}>
          <Canvas
            shadows
            dpr={[1, 2]}
            resize={{ scroll: false, offsetSize: true }}
            frameLoop="demand"
          >
            <Camera mouseX={mouseX} mouseY={mouseY} />
            <MotionConfig transition={transition}>
              <motion3.group
                center={[0, 0, 0]}
                rotation={[lightRotateX, lightRotateY, 0]}
              >
                <Lights />
              </motion3.group>
              <motion3.group
                initial={false}
                animate={isHover ? "hover" : "rest"}
                dispose={null}
                variants={{
                  hover: { z: 0 },
                }}
              >
                <Glasses1 />
                <Glasses2 />
              </motion3.group>
            </MotionConfig>
          </Canvas>
        </Suspense>
      </motion.div>
    </div>
  );
}
