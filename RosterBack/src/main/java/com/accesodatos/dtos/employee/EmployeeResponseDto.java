package com.accesodatos.dtos.employee;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EmployeeResponseDto {
	private Long id;
	private String fullname;
	private String nif;
	private String nss;
	private String birth;
	private String indate;
	private String category;
	private String phone;
	private String activity;
	private String location;
	private String zone;
	private boolean model145;
}
