import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Lightformer, Float } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";
import type { Mesh, Group } from "three";

// Lacquered knot lit by crimson and gold light strips.
// It turns on its own, follows the cursor, twists as the page scrolls,
// and spins up when clicked anywhere in the hero, then eases back.
const pointer = { x: 0, y: 0 };
let scroll = 0;
let kick = 0;
if (typeof window !== "undefined") {
  window.addEventListener("pointermove", (e) => {
    pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
  }, { passive: true });
  window.addEventListener("scroll", () => { scroll = window.scrollY; }, { passive: true });
  window.addEventListener("pointerdown", (e) => {
    if (window.scrollY < window.innerHeight && !(e.target as HTMLElement).closest("a,button")) kick = 4;
  });
}

function Knot({ calm }: { calm: boolean }) {
  const group = useRef<Group>(null);
  const mesh = useRef<Mesh>(null);
  const spin = useRef(0);

  useFrame((_, delta) => {
    if (!mesh.current || !group.current) return;
    const d = Math.min(delta, 0.05);
    if (!calm) {
      // base spin plus a decaying boost from clicks
      spin.current += (kick - spin.current) * 0.08;
      kick *= 0.94;
      mesh.current.rotation.x += d * (0.22 + spin.current * 0.6);
      mesh.current.rotation.y += d * (0.32 + spin.current);
    }
    const g = group.current;
    const sy = scroll / window.innerHeight;
    g.rotation.y += (pointer.x * 0.7 - g.rotation.y) * 0.05;
    g.rotation.x += (-pointer.y * 0.5 - g.rotation.x) * 0.05;
    g.rotation.z += ((calm ? 0 : sy * 1.4) - g.rotation.z) * 0.08;
    g.position.x += (pointer.x * 0.35 - g.position.x) * 0.04;
    g.position.y += (pointer.y * 0.2 + sy * 1.2 - g.position.y) * 0.06;
  });

  return (
    <group ref={group}>
      <Float speed={calm ? 0 : 1.8} rotationIntensity={0.5} floatIntensity={1.1}>
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
    // fade in even if the renderer's first frame is delayed
    const t = window.setTimeout(() => setReady(true), 1500);
    return () => {
      window.clearTimeout(t);
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
