const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let data = {
        name,
        email,
    };
    let convertData = JSON.stringify(data);

    localStorage.setItem("lead", convertData);

    let content = document.getElementById("content");

    let carregando = `<p>carregando...</p>`;

    let pronto = `<p>pronto</p>`;

    content.innerHTML = carregando;

    setTimeout(() => {
        content.innerHTML = "Você foi cadastrado !";
    }, 1000);
});
