package com.demo.java.loop;

public class ProductOfGivenNumber {
    public static void main(String[] args) {
        int number = 1234,pro=1,digit;
        while(number>0)
        {
            digit = number%10;
            pro = pro * digit;
            number = number/10;
        }
        System.out.println("product="+pro);
    }
}

