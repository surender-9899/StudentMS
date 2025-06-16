package com.StudentManagmentSystem.studentms.repository;

import com.StudentManagmentSystem.studentms.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
