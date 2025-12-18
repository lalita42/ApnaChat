// import React, { useEffect, useRef, useState } from "react";

// const SnakeGame = () => {
//   const canvasRef = useRef(null);
//   const grid = 20;
//   const canvasSize = 400;

//   // Player 1
//   const [snake1, setSnake1] = useState([{ x: 80, y: 80 }]);
//   const [dir1, setDir1] = useState({ x: grid, y: 0 });
//   const [score1, setScore1] = useState(0);

//   // Player 2
//   const [snake2, setSnake2] = useState([{ x: 320, y: 320 }]);
//   const [dir2, setDir2] = useState({ x: -grid, y: 0 });
//   const [score2, setScore2] = useState(0);

//   const [food, setFood] = useState({ x: 200, y: 200 });

//   const getRandomFood = () => {
//     setFood({
//       x: Math.floor(Math.random() * (canvasSize / grid)) * grid,
//       y: Math.floor(Math.random() * (canvasSize / grid)) * grid,
//     });
//   };

//   // Game loop
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext("2d");

//     const update = () => {
//       // Move snakes
//       const moveSnake = (snake, dir, setSnake, setScore) => {
//         const head = { x: snake[0].x + dir.x, y: snake[0].y + dir.y };

//         // Wall collision
//         if (head.x < 0 || head.x >= canvasSize || head.y < 0 || head.y >= canvasSize) {
//           alert(`Game Over! Score: ${score1} | ${score2}`);
//           window.location.reload();
//           return snake;
//         }

//         // Self collision
//         if (snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
//           alert(`Game Over! Score: ${score1} | ${score2}`);
//           window.location.reload();
//           return snake;
//         }

//         const newSnake = [head, ...snake];
//         if (head.x === food.x && head.y === food.y) {
//           setScore((prev) => prev + 1);
//           getRandomFood();
//         } else {
//           newSnake.pop();
//         }
//         setSnake(newSnake);
//       };

//       moveSnake(snake1, dir1, setSnake1, setScore1);
//       moveSnake(snake2, dir2, setSnake2, setScore2);

//       // Draw
//       ctx.fillStyle = "#222";
//       ctx.fillRect(0, 0, canvasSize, canvasSize);

//       // Draw food
//       ctx.fillStyle = "red";
//       ctx.fillRect(food.x, food.y, grid, grid);

//       // Draw snake1
//       ctx.fillStyle = "lime";
//       snake1.forEach((seg) => ctx.fillRect(seg.x, seg.y, grid, grid));

//       // Draw snake2
//       ctx.fillStyle = "cyan";
//       snake2.forEach((seg) => ctx.fillRect(seg.x, seg.y, grid, grid));

//       ctx.fillStyle = "white";
//       ctx.fillText(`Player1: ${score1} | Player2: ${score2}`, 10, 10);
//     };

//     const interval = setInterval(update, 150);
//     return () => clearInterval(interval);
//   }, [snake1, snake2, dir1, dir2, food, score1, score2]);

//   // Key events
//   useEffect(() => {
//     const handleKey = (e) => {
//       // Player 1 arrows
//       if (e.key === "ArrowUp" && dir1.y === 0) setDir1({ x: 0, y: -grid });
//       if (e.key === "ArrowDown" && dir1.y === 0) setDir1({ x: 0, y: grid });
//       if (e.key === "ArrowLeft" && dir1.x === 0) setDir1({ x: -grid, y: 0 });
//       if (e.key === "ArrowRight" && dir1.x === 0) setDir1({ x: grid, y: 0 });

//       // Player 2 WASD
//       if (e.key === "w" && dir2.y === 0) setDir2({ x: 0, y: -grid });
//       if (e.key === "s" && dir2.y === 0) setDir2({ x: 0, y: grid });
//       if (e.key === "a" && dir2.x === 0) setDir2({ x: -grid, y: 0 });
//       if (e.key === "d" && dir2.x === 0) setDir2({ x: grid, y: 0 });
//     };
//     window.addEventListener("keydown", handleKey);
//     return () => window.removeEventListener("keydown", handleKey);
//   }, [dir1, dir2]);

//   return (
//     <div className="flex flex-col items-center mt-4">
//       <canvas ref={canvasRef} width={canvasSize} height={canvasSize} style={{border:"2px solid white"}} />
//       <p className="mt-2 text-white">
//         Player 1: Arrow Keys | Player 2: W A S D
//       </p>
//       <p className="text-white">Score: {score1} | {score2}</p>
//     </div>
//   );
// };

// export default SnakeGame;
