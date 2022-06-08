package com.demo.com.demo.array.java;

import java.util.Arrays;

public class RetriewArray {
    public static void main(String[] args) {
        int a[] = {1,2,3,4,5};
        //first using for
        for (int i=0;i<a.length;i++)
        {
            System.out.print(a[i]+" ");
        }

        //using for each
        for (int i : a)
        {
            System.out.println(i);
        }

        //using to String
        System.out.println(Arrays.toString(a));

    }
}
