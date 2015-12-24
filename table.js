(function(){
  var table = document.getElementById('survey');
  var rows = table.querySelectorAll('tr');
  var rowHeadings = table.querySelectorAll('th');
  var cells = table.querySelectorAll('td');

  adjustFormat();

  window.addEventListener('resize', adjustFormat);

  function adjustFormat () {
    var isTable = window.getComputedStyle(table).getPropertyValue('display') === "table";

    switch (isTable) {
      case true:
        turnIntoTable();
        break;
      case false:
        turnIntoList();
        break;
      default:
        throw new Error('You broke it');
    }
  }

  function turnIntoTable (){
    setRole(rows, '');
    setRole(rowHeadings, '');
    setAria(rowHeadings, 'aria-level', '');
    setRole(cells, '');
  }

  function turnIntoList() {
    setRole(rows, 'group');
    setRole(rowHeadings, 'heading');
    setAria(rowHeadings, 'aria-level', '2');
    setRole(cells, 'presentation');
  }

  function setRole(group, role) {
    for (var groupIndex = 0; groupIndex < group.length; groupIndex++) {
      group[groupIndex].setAttribute('role', role);
    }
  }

  function setAria(group, attribute, value) {
    for (var groupIndex = 0; groupIndex < group.length; groupIndex++) {
      group[groupIndex].setAttribute(attribute, value);
    }
  }

  function getArray(node) {
    // Return flattened array
    return Array.prototype.slice.call(node.toString());
  }
})();
