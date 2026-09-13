export default function bot({ history, memory }) {
const round = history.length;
let Move = "C";

if(round === 0){
  Move ="C";
  return [Move,{ opponentDefectionCount: 0, myDefectionCount: 0, oppForgiveCount: 0 }]
}
  if (!memory) {
    memory = { opponentDefectionCount: 0, myDefectionCount: 0, oppForgiveCount: 0 };
  }

  const oppLastMove = history.at(-1).opponent;
  const myLastMove = history.at(-1).you;

  // update the last move
  if(oppLastMove==="D"){
    memory.opponentDefectionCount++;
  }

  // update forgive rate
  if(myLastMove === "D"){
    memory.myDefectionCount++;
    if(oppLastMove === "C"){
      memory.oppForgiveCount++;
    }
  }

  const defectionRate = memory.opponentDefectionCount / round;
  const forgiveRate = memory.myDefectionCount > 2 ? (memory.oppForgiveCount / memory.myDefectionCount) : 0;

  // attack after farming if the op is always putting c without attacking 
  if(round >= 119&& defectionRate < 0.8){
    Move = "D";
    return [Move, memory];
  }

  // attacking the overly forgiving bots 
if (round > 50 && memory.myDefectionCount >= 5 && forgiveRate > 0.60){
  Move = "D";
  return [Move,memory];
}

  // attacking the always attacking bots
  if(defectionRate >= 0.75){
    Move = "D";
    return [Move, memory];
  }

  // strategy for the tit tat bots
  if(oppLastMove === "D"){
    Move =  "D";
    return [Move, memory];
  }

  return [Move,memory];
  
}
