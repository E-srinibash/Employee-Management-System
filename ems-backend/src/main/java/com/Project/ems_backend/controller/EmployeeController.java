package com.Project.ems_backend.controller;

import com.Project.ems_backend.dto.EmployeeDto;
import com.Project.ems_backend.entity.Employee;
import com.Project.ems_backend.service.EmployeeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@AllArgsConstructor
@RestController
@RequestMapping("/api/employees")
public class EmployeeController {

    private EmployeeService employeeService;

    //Build Add Employee RestAPI
    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee( @RequestBody EmployeeDto employeeDto){
        EmployeeDto savedEmployee = employeeService.createEmployee(employeeDto);
        return new ResponseEntity<>(savedEmployee, HttpStatus.CREATED);
    }

    //Build Get Employee REST API
    @GetMapping("{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable("id") Long employeeId){
        EmployeeDto employeeDto = employeeService.getEmployeeById(employeeId);
        return ResponseEntity.ok(employeeDto);
    }

    //Build Get All Employees REST API
    @GetMapping
    public ResponseEntity<List<EmployeeDto>> getAllEmployees() {
        List<EmployeeDto> employees = employeeService.getAllEmployees();
        return ResponseEntity.ok(employees);
    }

    // Build Update Employee REST API
    @PutMapping("{id}")
    public ResponseEntity<EmployeeDto> updateEmployee(
            @PathVariable("id") Long employeeId,
            @RequestBody EmployeeDto updatedEmployee
    ){
     EmployeeDto employeeDto = employeeService.updateEmployee(employeeId, updatedEmployee);
     return ResponseEntity.ok(employeeDto);
    }

    //Build deleteEmployee REST API

    @DeleteMapping("{id}")
    public ResponseEntity<String> deleteEmployee(
            @PathVariable("id") Long employeeId
            ){
        employeeService.deleteEmployee(employeeId);
        return ResponseEntity.ok("Employee deleted Successfully");
    }
}