package com.accesodatos.service;

import java.util.List;

import com.accesodatos.dtos.employee.EmployeeRequestDto;
import com.accesodatos.dtos.employee.EmployeeResponseDto;
import com.accesodatos.entity.Employee;

public interface EmployeeService {
	public List<EmployeeResponseDto> getAll();
	
	public EmployeeResponseDto getById(Long id);
	
	public List<EmployeeResponseDto> getByName(String name);
	
	public EmployeeResponseDto createEmployee(EmployeeRequestDto employeeRequest);
	
	public EmployeeResponseDto updateEmployee(Long id , EmployeeRequestDto employeeRequestDto);
	
	public void deleteEmployee(Long id);
}
