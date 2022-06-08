package com.demo.java.loop;

public class Factorial {
    public static void main(String[] args) {
        int number = 5,fact=1;
        while (number>0)
        {
            fact = fact*number;
            number = number-1;
        }
        System.out.println("Factorial:"+fact);
    }
}
