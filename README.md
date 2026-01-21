
# Knight's Travails – Shortest Knight Path on Chessboard
This project solves the Knights Travails problem from The Odin Project using Breadth-First Search (BFS).

📝 **Description**

This program calculates the most efficient path a knight can take on a chessboard from a starting square to a target square.
It uses Breadth-First Search (BFS) to guarantee that the path found requires the fewest possible moves.
The program outputs a list of all the squares the knight stops on along the way.


♟️** How It Works**

🗺️ **Chessboard Representation**

The board is 8×8, with coordinates [x, y] where 0 <= x < 8 and 0 <= y < 8.

Both the starting and ending positions are represented as arrays: [x, y].

🚀 Knight's Possible Moves

A knight can move in 8 different ways:
<pre> 
  [2,1], [1,2], [-1,2], [-2,1], [-2,-1], [-1,-2], [1,-2], [2,-1]
</pre>

Each move is applied to the current position to calculate the next possible square.
