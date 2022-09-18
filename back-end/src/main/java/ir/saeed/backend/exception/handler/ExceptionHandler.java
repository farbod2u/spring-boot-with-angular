package ir.saeed.backend.exception.handler;

import ir.saeed.backend.exception.EntityNotFoundException;
import ir.saeed.backend.exception.model.ExceptionModel;
import lombok.extern.log4j.Log4j2;
import org.apache.logging.log4j.Level;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.NoHandlerFoundException;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.sql.Timestamp;
import java.time.LocalDateTime;

/***
 * @author Saeed Safaeian
 */
@ControllerAdvice
@Log4j2
public class ExceptionHandler extends ResponseEntityExceptionHandler {

    @Override
    protected ResponseEntity<Object> handleNoHandlerFoundException(NoHandlerFoundException ex, HttpHeaders headers, HttpStatus status, WebRequest request) {
        log.log(Level.ERROR,ex);

        HttpStatus stat = HttpStatus.INTERNAL_SERVER_ERROR;
        ExceptionModel exception = new ExceptionModel(ex.getMessage(), Timestamp.valueOf(LocalDateTime.now()), stat);

        return new ResponseEntity<>(exception, stat);
    }

    @org.springframework.web.bind.annotation.ExceptionHandler(value = {EntityNotFoundException.class})
    public ResponseEntity<Object> handleRequestException(RuntimeException ex) {
        log.log(Level.ERROR, ex);

        HttpStatus status = HttpStatus.NOT_FOUND;
        ExceptionModel exception = new ExceptionModel(ex.getMessage(), Timestamp.valueOf(LocalDateTime.now()), status);

        return new ResponseEntity<>(exception, status);
    }
}
