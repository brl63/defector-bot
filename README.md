# Defector Bot

**Bot Hunter** is a bot for the Defector event in Hack Club.

The logic is simple:

Start with **C**, and while the game is running, it saves 3 things in memory:
* `opponentDefectionCount`
* `myDefectionCount`
* `oppForgiveCount`

It calculates if the hunter did a **D** and the other bot did a **C** right after so that counts as the forgiveness rate

### Rules:
* **End-Game Attack:** When reaching round 120, if the opponent's `defectionRate < 0.8`, it continues the game by attacking (`D`) to win free points.
* **Exploit Forgiving Bots:** After 50 rounds, if the bot notices that `forgiveRate > 0.60`, it attacks all game to win free points.
* **Defend Against Aggressive Bots:** If the opponent is aggressive (`defectionRate >= 0.75`), we attack all game to save life points.
* **Tit-for-Tat:** If the opponent attacked, we attack the round after, which also helps calculate the forgiveness rate and defection rate.

---

**Bot Link:** [Hack Club Defector](https://defector.hackclub.com/bot/f6e55tcatoxq6e5e6ok3)
