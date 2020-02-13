import { buildTable } from "./table";

const form = document.querySelector('#new-car');

const listener = () => {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const inputBrand = event.currentTarget.querySelector('#brand').value;
    const inputModel = event.currentTarget.querySelector('#model').value;
    const inputOwner = event.currentTarget.querySelector('#owner').value;
    const inputPlate = event.currentTarget.querySelector('#plate').value;

    const input = { brand: inputBrand, model: inputModel, owner: inputOwner, plate: inputPlate };

    fetch(`https://wagon-garage-api.herokuapp.com/batch357/cars`, {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input)
    })
      .then(response => response.json())
      .then(() => {
        buildTable();
      });
  });
};

export { listener };
