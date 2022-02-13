package com.example.novopay.util;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@RequestMapping       //used to map web requests to spring controller methods.
@Controller           //used to auto detect classes through the classpath scanning.
public class CharacterChecker {

    @CrossOrigin       //Enables CORS(Cross Origin Resource Sharing)
    @GetMapping(value = "getCharacterCount/{argument}")          //To handle the HTTP GET request matched with the URI.
    @ResponseBody      //Binds the method return value to web response body.
    public int[] getCharCount(@PathVariable String argument){      //used to handle template variables in the request URI mapping.
        int len = argument.length();
        int[] freq = new int[257];
        for(int i=0;i<len;i++)
        {
            char ch = argument.charAt(i);
            if(ch == ' ')
                continue;
            freq[(int)ch]++;
        }
        return freq;
    }
}
