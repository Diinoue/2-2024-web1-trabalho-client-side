document.getElementById("cadastroF");
document.addEventListener("submit", function(event){
    event.preventDefault();

    const formData = {
        name: document.getElementById("nome").value,
        lname: document.getElementById("sobrenome").value,
        email: document.getElementById("email").value,
    };

    console.log("Enviado.", formData);

    fetch("http://api.com/cadastro", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    })

    .then((response) => response.json ())
    .then((data) => {
        console.log("Sucess:", data);
        alert("Cadastro");
    })
    .catch((error) => {
        console.error("Error", error);
        alert("Deu ruim ai chefe");
    });
})