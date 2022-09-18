package ir.saeed.backend.exception.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;

import java.sql.Timestamp;

/***
 * @author Saeed Safaeian
 */
@AllArgsConstructor
@Getter
public class ExceptionModel {

    private String message;

    private Timestamp timestamp;

    private HttpStatus status;
}
