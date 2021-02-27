// https://programmers.co.kr/learn/courses/30/lessons/42577?language=java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean solution(String[] phone_book) {
        for (String pb : phone_book) {
            for (String pb2 : phone_book) {
                if (pb.length() >= pb2.length()) {
                    continue;
                }

                if (pb2.startsWith(pb)) {
                    return false;
                }
            }
        }

        return true;
    }
}
