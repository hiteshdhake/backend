package com.example.demo;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class DemoController {

    @RequestMapping
    public String hello() {
        return "Hello this is my first Sprint boot application which runs on 8085";
    }
    
}
