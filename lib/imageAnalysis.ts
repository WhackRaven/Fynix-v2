import Tesseract from 'tesseract.js';

export async function extractTextFromImage(
  dataUrl: string,
  lang: string = 'eng'
): Promise<string> {
  try {
    const { data } = await Tesseract.recognize(dataUrl, lang, {
      logger: () => {},
    });
    return data.text;
  } catch (error) {
    console.error('OCR error:', error);
    throw new Error('Text extraction failed');
  }
}

export async function getImageComment(
  _dataUrl: string,
  roastLevel: number
): Promise<string> {
  const comments = {
    1: ['Nice pic', 'Looks good', 'Clear image'],
    2: ['Pretty decent', 'Could be clearer', 'Not bad'],
    3: ['Okay quality', 'Readable enough', 'It works'],
    4: ['That photo quality though', 'Could be better', 'Try again maybe'],
    5: ['Did you take this with a potato?', 'Bruh...', 'What even is this'],
  };

  const level = Math.max(1, Math.min(5, roastLevel)) as keyof typeof comments;
  const options = comments[level];
  return options[Math.floor(Math.random() * options.length)];
}
