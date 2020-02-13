import { buildTable } from "./table";

const deleter = () => {
  const deleteButtons = document.querySelectorAll(".deletebutton");
  deleteButtons.forEach((button) => {

    button.addEventListener("click", (event) => {
      event.preventDefault();

      fetch(`https://wagon-garage-api.herokuapp.com/cars/${button.dataset.id}`, {
        method: 'DELETE',
      }).then(
        buildTable()
      );
    });
  });
};

export { deleter };
