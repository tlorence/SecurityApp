package com.ssd.app.SSD.Controller;

import com.ssd.app.SSD.Model.User;
import com.ssd.app.SSD.Repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/user")
public class UserController {

    @Autowired
    UserRepository userRepository;

    @PostMapping("/add")
    public String addUser(@RequestBody User user){
        userRepository.save(user);
        return "User Saved Successfully";
    }
}
