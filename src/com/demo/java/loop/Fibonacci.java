package com.demo.java.loop;

public class Fibonacci {
    public static void main(String[] args) {
        int a = 0, b = 1, c=0;
        for (int i = 1; i <= 10; i++) {
            System.out.println(c);
            a = b;
            b = c;
            c = a + b;
        }
    }
}
