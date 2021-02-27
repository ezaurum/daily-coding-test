// https://programmers.co.kr/learn/courses/30/lessons/42840
function solution(answers) {
    let answer = [];    
    const scores = [{score:0, index:1}, {score:0, index:2}, {score:0, index:3}]
    const a1 = [1,2,3,4,5]
    const a2 = [2,1,2,3,2,4,2,5]
    const a3 = [3, 3,1, 1,2, 2,4, 4,5,5]
    const l = answers ? answers.length : 0
    let a
    let index1 = 1
    let index2 = 1
    let index3 = 1
    for (let i = 0; i < l; i++) {
      a = answers[i]    
      //1
      index1 = a1[i % a1.length]
      if (a === index1) {
          scores[0].score = scores[0].score + 1
      }  

      //2
      index2 = a2[i % a2.length]
      if (a === index2) {
          scores[1].score = scores[1].score + 1
      }  

      //3
      index3 = a3[i % a3.length]
      if (a === index3) {
          scores[2].score = scores[2].score + 1
      } 
    }

    scores.sort((a, b)=>{
        if (a.score < b.score) {
        return 1
    }
    if (a.score > b.score) {
        return -1
    }
      if (a.index > b.index) {
        return 1
      }
     if (a.index < b.index) {
        return -1
      }
    return 0
    })

   const high = scores[0].score   
   return scores.filter(s => s.score >= high).map(s=>s.index)

}
