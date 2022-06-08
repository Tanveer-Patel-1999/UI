package com.demo.java.loop;

public class Swap {
    public static void main(String[] args) {
        int a = 2;
        int b = 3;
        int temp;
        System.out.println("before swapping");
        System.out.println(a);
        System.out.println(b);
        temp = a;
        a = b;
        b = temp;
        System.out.println("After swapping");
        System.out.println(a);
        System.out.println(b);

        //without using third variable
        a=a+b;
        b=a-b;
        a=a-b;
        System.out.println(a);
        System.out.println(b);


        //using bitwise
        a=a^b;
        b=a^b;
        a=a^b;
        System.out.println(a);
        System.out.println(b);
    }

}
