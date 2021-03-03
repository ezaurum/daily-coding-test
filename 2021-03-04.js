// https://programmers.co.kr/learn/courses/30/lessons/12903

function solution(s) {
    const l = s.length
    if (l % 2 === 0) {
        return s.slice(l/2 -1, l/2 +1) 
    } else {
        return s[( l - 1 ) / 2]
    }    
}
