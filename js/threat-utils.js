export function popupErrors(errors) {
  if (!Array.isArray(errors) || errors.length === 0) return;
  alert(errors.join("\n"));
}

export function distance(a, b) {
  return Math.hypot(b.x - a.x, b.y - a.y);
}

export function headingDeg(a, b) {
  // Navigation heading: 0° north, 90° east, 180° south, 270° west.
  const angle = Math.atan2(b.x - a.x, b.y - a.y) * 180 / Math.PI;
  return (angle + 360) % 360;
}

export function smallestAngleDiff(a, b) {
  let diff = Math.abs(b - a) % 360;
  if (diff > 180) {
    diff = 360 - diff;
  }
  return diff;
}

export function isFiniteNumber(v) {
  return typeof v === "number" && Number.isFinite(v);
}

export function isNonEmptyString(v) {
  return typeof v === "string" && v.trim().length > 0;
}

export function isPositionArray(v) {
  return Array.isArray(v) && v.length === 2 && isFiniteNumber(v[0]) && isFiniteNumber(v[1]);
}

export function round(value, digits = 2) {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}
