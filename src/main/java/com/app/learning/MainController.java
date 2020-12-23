package com.app.learning;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {

    @RequestMapping
    public String echo() {
        return "Hello this is my first Sprint boot application which runs on 8085";
    }
    
}
