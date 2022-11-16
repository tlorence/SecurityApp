package com.ssd.app.SSD.Controller;

import com.ssd.app.SSD.Model.Message;
import com.ssd.app.SSD.Repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/message")
public class MessageController {

    @Autowired
    MessageRepository messageRepository;

    @PostMapping("/send")
    public String messageSend(@RequestBody Message message){

        messageRepository.save(message);
        return "Hello SSD";
    }




}
