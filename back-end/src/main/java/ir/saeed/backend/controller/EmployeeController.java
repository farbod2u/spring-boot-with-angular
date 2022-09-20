package ir.saeed.backend.controller;

import ir.saeed.backend.entity.Employee;
import ir.saeed.backend.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.swing.text.html.parser.Entity;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/***
 * @author Saeed Safaeian
 */
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/employees")
//@CrossOrigin(origins = "*")
public class EmployeeController {

    private final EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<Employee> create(@RequestBody Employee entity) {
        return new ResponseEntity<>(employeeService.create(entity), HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Employee>> getAll() {
        return new ResponseEntity<>(employeeService.getAll(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Employee> getById(@PathVariable("id") Long id) {
        return new ResponseEntity<>(employeeService.getById(id), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<Employee> update(@RequestBody Employee entity) {
        return new ResponseEntity<>(employeeService.update(entity), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Map<String, Boolean>> delete(@PathVariable("id") Long id) {
        Map<String, Boolean> res = new HashMap<>();
        res.put(employeeService.delete(id), Boolean.TRUE);
        return new ResponseEntity<>(res, HttpStatus.OK);
    }

}
