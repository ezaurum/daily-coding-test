// https://programmers.co.kr/learn/courses/30/lessons/1845

function solution(nums) {
    const n2 = nums.length / 2
    const nn = Object.keys(nums.reduce((a, c)=>{
        a[c] = 1
        return a
    }, {})).length
    return n2 > nn ? nn : n2
}
