package com.demo.java.loop;

public class ReverseOfGiveNumber {
    public static void main(String[] args) {
        int number = 1234,digit,rev=0;
        System.out.println("original_number="+number);
        while (number!=0)
        {
            digit = number%10;
            rev= (rev*10)+digit;
            number = number/10;
        }
        System.out.println("reverse_number="+rev);
    }
}
