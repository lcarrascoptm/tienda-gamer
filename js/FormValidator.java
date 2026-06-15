package js;

import java.util.regex.Pattern;

/**
 * Utility class for validating form fields.
 * This example validates a typical contact form with name, email and message.
 */
public class FormValidator {

    private static final Pattern EMAIL_PATTERN = Pattern.compile(
            "^[A-Z0-9._%+-]+@[A-Z0-9.-]+\\.[A-Z]{2,6}$",
            Pattern.CASE_INSENSITIVE);

    /**
     * Validates that the name is not null/empty and has at least 2 characters.
     */
    public static boolean isValidName(String name) {
        return name != null && name.trim().length() >= 2;
    }

    /**
     * Validates that the email matches a basic email regex pattern.
     */
    public static boolean isValidEmail(String email) {
        return email != null && EMAIL_PATTERN.matcher(email).matches();
    }

    /**
     * Validates that the message is not null/empty and at least 10 characters.
     */
    public static boolean isValidMessage(String message) {
        return message != null && message.trim().length() >= 10;
    }

    /**
     * Example usage of the validator.
     */
    public static void main(String[] args) {
        String name = "Luis";
        String email = "luis@example.com";
        String message = "Hola, quiero más información sobre los productos.";

        System.out.println("Name valid: " + isValidName(name));
        System.out.println("Email valid: " + isValidEmail(email));
        System.out.println("Message valid: " + isValidMessage(message));
    }
}
