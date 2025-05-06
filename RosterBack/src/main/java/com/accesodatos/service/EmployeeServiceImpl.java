package com.accesodatos.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.accesodatos.dtos.employee.EmployeeRequestDto;
import com.accesodatos.dtos.employee.EmployeeResponseDto;
import com.accesodatos.entity.Employee;
import com.accesodatos.exception.ResourceNotFoundException;
import com.accesodatos.mapper.EmployeeMapper;
import com.accesodatos.repository.EmployeeRepository;

@Service
public class EmployeeServiceImpl implements EmployeeService {
	@Autowired EmployeeRepository repository; 
	@Autowired EmployeeMapper mapper;
	
	private final static String EMPLOYEE_NOT_FOUND = "Employee with id %d not found";
	
	
	public Employee validateAndGet(Long id) {
		return repository.findById(id).orElseThrow(()-> new ResourceNotFoundException(String.format( EMPLOYEE_NOT_FOUND,id)));
	}
	
	@Override
	public List<EmployeeResponseDto> getAll() {
		return repository.findAll().stream().map(mapper::toResponse).toList();  
	}

	@Override
	public EmployeeResponseDto getById(Long id) {
		Employee employee = validateAndGet(id);
		return mapper.toResponse(employee);
	}

	@Override
	public List<EmployeeResponseDto> getByName(String name) {
		
		return repository.findByFullnameContainingIgnoreCase(name).stream().map(mapper::toResponse).toList();  
	}

	@Override
	public EmployeeResponseDto createEmployee(EmployeeRequestDto employeeRequest) {
		Employee employee = mapper.toEmployee(employeeRequest);
		Employee saved = repository.save(employee);
		return mapper.toResponse(saved);		
	}

	@Override
	public EmployeeResponseDto updateEmployee(Long id, EmployeeRequestDto employeeRequestDto) {
		Employee existingEMployee = validateAndGet(id);
		existingEMployee.setFullname(employeeRequestDto.getFullname());
		existingEMployee.setCategory(employeeRequestDto.getCategory());
		existingEMployee.setBirth(employeeRequestDto.getBirth());
		existingEMployee.setActivity(employeeRequestDto.getActivity());
		existingEMployee.setIndate(employeeRequestDto.getIndatee());
		existingEMployee.setLocation(employeeRequestDto.getLocation());
		existingEMployee.setNif(employeeRequestDto.getNif());
		existingEMployee.setNss(employeeRequestDto.getNss());
		existingEMployee.setPhone(employeeRequestDto.getPhone());
		existingEMployee.setZone(employeeRequestDto.getZone());
		//Employee employeeRequest = mapper.toEmployee(employeeRequestDto);
		Employee updated = repository.save(existingEMployee);
		return mapper.toResponse(updated);
	}

	@Override
	public void deleteEmployee(Long id) {
		// TODO Auto-generated method stub
		repository.deleteById(id);
	}


}
