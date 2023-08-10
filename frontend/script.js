let form = document.getElementById("form");
let ul = document.getElementById("add");
let name = document.getElementById("name");
let email = document.getElementById("exampleEmail");
let phone = document.getElementById("tel");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  axios({
    method: "post",
    url: "http://localhost:5000/",
    data: {
      Name: name.value,
      Email: email.value,
      Phone: phone.value.toString(),
    },
  })
    .then((result) => {
      const Id = result.data.userId;

      let li = document.createElement("li");
      li.textContent = `${name.value} - ${email.value} ${phone.value}`;

      let p = document.createElement("p");
      p.textContent = `${Id}`;
      p.className = "id";
      p.style.display = "none";
      li.append(p);
      let button = document.createElement("button");
      button.textContent = "delete";
      button.className = "btn btn-secondary delete-that";
      li.append(button);
      ul.append(li);

      form.reset();
    })
    .catch((error) => {
      console.log(error);
    });
});

document.addEventListener("DOMContentLoaded", function () {
  axios("http://localhost:5000/")
    .then((res) => {
      const users = res.data;

      users.forEach((user) => {
        const Id = user.id;

        let li = document.createElement("li");
        li.textContent = `${user.Name} - ${user.Email} ${user.Phone_number}`;

        let p = document.createElement("p");
        p.textContent = `${Id}`;
        p.className = "id";
        p.style.display = "none";
        li.append(p);
        let button = document.createElement("button");
        button.textContent = "delete";
        button.className = "btn btn-secondary delete-that";
        li.append(button);
        ul.append(li);
      });
    })
    .catch((err) => console.log(err));
});

ul.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete-that")) {
    let parent = e.target.parentNode;
    parent.remove();
    const id = parent.childNodes[1].textContent;

    axios.delete(`http://localhost:5000/${id}`).then((res) => {
      console.log(res.data);
    });
  }
});
