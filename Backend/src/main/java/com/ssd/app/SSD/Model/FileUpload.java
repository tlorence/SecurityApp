package com.ssd.app.SSD.Model;


import lombok.Getter;
import lombok.Setter;
import org.springframework.data.mongodb.core.mapping.Document;

@Getter
@Setter
@Document(collection = "Files")
public class FileUpload {
    private String file;
}
