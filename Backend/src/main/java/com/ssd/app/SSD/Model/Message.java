package com.ssd.app.SSD.Model;

import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "Messages")
public class Message {
    private String message;
}
