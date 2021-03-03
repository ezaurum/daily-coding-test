// https://programmers.co.kr/learn/courses/30/lessons/68935

function solution(n) {
    return parseInt(n.toString(3).split("").reduce((acc, cur)=>{ return cur+acc}, ""), 3)   
}
