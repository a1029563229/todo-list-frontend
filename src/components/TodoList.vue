<script setup lang="ts">
import { DeleteOutlined, CheckOutlined, CheckCircleFilled } from '@ant-design/icons-vue';
import { Input } from "ant-design-vue";


</script>

<template>
  <section class="todo-list-container">
    <section class="todo-wrapper">
      <Input class="todo-input" placeholder="请输入待办项" />
      <section class="todo-list">
        <section class="todo-item">
          <span>Todo Item</span>
          <div class="operator-list">
            <DeleteOutlined />
            <CheckOutlined />
          </div>
        </section>
        <section class="todo-item">
          <span>Todo Item</span>
          <div class="operator-list">
            <DeleteOutlined />
            <CheckOutlined />
          </div>
        </section>
        <section class="todo-item todo-checked">
          <span>Todo Item</span>
          <div class="operator-list">
            <CheckCircleFilled />
          </div>
        </section>
      </section>
    </section>
  </section>
</template>

<style scoped lang="less">
.todo-list-container {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  .todo-wrapper {
    width: 60vw;
    .todo-input {
      width: 100%;
      height: 50px;
      font-size: 18px;
      color: #F05E1C;
      border: 2px solid rgba(255, 177, 27, 0.5);
      border-radius: 5px;
    }
    .todo-input::placeholder {
      color: #F05E1C;
      opacity: .4;
    }
    .ant-input:hover, .ant-input:focus {
      border-color: #FFB11B;
      box-shadow: 0 0 0 2px rgb(255 177 27 / 20%);
    }
    .todo-list {
      margin-top: 20px;
      .todo-item {
        box-sizing: border-box;
        padding: 15px 10px;
        cursor: pointer;
        border-bottom: 2px solid rgba(255, 177, 27, 0.3);
        color: #F05E1C;
        margin-bottom: 5px;
        font-size: 16px;
        transition: all .5s;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-right: 10px;
        .operator-list {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          :first-child {
            margin-right: 10px;
          }
        }
      }
      .todo-checked {
        color: rgba(199, 199, 199, 1);
        border-bottom-color: rgba(199, 199, 199, .4);
        transition: all .5s;
      }

      .todo-item:hover {
        box-shadow: 0 0 5px 8px rgb(255 177 27 / 20%);
        border-bottom: 2px solid transparent;
      }
      .todo-checked:hover {
        box-shadow: none;
        border-bottom-color: rgba(199, 199, 199, .4);
      }
    }
  }
}
</style>
