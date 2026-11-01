import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh, Group } from "three";

// Slowly turning lacquered knot lit by crimson and gold light strips.
// It leans toward the cursor a little; nothing else moves.
function Knot({ calm }: { calm: boolean }) {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);

  useFrame((state, delta) => {
    if (!mesh.current || !group.current) return;
    if (!calm) {
      mesh.current.rotation.x += delta * 0.08;
      mesh.current.rotation.y += delta * 0.12;
    }
    const { x, y } = state.pointer;
    group.current.rotation.y += (x * 0.35 - group.current.rotation.y) * 0.04;
    group.current.rotation.x += (-y * 0.25 - group.current.rotation.x) * 0.04;
  });

  return (
    <group ref={group}>
      <Float speed={calm ? 0 : 1.1} rotationIntensity={0.25} floatIntensity={0.6}>
        <mesh ref={mesh} rotation={[0.4, 0.6, 0]}>
          <torusKnotGeometry args={[0.9, 0.26, 260, 48, 2, 3]} />
          <meshPhysicalMaterial
            color="#140e0e"
            metalness={0.85}
            roughness={0.16}
            clearcoat={1}
            clearcoatRoughness={0.08}
            envMapIntensity={1.4}
          />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  const [calm, setCalm] = useState(false);
  const [visible, setVisible] = useState(true);
  const [ready, setReady] = useState(false);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setCalm(mq.matches);
    const on = () => setCalm(mq.matches);
    mq.addEventListener("change", on);
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0 });
    if (wrap.current) io.observe(wrap.current);
    return () => {
      mq.removeEventListener("change", on);
      io.disconnect();
    };
  }, []);

  return (
    <div ref={wrap} className={`scene h-full w-full ${ready ? "ready" : ""}`} aria-hidden="true">
      <Canvas
        dpr={[1, 1.5]}
        camera={{ position: [0, 0, 7], fov: 36 }}
        frameloop={visible ? "always" : "never"}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
        onCreated={() => requestAnimationFrame(() => setReady(true))}
      >
        <Knot calm={calm} />
        <Environment resolution={256}>
          <Lightformer form="rect" intensity={6} color="#c8102e" position={[-4, 1.5, -2]} scale={[2, 6, 1]} rotation-y={Math.PI / 2.5} />
          <Lightformer form="rect" intensity={4} color="#d6a85c" position={[4, -1, 1]} scale={[2, 5, 1]} rotation-y={-Math.PI / 2.5} />
          <Lightformer form="ring" intensity={2.5} color="#f2ece4" position={[0, 4, -3]} scale={2.5} />
          <Lightformer form="rect" intensity={1.2} color="#3a1216" position={[0, -4, 2]} scale={[8, 1, 1]} rotation-x={-Math.PI / 2} />
        </Environment>
      </Canvas>
    </div>
  );
}
