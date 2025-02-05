import { useState, useEffect } from 'react';

const ColorGuess = () => {
  const [colors, setColors] = useState([]);
  const [mainColor, setMainColor] = useState('');
  const [score, setScore] = useState(0);
  const [message, setMessage] = useState('');
  const [messageClass, setMessageClass] = useState('');

  useEffect(() => {
    generateColors();
  }, []);

  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const generateColors = () => {
    const newColors = [];
    for (let i = 0; i < 6; i++) {
      newColors.push(generateRandomColor());
    }
    setColors(newColors);
    setMainColor(newColors[Math.floor(Math.random() * 6)]);
  };

  const handleGuess = (color) => {
    if (color === mainColor) {
      setMessage('Correct!🎉🎉');
      setScore(prevScore => prevScore + 1);
      setMessageClass('correct');

      setTimeout(() => {
        resetGame();
      }, 2000);
    } else {
      setMessage('Try Again!👎👎');
      setMessageClass('wrong');
    }
  };

  const resetGame = () => {
    setMessage('');
    setMessageClass('');
    generateColors();
  };

  const handleNewGame = () => {
    setScore(0);
    resetGame();
  }

  return (
    <div className='container'>
      <h1 data-testid='gameInstructions'>Guess the color</h1>
      <div className="score">
        <p data-testid='score'>Score: {score}</p>
      </div>
      <div className='main-color' data-testid='colorBox' style={{ backgroundColor: mainColor }}></div>
      <div className='color-options'>
        {colors.map((color, index) => (
          <div key={index} data-testid='colorOption' className='color-option' onClick={() => handleGuess(color)} style={{ backgroundColor: color }}></div>
        ))}
      </div>
      <p className={`message ${messageClass}`} data-testid='gameStatus'>{message}</p>
      <button className='new-game' onClick={handleNewGame} data-testid='newGameButton'>New Game</button>
    </div>
  );
};

export default ColorGuess;