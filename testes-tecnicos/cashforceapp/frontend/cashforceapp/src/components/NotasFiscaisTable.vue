<template>
  <main class="table-container">
    <h2>Notas Fiscais - Página de Tabela</h2>
    <p>Visualize as notas fiscais que você tem</p>
      <table>
        <thead>
          <tr>
            <th>NOTA FISCAL</th>
            <th>SACADO</th>
            <th>CEDENTE</th>
            <th>EMISSÃO</th>
            <th>VALOR</th>
            <th>STATUS</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(order) in orders" :key="order.orderNumber">
            <td>{{ order.nNf }}</td>
            <td>{{ order.sacados.name }}</td>
            <td>{{ order.cedentes.name }}</td>
            <td>{{ moment(order.createdAt) }}</td>
            <td>{{ Number(order.value)
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</td>
            <td>{{ checkStatus(Number(order.orderStatusBuyer)).toLocaleUpperCase() }}</td>
            <td>
              <button class="btn-cedente">Dados do cedente</button>
            </td>
          </tr>
        </tbody>
    </table>
  </main>
</template>

<script>

import api from '../services/api';
import moment from 'moment';

  export default {
    name: "OrdersTable",
    data() {
      return {
        orders: []
      }
    },
    mounted() {
      api.get('/orders').then(response => {
        this.orders = response.data.orders;
      });
    },

    methods: {
      moment(date) {
        return moment(date).format('DD/MM/YYYY');
      },

      checkStatus(statusNumber) {
        switch (statusNumber) {
          case 0:
            return'Pendente de confirmação';
          case 1:
            return 'Pedido confirmado';
          case 2:
            return 'Não reconhece o pedido';
          case 3:
            return 'Mercadoria não recebida';
          case 4:
            return 'Recebida com avaria';
          case 5:
            return 'Devolvida';
          case 6:
            return 'Recebida com devolução parcial';
          case 7:
            return 'Recebida e confirmada';
          default: 
            return 'Status desconhecido';
        }
    },

    }
};

</script>

<style scoped>
  
  .table-container {
    width: 70%;
		float: right;
		text-align: center;
  };

</style>