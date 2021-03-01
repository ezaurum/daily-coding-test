//https://programmers.co.kr/learn/courses/30/lessons/42748

function solution(array, commands) {
    let answer = [];
    let c, temp
    const l = commands.length
    for (let i = 0; i < l; i++ ) {
        c = commands[i]
        temp = array.slice(c[0]-1, c[1])
        temp.sort((a, b)=>{return a-b})
        answer.push(temp[c[2]-1])        
    }
    
    return answer;
}
