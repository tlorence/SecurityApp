package com.ssd.app.SSD.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "Users")
public class User {

    @Id
    private String email;
    private String password;
    private String userType;

}
