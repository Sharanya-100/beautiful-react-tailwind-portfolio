import { useState, useEffect, useCallback } from "react";

const GRID_SIZE = 20;
const TILE_SIZE = 20;

const getRandomCoordinate = () => {
  return {
    x: Math.floor(Math.random() * GRID_SIZE),
    y: Math.floor(Math.random() * GRID_SIZE),
  };
};

export const GameSection = () => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(getRandomCoordinate());
  const [direction, setDirection] = useState({ x: 0, y: -1 }); // Start moving up
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleKeyDown = useCallback(
    (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    },
    [direction]
  );

  const resetGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(getRandomCoordinate());
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
    setScore(0);
  };

  useEffect(() => {
    if (gameOver) return;

    window.addEventListener("keydown", handleKeyDown);

    const gameInterval = setInterval(() => {
      setSnake((prevSnake) => {
        const newSnake = [...prevSnake];
        const head = { ...newSnake[0] };
        head.x += direction.x;
        head.y += direction.y;

        // Wall collision
        if (
          head.x < 0 ||
          head.x >= GRID_SIZE ||
          head.y < 0 ||
          head.y >= GRID_SIZE
        ) {
          setGameOver(true);
          return prevSnake;
        }

        // Self collision
        for (let i = 1; i < newSnake.length; i++) {
          if (head.x === newSnake[i].x && head.y === newSnake[i].y) {
            setGameOver(true);
            return prevSnake;
          }
        }

        newSnake.unshift(head);

        // Food collision
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood(getRandomCoordinate());
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    }, 200);

    return () => {
      clearInterval(gameInterval);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [snake, direction, food, gameOver, handleKeyDown]);

  return (
    <section id="game" className="py-24 px-4 text-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Bored? <span className="text-primary">Let&apos;s Play!</span>
      </h2>
      <p className="text-muted-foreground mb-8">
        Use the arrow keys to move the snake.
      </p>
      <div
        className="relative bg-background border-2 border-primary rounded-lg mx-auto"
        style={{
          width: GRID_SIZE * TILE_SIZE,
          height: GRID_SIZE * TILE_SIZE,
        }}
      >
        {snake.map((segment, index) => (
          <div
            key={index}
            className="absolute bg-primary rounded"
            style={{
              left: segment.x * TILE_SIZE,
              top: segment.y * TILE_SIZE,
              width: TILE_SIZE,
              height: TILE_SIZE,
            }}
          />
        ))}
        <div
          className="absolute bg-red-500 rounded-full"
          style={{
            left: food.x * TILE_SIZE,
            top: food.y * TILE_SIZE,
            width: TILE_SIZE,
            height: TILE_SIZE,
          }}
        />
        {gameOver && (
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center">
            <p className="text-white text-4xl font-bold mb-4">Game Over</p>
            <p className="text-white text-2xl mb-4">Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-6 py-2 rounded-full bg-primary text-background font-bold hover:bg-primary/80 transition-colors"
            >
              Play Again
            </button>
          </div>
        )}
      </div>
      <p className="mt-4 text-lg">Score: {score}</p>
    </section>
  );
};
