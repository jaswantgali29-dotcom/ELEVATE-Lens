const requiredVars = [
  "OPENAI_API_KEY",
  "OPENAI_MODEL",
  "NEXT_PUBLIC_APP_NAME",
  "NEXT_PUBLIC_MAX_FRAME_FPS"
];

const missing = requiredVars.filter(v => !process.env[v]);
if (missing.length > 0) {
  console.error("Missing env vars:", missing.join(", "));
  process.exit(1);
}
console.log("All required env vars present.");
