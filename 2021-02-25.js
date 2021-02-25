//https://programmers.co.kr/learn/courses/30/lessons/42576

function solution(participant, completion) {
    const m = completion.reduce( (acc, cur) => {
        acc[cur] = (acc[cur] | 0) + 1
        return acc
    }, {});
    
    if (!m) {
        return ""
    }
    
    let answer = '';
    let answerCount = 0;
    
    const l = participant.length | 0;
    for (let i = 0; i < l; i++ ) {
       answer = participant[i];
       answerCount = m[answer] | 0;
        
        if (answerCount > 0) {
            m[answer] = answerCount -1;
            continue;
        }
        return answer;    
    }
    
     return answer;
}
