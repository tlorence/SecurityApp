package com.ssd.app.SSD.Controller;

import com.mongodb.annotations.Beta;
import com.ssd.app.SSD.Model.Message;
import com.ssd.app.SSD.Repositories.MessageRepository;
import com.ssd.app.SSD.service.StringEncryptorAES;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/message")
public class MessageController {

    @Autowired
    MessageRepository messageRepository;

    @Autowired
    StringEncryptorAES stringEncryptorAES;

    @PostMapping("/send")
    public String messageSend(@RequestBody Message message) throws Exception {

        if(!message.getMessage().isEmpty()) {
            message.setMessage(stringEncryptorAES.encrypt(message.getMessage()));
            messageRepository.save(message);
        }
        return "Hello SSD";
    }




}
