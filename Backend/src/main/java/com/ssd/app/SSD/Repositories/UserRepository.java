package com.ssd.app.SSD.Repositories;

import com.ssd.app.SSD.Model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository extends MongoRepository<User, String> {
}
