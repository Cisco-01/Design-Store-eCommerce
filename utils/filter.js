const myFilter = () => {
    var input, filter, container, section, div, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    container = document.getElementById("container");
    section = container.getElementsByTagName("section");
    for (i = 0; i < section.length; i++) {
      // Filtrar servicios
      div = section[i].getElementsByTagName("div")[0];
      txtValue = div.textContent || div.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        section[i].style.display = "";
      } else {
        section[i].style.display = "none";
      }
    }
  };
  export default myFilter;
  