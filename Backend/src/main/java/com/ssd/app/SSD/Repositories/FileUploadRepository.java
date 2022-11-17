package com.ssd.app.SSD.Repositories;

import com.ssd.app.SSD.Model.FileUpload;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface FileUploadRepository extends MongoRepository<FileUpload, String> {
}
