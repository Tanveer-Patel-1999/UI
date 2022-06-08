package com.demo.basic.java.pgm;
public class FindLastNumber {
    public static void main(String[] args) {
        int number = 2314;
        int lastNumber1 ;
        int lastNumber2 ;
        int lastNumber3 ;

        //only one last number
        lastNumber1 = number%10;
        System.out.println("lastNumber="+lastNumber1);

        //last two number
        lastNumber2 = number%100;
        System.out.println("lastNumber="+lastNumber2);

        //last three number
        lastNumber3 = number%1000;
        System.out.println("lastNumber="+lastNumber3);
    }
}
