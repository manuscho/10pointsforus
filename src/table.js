const carList = document.querySelector('.cars-list');
const form = document.querySelector('#new-car');
import { deleter } from "./delete";

const buildTable = () => {
  fetch(`https://wagon-garage-api.herokuapp.com/batch357/cars`)
    .then(response => response.json())
    .then((data) => {
      form.reset();
      carList.innerHTML = "";
      data.forEach((result) => {
        const car = `<div class="car">
          <div class="car-image">
            <img src="http://loremflickr.com/280/280/${result.brand}" />
          </div>
          <div class="car-info">
            <h4>${result.brand} ${result.model}</h4>
            <p><strong>Owner:</strong> ${result.owner}</p>
            <p><strong>Plate:</strong> ${result.plate}</p>
            <button class="deletebutton btn btn-danger" data-id="${result.id}">DELETE</button>
          </div>
        </div>`;
        carList.insertAdjacentHTML("afterbegin", car);
      });

      deleter();
    });
};
export { buildTable };
