package com.demo.java.loop;

public class NumberIsPalindrome {public static void main(String[] args) {
    int number = 121,digit,rev=0,temp;
    temp=number;
    System.out.println("original_number="+number);
    while (number!=0)
    {
        digit = number%10;
        rev= (rev*10)+digit;
        number = number/10;
    }
    System.out.println("reverse_number="+rev);
    if(rev==temp)
    {
        System.out.println("number is palindrome:"+rev);
    }
    else {
        System.out.println("number is not a palindrome:"+rev);
    }
}

}
