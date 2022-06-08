package com.demo.java.loop;

public class PrintAtoZ {
    public static void main(String[] args) {

        //Ascending
        for(char i='A';i<='Z';i++)
        {
            System.out.println(i);
        }

        //descending
        for(char i='z';i>='a';i--)
        {
            System.out.println(i);
        }
    }
}
