
# Knight's Travails – Shortest Knight Path on Chessboard
This project solves the Knights Travails problem from The Odin Project using Breadth-First Search (BFS).

📝 **Description**

This program calculates the most efficient path a knight can take on a chessboard from a starting square to a target square.
It uses Breadth-First Search (BFS) to guarantee that the path found requires the fewest possible moves.
The program outputs a list of all the squares the knight stops on along the way.


♟️ **How It Works**


**1.** 🗺️ **Chessboard Representation**

The board is 8×8, with coordinates [x, y] where 0 <= x < 8 and 0 <= y < 8.
Both the starting and ending positions are represented as arrays: [x, y].


**2. 🚀 Knight's Possible Moves**

A knight can move in 8 different ways:
<pre> 
  [2,1], [1,2], [-1,2], [-2,1], [-2,-1], [-1,-2], [1,-2], [2,-1]
</pre>
Each move is applied to the current position to calculate the next possible square.


**3. 📦 BFS Queue**

The queue stores elements as [position, path]
position = the knight’s current square [x, y]
path = array of all squares visited so far
Example ( starting position, path) :
<pre>
  [[0,0], [[0,0]]] 
</pre>


**4. ✅ Visited Squares**

A Set keeps track of visited squares to avoid loops.
Each position is converted to a string:
<pre>
  visited.add([x, y].toString());
</pre>
This ensures each square is explored only once.


**5. 🔄 Exploring Moves**

For each square in the queue, all 8 knight moves are checked.
A move is added to the queue only if:
It stays inside the board (0 <= x < 8, 0 <= y < 8)
It has not been visited yet
The path is updated as:

<pre>
  [...path, [newX, newY]]
</pre>


**6. 🎯 Checking the Target**

If the current square matches the target:
<pre>
if (x === end[0] && y === end[1])
</pre>
The program prints the path and stops, because BFS guarantees this is the shortest path.


**7. 🔚 Return Value**

Returns the full path as an array of squares, e.g.:
<pre>
[[0,0],[1,2],[3,3]]
</pre>
Returns null if no path exists (theoretically impossible on an 8×8 board)


**💡 Example Usage**
<pre>
  knightMoves([0,0], [3,3]);
</pre>
Output:
<img width="272" height="203" alt="image" src="https://github.com/user-attachments/assets/372cf9b7-b16b-42b0-8ac9-8f133e81c5b3" />

