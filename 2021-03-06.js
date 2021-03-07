//https://programmers.co.kr/learn/courses/30/lessons/12915?language=javascript

function solution(strings, n) {
    return strings.sort((a, b)=> a[n] === b[n] ? (a > b ? 1:-1) : (a[n] > b[n] ? 1: -1))
}
