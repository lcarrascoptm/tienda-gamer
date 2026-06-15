package com.tiendagamer.sections;

/**
 * Represents the Payment section of the web page.
 * The render method returns the HTML markup that can be injected
 * into the index.html. Styling is applied via the CSS classes
 * defined in estilos.css (e.g., .section-header, .section-content).
 */
public class PagoSection {
    private final String title = "Pago";
    private final String description = "Selecciona tu método de pago y completa la información requerida.";

    public String render() {
        return "<section id=\"pago\">" +
               "    <h2 class=\"section-header\">" + title + "</h2>" +
               "    <p class=\"section-content\">" + description + "</p>" +
               "</section>";
    }
}
