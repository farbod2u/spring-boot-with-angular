package ir.saeed.backend.repository;

import ir.saeed.backend.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/***
 * @author SSaeed Safaeian
 */

@Repository
public interface EmployeeRepository extends JpaRepository<Employee, Long> {
}
