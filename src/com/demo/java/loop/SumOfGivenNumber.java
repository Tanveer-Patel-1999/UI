package com.demo.java.loop;

public class SumOfGivenNumber {
    public static void main(String[] args) {
        int number = 1234,sum =0,digit;
        while(number>0)
        {
            digit = number%10;
            sum = sum + digit;
            number = number/10;
        }
        System.out.println("sum="+sum);
    }
}
