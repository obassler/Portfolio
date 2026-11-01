// Builds the hero "loss landscape": contour lines of a toy 2-D loss surface
// and the path plain gradient descent takes across it. Runs at build time.

export const W = 600;
export const H = 440;
const NX = 96;
const NY = 72;

// Domain of the toy surface
const X0 = -3.2, X1 = 3.2, Y0 = -2.4, Y1 = 2.4;

function loss(x: number, y: number): number {
  const bowl = 0.09 * (x * x + 1.4 * y * y);
  const wells =
    -1.25 * Math.exp(-((x - 1.15) ** 2 + (y + 0.55) ** 2) / 0.9) -
    0.85 * Math.exp(-((x + 1.4) ** 2 + (y - 0.75) ** 2) / 0.7) -
    0.35 * Math.exp(-((x + 0.1) ** 2 + (y + 1.5) ** 2) / 0.35);
  const ripple = 0.06 * Math.sin(2.1 * x) * Math.cos(1.7 * y);
  return bowl + wells + ripple;
}

function grad(x: number, y: number): [number, number] {
  const h = 1e-4;
  return [
    (loss(x + h, y) - loss(x - h, y)) / (2 * h),
    (loss(x, y + h) - loss(x, y - h)) / (2 * h),
  ];
}

const sx = (x: number) => ((x - X0) / (X1 - X0)) * W;
const sy = (y: number) => ((Y1 - y) / (Y1 - Y0)) * H;
const r = (v: number) => Math.round(v * 10) / 10;

export interface Contour {
  d: string;
  level: number; // 0 = lowest
}

export function contours(levels = 14): Contour[] {
  const xs = Array.from({ length: NX + 1 }, (_, i) => X0 + ((X1 - X0) * i) / NX);
  const ys = Array.from({ length: NY + 1 }, (_, j) => Y0 + ((Y1 - Y0) * j) / NY);
  const v = ys.map((y) => xs.map((x) => loss(x, y)));
  const flat = v.flat();
  const min = Math.min(...flat);
  const max = Math.max(...flat);
  const out: Contour[] = [];

  for (let k = 1; k <= levels; k++) {
    // denser spacing near the minima
    const t = (k / (levels + 1)) ** 1.6;
    const iso = min + t * (max - min);
    let d = "";
    for (let j = 0; j < NY; j++) {
      for (let i = 0; i < NX; i++) {
        const a = v[j][i], b = v[j][i + 1], c = v[j + 1][i + 1], e = v[j + 1][i];
        const pts: [number, number][] = [];
        const edge = (p: number, q: number, x0: number, y0: number, x1: number, y1: number) => {
          if ((p < iso) !== (q < iso)) {
            const f = (iso - p) / (q - p);
            pts.push([sx(x0 + f * (x1 - x0)), sy(y0 + f * (y1 - y0))]);
          }
        };
        edge(a, b, xs[i], ys[j], xs[i + 1], ys[j]);
        edge(b, c, xs[i + 1], ys[j], xs[i + 1], ys[j + 1]);
        edge(c, e, xs[i + 1], ys[j + 1], xs[i], ys[j + 1]);
        edge(e, a, xs[i], ys[j + 1], xs[i], ys[j]);
        for (let p = 0; p + 1 < pts.length; p += 2) {
          d += `M${r(pts[p][0])} ${r(pts[p][1])}L${r(pts[p + 1][0])} ${r(pts[p + 1][1])}`;
        }
      }
    }
    out.push({ d, level: k - 1 });
  }
  return out;
}

export function descent(start: [number, number] = [-2.7, -1.9], lr = 0.32, steps = 70) {
  let [x, y] = start;
  let vx = 0, vy = 0;
  const pts: [number, number][] = [[sx(x), sy(y)]];
  for (let s = 0; s < steps; s++) {
    const [gx, gy] = grad(x, y);
    // a little momentum makes the path curve like a real optimizer
    vx = 0.6 * vx - lr * gx;
    vy = 0.6 * vy - lr * gy;
    x += vx;
    y += vy;
    pts.push([sx(x), sy(y)]);
  }
  const d = pts.map(([px, py], i) => `${i ? "L" : "M"}${r(px)} ${r(py)}`).join("");
  let length = 0;
  for (let i = 1; i < pts.length; i++) {
    length += Math.hypot(pts[i][0] - pts[i - 1][0], pts[i][1] - pts[i - 1][1]);
  }
  return { d, end: pts[pts.length - 1], start: pts[0], length: Math.ceil(length) };
}

export function globalMin(): [number, number] {
  let best = Infinity, bx = 0, by = 0;
  for (let i = 0; i <= 320; i++) {
    for (let j = 0; j <= 240; j++) {
      const x = X0 + ((X1 - X0) * i) / 320, y = Y0 + ((Y1 - Y0) * j) / 240;
      const v = loss(x, y);
      if (v < best) { best = v; bx = x; by = y; }
    }
  }
  return [sx(bx), sy(by)];
}
