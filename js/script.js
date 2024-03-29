
const wrapper = document.getElementById("wrapper");
let predictGender = () => {
    let name = document.getElementById("name").value;
    let error = document.getElementById("error");

    const url = `https://api.genderize.io?name=${name}`;

    wrapper.innerHTML = "";
    error.innerHTML = "";

    if(name.length > 0 && /^[A-Za-z]+$/.test(name)){
        fetch(url)
        .then((response) => response.json())
        .then((data) => {
            let div = document.createElement("div");
            div.setAttribute("id", "info");
            div.innerHTML = `<h2 id="result-name">${data.name}</h2><img src="" id="gender-icon"/> <h1 id="gender">${data.gender}</h1><h4 id="prob">Probability: ${data.probability}</h4>`;
            wrapper.append(div);
            if (data.gender == "female") {
                div.classList.add("female");
                document.getElementById("gender-icon").setAttribute("src", "female.svg");
            } else{
                div.classList.add("male");
                document.getElementById("gender-icon").setAttribute("src", "male.svg");
            }
        });
        document.getElementById("name").value = "";
    } else {
      error.innerHTML = "Enter a valid name with no spaces";
    }
  };
  
  document.getElementById("submit").addEventListener("click", predictGender);
  window.addEventListener("load", predictGender);