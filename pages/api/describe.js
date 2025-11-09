import rateLimit from 'express-rate-limit';
import LRU from 'lru-cache';
import OpenAI from 'openai';

const cache = new LRU({ max: 500 });

const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 30
});

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

export default async function handler(req, res) {
  await limiter(req, res, () => {});
  const { objectName, tone } = req.body;
  const cacheKey = `${objectName}-${tone}`;
  if (cache.has(cacheKey)) {
    return res.status(200).json({ story: cache.get(cacheKey) });
  }
  const prompt = `Describe a ${objectName} in a ${tone} tone in 2-3 sentences.`;
  const response = await openai.chat.completions.create({
    model: process.env.OPENAI_MODEL,
    messages: [{ role: "user", content: prompt }]
  });
  const story = response.choices[0].message.content;
  cache.set(cacheKey, story);
  res.status(200).json({ story });
}
