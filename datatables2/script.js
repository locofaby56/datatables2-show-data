
$('#mySelect').on('change', function() {
  table.search($(this).val()).draw();
});


let table = new DataTable('#myTable',{

  /* layout: {
    topStart: function() {
      var btn = document.createElement('button');
      btn.textContent = 'Create';
      btn.classList.add('btn', 'btn-primary');
      btn.id = 'btnCreate';
      btn.addEventListener('click', function() {
        // Aquí puedes definir lo que quieres que haga el botón al hacer clic
        alert('Hola Mundo')
      });
      return btn;
    }
  } */
  

  
layout: {
  
  /* topStart: 'search',
  topEnd: 'pageLength',
  bottomStart: 'info',
  bottomEnd: 'paging', */

  /* topStart: {
    pageLength: {
      menu: [10, 25, 50, 100]
    }
  },

  topEnd:{
    search: {
      placeholder: 'Buscar'
    }
  },

  bottomEnd: {
    paging:{
      numbers:4
    }
  } */

}

});

