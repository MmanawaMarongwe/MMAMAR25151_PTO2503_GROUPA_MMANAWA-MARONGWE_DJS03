export function dateFormat(updatedValue) {
  if (!updatedValue) return "—";

  const dt = new Date(updatedValue);
  if (isNaN(dt)) return "—";

  return new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(dt);
}
