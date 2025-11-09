export default function handler(req, res) {
  const { text } = req.body;
  // Placeholder: In a real app, could generate PNG server-side
  res.status(200).json({ success: true, text });
}
