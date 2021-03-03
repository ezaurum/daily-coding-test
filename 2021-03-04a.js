// https://programmers.co.kr/learn/courses/30/lessons/12904#

function check2(s, center, length) {    
    // const isEven =  (length - center - 1) < center ? (length - center - 1) % 2 === 0 : center % 2 === 0
    let a = 1    
    let i  
    for (i=0;  center - i >= 0 && center + 1 + i < length; i++) {
           if ( s[center - i] !== s[center + 1 + i]  ) {
              break
           }
       }
    if (i * 2 > a) {
        a = i * 2
    }
    for (i=0; center - i >= 0 && center + i < length; i++) {
           if ( s[center - i] !== s[center + i]  ) {
               break
           }
       }
    if (i * 2 - 1 > a) {
        a = i * 2 - 1
    }
    return a    
}

function solution(s)
{
    const l = s.length
    switch (l) {
        case 0:
            return 0
        case 1:
            return 1
        case 2:
            return s[0] === s[1] ? 2:1
        case 3:
            return s[0] === s[2] ? 3:1
    }
    
    const mm = l-1
    let p = 1
    let answer = 1;        
    for (let i = 1; i < mm ; i ++) {
        p = check2(s, i, l)
        if ( p > answer) {
            answer = p
        }
    }   
    
    return answer;
}
