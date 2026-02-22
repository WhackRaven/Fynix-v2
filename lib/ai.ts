export interface AIFeedItem {
  category: string;
  title: string;
  content: string;
  quiz: {
    type: 'mc' | 'tf';
    question: string;
    options: string[];
    correct: number;
  };
}

interface ChatMessage {
  role: 'system' | 'user' | 'assistant';
  content: string;
}

export async function generateFeedFact(
  _aiUrl: string,
  grade: string,
  interests: string,
  language: string
): Promise<AIFeedItem | null> {
  try {
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: [
          {
            role: 'user',
            content: `Generate a learning card for a ${grade}th grade student interested in: ${interests}.
Language: ${language}.
Return ONLY valid JSON in this exact format:
{
  "category": "Subject",
  "title": "Interesting Title",
  "content": "Educational content (2-3 sentences)",
  "quiz": {
    "type": "mc",
    "question": "Quiz question?",
    "options": ["Option 1", "Option 2", "Option 3", "Option 4"],
    "correct": 0
  }
}`,
          },
        ],
        seed: Math.floor(Math.random() * 1000000),
      }),
    });

    if (!response.ok) throw new Error('AI request failed');

    const text = await response.text();
    const jsonMatch = text.match(/\{[\s\S]*\}/);
    if (!jsonMatch) throw new Error('No JSON found');

    const data = JSON.parse(jsonMatch[0]);
    return data as AIFeedItem;
  } catch (error) {
    console.error('AI generation error:', error);
    return null;
  }
}

export async function chatWithAI(
  _aiUrl: string,
  messages: ChatMessage[],
  _userMessage: string
): Promise<{ success: boolean; text: string; error?: string }> {
  try {
    const response = await fetch('https://text.pollinations.ai/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        messages: messages.map(m => ({ role: m.role, content: m.content })),
        seed: Math.floor(Math.random() * 1000000),
      }),
    });

    if (!response.ok) {
      return { success: false, text: '', error: 'API request failed' };
    }

    const text = await response.text();
    return { success: true, text: text.trim() };
  } catch (error) {
    return { success: false, text: '', error: String(error) };
  }
}
