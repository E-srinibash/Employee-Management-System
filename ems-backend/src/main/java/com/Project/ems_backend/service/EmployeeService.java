package com.Project.ems_backend.service;

import com.Project.ems_backend.dto.EmployeeDto;

import java.util.List;

public interface EmployeeService {
    EmployeeDto createEmployee (EmployeeDto employeeDto);
    EmployeeDto getEmployeeById (Long employeeId);
    List<EmployeeDto> getAllEmployees();
    EmployeeDto updateEmployee(Long employeeId,EmployeeDto employeeDto);
    void deleteEmployee(Long employeeId);
}
