// https://programmers.co.kr/learn/courses/30/lessons/12901

function solution(a, b) {
    var answer = '';
    const d = ['FRI','SAT', 'SUN','MON','TUE','WED','THU']
    const days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30]
    
    let date = b - 1
    for (let m = 0; m < a -1; m++ ) {
        date += days[m]
    }
    
    return d[date % 7];
}
