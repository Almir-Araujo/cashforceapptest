<template>
    <section class="main-container">
      <SiderFinanciador/>
      <div class="table-container">
          <h2><img class="hands-icon-table" src="/Vector-gray.png">Notas Fiscais</h2>
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
            <tr class="table-row" v-for="(order) in orders" :key="order.orderNumber">
                <td class="table-inside-text">{{ order.nNf }}</td>
                <td class="table-inside-text">{{ order.sacados.name }}</td>
                <td class="table-inside-text">{{ order.cedentes.name }}</td>
                <td class="table-inside-text">{{ moment(order.createdAt) }}</td>
                <td class="table-value-and-status">{{ Number(order.value)
                .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) }}</td>
                <td class="table-value-and-status">{{ checkStatus(Number(order.orderStatusBuyer)).toLocaleUpperCase() }}</td>
                <td>
                  <button class="btn-cedente">Dados do cedente</button>
                </td>
              </tr>
            </tbody>
        </table>
      </div>
    </section>
</template>

<script>

import api from '../services/api';
import moment from 'moment';
import SiderFinanciador from './SiderFinanciador.vue';

  export default {
    name: "OrdersTable",
    data() {
        return {
            orders: []
        };
    },
    mounted() {
        api.get("/orders").then(response => {
            this.orders = response.data.orders;
        });
    },
    methods: {
        moment(date) {
            return moment(date).format("DD/MM/YYYY");
        },
        checkStatus(statusNumber) {
            switch (statusNumber) {
                case 0:
                    return "Pendente de confirmação";
                case 1:
                    return "Pedido confirmado";
                case 2:
                    return "Não reconhece o pedido";
                case 3:
                    return "Mercadoria não recebida";
                case 4:
                    return "Recebida com avaria";
                case 5:
                    return "Devolvida";
                case 6:
                    return "Recebida com devolução parcial";
                case 7:
                    return "Recebida e confirmada";
                default:
                    return "Status desconhecido";
            }
        },
    },
    components: { SiderFinanciador }
};

</script>

<style scoped>

.main-container {
  display: flex;
}

table {
  width: 100%;
  padding-left: 100px;
}

th {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  align-items: center;
  color: #A1A8B8;
  border-radius: 4px;
}

.hands-icon-table {
  padding-right: 10px;
}

.table-inside-text {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
  color: #4D5566;
}

.table-value-and-status {
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 18px;
  color: #00AD8C;
}

.btn-cedente {
  width: 165px;
  height: 32px;
  left: 1004px;
  top: 8px;
  border: 1px solid #CAD3FF;
  border-radius: 24px;
  background-color: white;
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 16px;
  color: #727D94;
}

/* header {
  display: flex;
  align-items: flex-start;
  padding: 16px 46px;
  gap: 10px;
  position: absolute;
  width: 80%;
  height: 64px;
  left: 0px;
  top: 0px;
  background: #FFFFFF;
  border-radius: 12px 0px 0px 0px;
  border-bottom: 100px solid #DFE2EB;
} */

.table-container {
  margin-top: 100px;
  width: 100%;
  margin-left: 40px;
}

</style>