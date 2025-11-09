// simple startup check to avoid forgotten env keys during demo
const missing = []
if (!process.env.OPENAI_API_KEY) missing.push('OPENAI_API_KEY')
if (missing.length) {
  console.error('Missing env vars:', missing.join(', '))
  process.exit(1)
} else {
  console.log('All required env vars present.')
}
