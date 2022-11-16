package com.ssd.app.SSD.Repositories;

import com.ssd.app.SSD.Model.Message;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MessageRepository extends MongoRepository<Message, String> {
}
