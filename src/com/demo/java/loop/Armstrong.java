package com.demo.java.loop;

public class Armstrong {
    public static void main(String[] args) {
        int number = 153;
        int sum =0;
        int temp;
        temp = number;
        int digit;
        while (number>0) {
            digit = number % 10;
            number = number / 10;
            sum = sum + (digit * digit * digit);
        }
            if(temp==sum)
            {
                System.out.println("Armstrong:"+temp);
            }
            else {
                System.out.println("not Armstrong:"+temp);
            }
        }
    }

