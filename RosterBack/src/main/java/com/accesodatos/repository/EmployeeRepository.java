package com.accesodatos.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.accesodatos.entity.Employee;
@Repository
public interface EmployeeRepository extends JpaRepository<Employee,Long> {
	List<Employee> findByFullnameContainingIgnoreCase(String fullname);
}
