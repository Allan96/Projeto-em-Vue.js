<template>
 <div>
   <input type="search" v-model="searchTerm" >
  <vue-good-table
      :columns="columns"
      :rows="this.notas"
      :search-options="{ enabled: true, placeholder: 'Filtro', externalQuery: searchTerm, }"
      :pagination-options="{ enabled: true, mode: 'pages', perPageDropdown: [10, 50, 100], position: 'top', nextLabel: 'Próximo', prevLabel: 'Anterior', rowsPerPageLabel: 'Notas por página', ofLabel: 'de', pageLabel: 'páginas', allLabel: 'Tudo',
      }"
      :selectOptions="{enabled: true,}"
      styleClass="vgt-table striped"
      @on-row-click="onRowClick"
       @on-selected-rows-change="selectionChanged"
   >
    <div slot="selected-row-actions">
    <button>Fazer download</button>
  </div>
     <template slot="table-row" slot-scope="props">
      <span v-if="props.column.field == 'before'">
        before
      </span>
      <span v-else-if="props.column.field == 'after'">
        after
      </span>
      <span v-else>
        {{props.formattedRow[props.column.field]}}
      </span>
  </template>
  </vue-good-table>
 </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      notas: [],
        searchTerm: '',
       columns: [
        {
          label: 'Número',
          field: 'numero',
          type: 'number',
        },
        {
          label: 'Status',
          field: 'status',
        },
          {
          label: 'Valor',
          field: 'valor',
        },
          {
          label: 'Varejo',
          field: 'varejo',
        },
          {
          label: 'Fornecedor',
          field: 'fornnome',
        },
      //   {
      //   label: 'After',
      //   field: 'after'
      // },
      ]
    }
  },
   computed:{
   },
  created() {

  // GET /someUrl
  this.$http.get('http://localhost/2020/API-PHP/notas').then(response => {
    this.notas = response.body;
    console.log(response.body);
  }, err => {
    console.log(err);
  });

  },
  methods:{
     onRowClick(params) {
    // params.row - row object 
    // params.pageIndex - index of this row on the current page.
    // params.selected - if selection is enabled this argument 
    // indicates selected or not
    // params.event - click event
    console.log(params.selected);
  }
  }
}
</script>