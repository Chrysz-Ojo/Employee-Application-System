package com.ibk.employeemanagementsystem;

import com.ibk.employeemanagementsystem.model.Employee;
import com.ibk.employeemanagementsystem.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EmployeeManagementSystemApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(EmployeeManagementSystemApplication.class, args);
    }

    @Autowired
    private EmployeeRepository employeeRepository;
    @Override
    public void run(String... args) throws Exception {
//        Employee employee = new Employee();
//        employee.setFirstName("Linda");
//        employee.setLastName("Okolo");
//        employee.setEmailId("linda@gmail.com");
//        employeeRepository.save(employee);
//
//
//        Employee employee1 = new Employee();
//        employee1.setFirstName("Joel");
//        employee1.setLastName("Abi");
//        employee1.setEmailId("joel@gmail.com");
//        employeeRepository.save(employee1);

    }
}
