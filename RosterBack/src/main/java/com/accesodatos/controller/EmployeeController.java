package com.accesodatos.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.accesodatos.dtos.api.ApiResponseDto;
import com.accesodatos.dtos.employee.EmployeeRequestDto;
import com.accesodatos.dtos.employee.EmployeeResponseDto;
import com.accesodatos.service.EmployeeServiceImpl;

import jakarta.validation.Valid;
import jakarta.websocket.server.PathParam;

@RestController
@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:3000") 
public class EmployeeController {
	@Autowired EmployeeServiceImpl service;

	@GetMapping("/employees")
	public ResponseEntity<ApiResponseDto<List<EmployeeResponseDto>>> getAll() {
		List<EmployeeResponseDto> employees = service.getAll();
		ApiResponseDto<List<EmployeeResponseDto>> response = new ApiResponseDto<>("Employees fetched succesfully",
				HttpStatus.OK.value(), employees);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	@GetMapping("employee/{id}")
	public ResponseEntity<ApiResponseDto<EmployeeResponseDto>>getBYId(@PathVariable Long id){
		EmployeeResponseDto employee = service.getById(id);
		ApiResponseDto<EmployeeResponseDto> response = new ApiResponseDto<>("Employee fetched successfully",HttpStatus.OK.value(), employee);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	@GetMapping("employees/by-name")
	public ResponseEntity<ApiResponseDto<List<EmployeeResponseDto>>>getBYId(@PathParam(value ="name") String name){
		List<EmployeeResponseDto> employee = service.getByName(name);
		ApiResponseDto<List<EmployeeResponseDto>> response = new ApiResponseDto<>("Employee fetched successfully",HttpStatus.OK.value(), employee);
		return new ResponseEntity<>(response, HttpStatus.OK);
	}
	@PostMapping("employees")
	public ResponseEntity<ApiResponseDto<EmployeeResponseDto>>create(@Valid @RequestBody EmployeeRequestDto employeeRequestDto){
		EmployeeResponseDto employee = service.createEmployee(employeeRequestDto);
		  ApiResponseDto<EmployeeResponseDto> response = new ApiResponseDto<>("Employee created successfully",
		            HttpStatus.CREATED.value(), employee);
		    return new ResponseEntity<>(response, HttpStatus.CREATED);
	}
	@PutMapping("employees/{id}")
	public ResponseEntity<ApiResponseDto<EmployeeResponseDto>>update(@PathVariable Long id, @Valid @RequestBody EmployeeRequestDto employeeRequestDto){
		EmployeeResponseDto employee = service.updateEmployee(id, employeeRequestDto);
		  ApiResponseDto<EmployeeResponseDto> response = new ApiResponseDto<>("Employee updated successfully",
	                HttpStatus.OK.value(), employee);
		  return new ResponseEntity<>(response, HttpStatus.OK);
	      
	}
	@DeleteMapping("employee/{id}")
	public ResponseEntity<Void> delete(@PathVariable Long id){
		service.deleteEmployee(id);
		 return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
}
