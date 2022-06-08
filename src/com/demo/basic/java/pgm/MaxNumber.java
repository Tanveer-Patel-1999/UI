package com.demo.basic.java.pgm;

public class MaxNumber {
    public static void main(String[] args) {
        int a = 5;
        int b = 6;
        int c = 7;

        if(a > b)
        {
            System.out.println("a is greater number=="+a);
        }
        else
        {
            System.out.println("b is greater number=="+b);
        }
        if(a > b && a > c)
        {
            System.out.println("a is greater number=="+a);
        }
        else if(b > a && b > c)
        {
            System.out.println("b is greater number=="+b);
        }
        else
        {
            System.out.println("c is greater number=="+c);
        }


    }
}
