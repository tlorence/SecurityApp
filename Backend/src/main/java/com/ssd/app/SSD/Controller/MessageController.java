package com.ssd.app.SSD.Controller;

import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/message")
public class MessageController {

    @PostMapping("/send")
    public String approvalGrant(){
        return "Hello SSD";
    }


}
