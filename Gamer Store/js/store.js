function buy(price, discount) {
    //alert("Producto comprado por: $" + price);
    // !MODAL
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    // !SPAN
    var span = document.getElementsByClassName("close")[0];
    span.onclick = function () {
        modal.style.display = "none";
    };
    // !WINDOW
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

function addFavorite() {
    alert("Producto añadido a favoritos");
}

function addList() {
    alert("Producto añadido a la lista");
}

function btnStore() {
    if (validate()) {
        showData();
    }
}

function validate() {
    return [
        document.getElementById("modal_txt_1"),
        document.getElementById("modal_txt_2"),
        document.getElementById("modal_txt_3"),
        document.getElementById("modal_txt_4"),
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
    alert(
        "La compra se realizó con éxito :D"
    );
}
