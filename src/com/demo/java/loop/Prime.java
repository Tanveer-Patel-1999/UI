package com.demo.java.loop;

public class Prime {
    public static void main(String[] args) {
        int number = 3;
        int count = 0;
        for (int i=2;i<=number;i++)
        {
         if (number%i==0)
         {
             count=0;
             break;
         }
        }
        if (count==0)
        {
            System.out.println("prime:"+number);
        }
        else
        {
            System.out.println("not prime:"+number);
        }
    }
}
