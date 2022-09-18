package ir.saeed.backend.service;

import ir.saeed.backend.entity.Employee;
import ir.saeed.backend.exception.EntityNotFoundException;
import ir.saeed.backend.repository.EmployeeRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/***
 * @author Saeed Safaeian
 */

@Service
@RequiredArgsConstructor
public class EmployeeService {

    private final EmployeeRepository employeeRepository;

    public Employee create(Employee entity) {
        return employeeRepository.save(entity);
    }

    public List<Employee> getAll() {
        return employeeRepository.findAll();
    }

    public Employee getById(Long id) {
        Optional<Employee> res = employeeRepository.findById(id);
        if (res.isPresent())
            return res.get();
        else
            throw new EntityNotFoundException("Employee with id " + id.toString() + " not found.");
    }

    public Employee update(Employee entity){
        this.getById(entity.getId());

        return employeeRepository.save(entity);
    }

    public String delete(Long id) {
        this.getById(id);

        employeeRepository.deleteById(id);
        return "Entity with Id " + id.toString() + " successfully deleted.";
    }

}
