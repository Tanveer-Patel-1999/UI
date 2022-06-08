package com.demo.basic.java.pgm;

public class Palindrome {
    public static void main(String[] args) {
        int year = 2025;
        if(year % 400==0)
        {
            System.out.println("Leap year:"+ year);
        }
        else if (year%4==0 && year%100!=0)
        {
            System.out.println("Leap year:"+ year);
        }
        else
        {
            System.out.println(" not Leap year:"+ year);
        }
    }
}
