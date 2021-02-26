// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
function solution(new_id) {

  var answer = (new_id||"").toLowerCase().replace(/[^a-z0-9\-_\.]/g, "").replace(/\.{2,}/g, ".")
  .replace(/^\.|\.$/g, "").replace(/^$/, "a").slice(0, 15).replace(/\.$/g, "")

  switch(answer.length) {
    case 1:
      answer = answer[0] + answer[0] + answer[0]
      break
    case 2:
      answer = answer[0] + answer[1] + answer[1]
      break
    default:
    //pass

  }

  return answer;
}
