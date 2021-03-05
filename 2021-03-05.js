// https://programmers.co.kr/learn/courses/30/lessons/12906?language=javascript

function solution(arr, divisor) {
    const r= arr.filter(s=>s%divisor===0).sort((a, b)=>a-b)
    return r.length ? r: [-1]   
}
