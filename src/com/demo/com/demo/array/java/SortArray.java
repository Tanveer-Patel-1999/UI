package com.demo.com.demo.array.java;

import java.util.Arrays;

public class SortArray {
    public static void main(String[] args) {
        int a[] = {4,6,2,34};
        System.out.println("before sorting");
        System.out.println(Arrays.toString(a));
        System.out.println();

        Arrays.sort(a);
        System.out.println("After Sorting");
        System.out.println(Arrays.toString(a));
    }
}
