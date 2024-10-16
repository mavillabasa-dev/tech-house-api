export const getRandomDescription = (): string => {
    const descriptions = [
      "Lorem ipsum dolor sit amet",
      "Consectetur adipiscing elit",
      "Sed do eiusmod tempor",
      "Ut enim ad minim veniam",
      "Quis nostrud exercitation",
      "Duis aute irure dolor",
      "Excepteur sint occaecat cupidatat",
      "Sunt in culpa qui officia deserunt"
    ];
    
    // Devuelve una descripción aleatoria de la lista
    return descriptions[Math.floor(Math.random() * descriptions.length)];
  };
  