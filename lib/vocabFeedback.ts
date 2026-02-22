export function getVocabFeedback(
  _correctAnswer: string,
  isCorrect: boolean,
  roastLevel: number
): string {
  if (isCorrect) {
    const positive = [
      'Genau richtig!',
      'Perfekt!',
      'Top!',
      'Sehr gut!',
      'Das sitzt!',
    ];
    return positive[Math.floor(Math.random() * positive.length)];
  }

  const roasts = {
    1: [
      'Fast! Beim nachsten Mal klappt es.',
      'Nicht schlimm, weiter so!',
      'Das war knapp!',
    ],
    2: [
      'Hmm, nicht ganz richtig.',
      'Leider falsch.',
      'Das war daneben.',
    ],
    3: [
      'Nope, das war falsch.',
      'Leider nicht korrekt.',
      'Falsch, aber kein Problem!',
    ],
    4: [
      'Das war mal komplett daneben...',
      'Echt jetzt?',
      'Bruh, das war eindeutig falsch.',
    ],
    5: [
      'Alter, hast du uberhaupt gelernt?',
      'Das ist ja peinlich...',
      'Komplett falsch, wow.',
    ],
  };

  const level = Math.max(1, Math.min(5, roastLevel)) as keyof typeof roasts;
  const options = roasts[level];
  return options[Math.floor(Math.random() * options.length)];
}
