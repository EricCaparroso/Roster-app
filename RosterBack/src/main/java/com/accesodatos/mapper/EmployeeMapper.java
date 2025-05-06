package com.accesodatos.mapper;

import org.mapstruct.Mapper;

import com.accesodatos.dtos.employee.EmployeeRequestDto;
import com.accesodatos.dtos.employee.EmployeeResponseDto;
import com.accesodatos.entity.Employee;

@Mapper(componentModel = "spring")
public interface EmployeeMapper {
	public Employee toEmployee(EmployeeRequestDto employeeRequest);
	public EmployeeResponseDto toResponse(Employee employee);
}
