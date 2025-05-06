package com.accesodatos.dtos.employee;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class EmployeeRequestDto {
	private Long id;
	private String fullname;
	private String nif;
	private String nss;
	private String birth;
	private String indatee;
	private String phone;
	private String category;
	private String activity;
	private String location;
	private String zone;
	private boolean model145;
	public String getUpdate() {
		// TODO Auto-generated method stub
		return null;
	}

}
