package ir.saeed.backend.config;

import ir.saeed.backend.entity.Employee;
import ir.saeed.backend.repository.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/***
 * @author Saeed safaeian
 */
@Configuration
public class InitConfig {

    @Autowired
    private EmployeeRepository employeeRepository;

    @Bean
    void insertSampleData(){
        employeeRepository.save(new Employee(null, "Saeed", "Safaeian", "ss@gmail.com"));
        employeeRepository.save(new Employee(null, "Ali", "Safaeian", "as@gmail.com"));
    }

//    @Bean
//    public WebMvcConfigurer corsConfiguerer(){
//        return new WebMvcConfigurer() {
//            @Override
//            public void addCorsMappings(CorsRegistry registry) {
//                //WebMvcConfigurer.super.addCorsMappings(registry);
//                registry.addMapping("/**")
//                        .allowedOrigins("*");
//            }
//        };
//    }

}
