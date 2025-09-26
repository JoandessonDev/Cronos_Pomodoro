export function formatSecondsToMinutes(seconds: number) {
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secodsMod = String(Math.floor(seconds % 60)).padStart(2, "0");
  return `${minutes}:${secodsMod}`;
}
