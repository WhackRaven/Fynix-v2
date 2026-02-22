export const OLLAMA_TEXT_MODEL = 'llama3.2';
export const OLLAMA_VISION_MODEL = 'llava';

interface OllamaChatOptions {
  prompt: string;
  model: string;
  images?: string[];
}

export async function ollamaChat(options: OllamaChatOptions): Promise<string> {
  const { prompt, model, images } = options;

  try {
    const response = await fetch('http://localhost:11434/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model,
        prompt,
        images,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error(`Ollama API error: ${response.status}`);
    }

    const data = await response.json();
    return data.response || '';
  } catch (error) {
    console.error('Ollama error:', error);
    throw error;
  }
}
