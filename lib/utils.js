export function formatData(dateString) {
  // format date nicely
  // example: from this 👉 2025-07-10 👉 July 10, 2025
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}