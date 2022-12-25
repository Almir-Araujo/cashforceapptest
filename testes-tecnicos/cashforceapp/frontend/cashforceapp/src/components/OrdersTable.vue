<template>
  <div>
    <h2>Notas Fiscais</h2>
    <p>Visualize as notas fiscais que você tem</p>
    <table>
      <thead>
        <tr>
          <th>Nota Fiscal</th>
          <th>Sacado</th>
          <th>Cedente</th>
          <th>Emissão</th>
          <th>Valor</th>
          <th>Status</th>
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
          <td>{{ checkStatus(Number(order.orderStatusBuyer)) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
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
          default: 'Status desconhecido';
            break;
        }
    },

    }
};

</script>

<style scoped>
/* .item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  width: 32px;
  height: 32px;

  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.4rem 0 1rem calc(var(--section-gap) / 2);
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
} */
</style>
