// https://programmers.co.kr/learn/courses/30/lessons/72410?language=javascript
function solution(new_id) {

  var answer = (new_id||"").toLowerCase();
  answer = answer.replace(/[^a-z0-9\-_\.]/g, "", -1)
  answer = answer.replace(/\.{2,}/g, ".", -1)
  answer = answer.replace(/^\.|\.$/g, "", -1)
  if (!answer || answer.length < 1) {
    answer = "a"
  }

  if (answer.length > 15) {
    answer = answer.substring(0, 15)
  }

  answer = answer.replace(/\.$/g, "", -1)

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
