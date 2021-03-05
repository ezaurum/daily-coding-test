//https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr)
{
    var answer = [];
    arr.reduce((acc, cur, idx)=>{
        let l = acc.length
        if (l ===0 || acc[l-1] !== cur) {            
            acc.push(cur)       
        }       
        return acc
    }, answer)
    
    return answer;
}
