const btn = document.querySelector("button");

btnClicked = () => {
  console.log("button clicked");
};

const getAllResidents = () =>
  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    const resData = res.data.results[0].residents;
    for (let i = 0; i < res.data.length; i++) {
      axios.get(
        resData[i]
          .then((response) => {
            console.log(response.data.name);
            let newParagraph = createElement("h2");
            newParagraph.textContent = response.data.name;
            document.body.appendChild(newParagraph);
          })
          .catch((err) => console.log(err))
      );
    }
  });

btn.addEventListener("click", btnClicked);
