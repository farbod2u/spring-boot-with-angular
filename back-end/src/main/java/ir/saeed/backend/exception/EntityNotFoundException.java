package ir.saeed.backend.exception;

/***
 * @author Saeed Safaeian
 */
public class EntityNotFoundException extends RuntimeException{
    public EntityNotFoundException(String message) {
        super(message);
    }
}
