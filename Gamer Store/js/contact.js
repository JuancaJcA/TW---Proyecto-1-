function btnContact() {
    if (validate()) {
        showData();
    }
}

function validate() {
    return [
        document.getElementById("txt_1"),
        document.getElementById("txt_2"),
        document.getElementById("txt_3"),
        document.getElementById("txt_4"),
    ].every(validateForm);
}

function validateForm(form) {
    if (form.value.trim() === "") {
        alert("Ingrese un valor >:[");
        form.focus();
        return false;
    }
    return true;
}

function showData() {
    var txt_1 = document.getElementById("txt_1").value;
    var txt_2 = document.getElementById("txt_2").value;
    alert(
        "Los datos de " + txt_1 + " " + txt_2 + " se guardaron correctamente"
    );
}
