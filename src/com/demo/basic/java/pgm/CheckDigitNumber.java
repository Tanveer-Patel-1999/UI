package com.demo.basic.java.pgm;

public class CheckDigitNumber {
    public static void main(String[] args) {

        int number = 20;
        if(number > 0 && number <10)
        {
            System.out.println("number is single digit:"+number);
        }
        else if(number > 9 && number < 100)
        {
            System.out.println("number is double digit:"+number);
        }
        else if(number > 99 && number < 999)
        {
            System.out.println("number is triple digit:"+number);
        }
        else
        {
            System.out.println("number is more then 3 digit");
        }
    }

}
