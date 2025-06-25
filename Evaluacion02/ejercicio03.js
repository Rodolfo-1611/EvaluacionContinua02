$(document).ready(() => {

    $("#button-form").submit((event) => {
        const textoBoton = $("#button-input").val();

        $("#button-container").append(`
            <button class="btn btn-secondary btn-sm m-2">${textoBoton}</button>
        `);

        $("#button-input").val("");
        
        event.preventDefault();
    });
});
