package com.ssd.app.SSD.Controller;


import com.ssd.app.SSD.Model.FileUpload;
import com.ssd.app.SSD.Model.Message;
import com.ssd.app.SSD.Repositories.FileUploadRepository;
import com.ssd.app.SSD.Repositories.MessageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/file")
public class FileUploadController {
    @Autowired
    FileUploadRepository fileUploadRepository;

    @PostMapping("/upload")
    public String messageSend(@RequestBody FileUpload file){

        fileUploadRepository.save(file);
        return "Uploaded Successfully";
    }

}
