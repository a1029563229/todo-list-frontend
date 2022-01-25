<script setup lang="ts">
import { DeleteOutlined, CheckOutlined, CheckCircleFilled, ToTopOutlined } from '@ant-design/icons-vue';
import { Input } from "ant-design-vue";
import { ref } from "vue";

// 创建一个引用变量，用于绑定 Todo List 数据
const todoList = ref<{
  title: string,
  is_completed: boolean,
  is_top: boolean
}[]>([]);
// 删除、完成、置顶的逻辑都与 todoList 放在同一个地方，这样对于逻辑关注点就更加聚焦了
const onDeleteItem = (index: number) => {
  todoList.value.splice(index, 1);
}
const onCompleteItem = (index: number) => {
  todoList.value[index].is_completed = true;
  // 重新排序，将已经完成的项目往后排列
  const todoItem = todoList.value.splice(index, 1);
  todoList.value.push(todoItem[0]);
}
const onTopItem = (index: number) => {
  todoList.value[index].is_top = true;
  // 重新排序，将已经完成的项目往前排列
  const todoItem = todoList.value.splice(index, 1);
  todoList.value.unshift(todoItem[0]);
}

// 创建一个引用变量，用于绑定输入框
const todoText = ref('');
const onTodoInputEnter = () => {
  // 将 todo item 添加到 todoList 中
  todoList.value.unshift({
    title: todoText.value,
    is_completed: false,
    is_top: false
  });
  // 添加到 todoList 后，清空 todoText 的值
  todoText.value = '';
}
</script>

<template>
  <section class="todo-list-container">
    <section class="todo-wrapper">
      <!-- v-model:value 语法是 vue3 的新特性，代表组件内部进行双向绑定是值 key 是 value -->
      <Input v-model:value="todoText" @keyup.enter="onTodoInputEnter" class="todo-input" placeholder="请输入待办项" />
      <section class="todo-list">
        <section v-for="(item, index) in todoList" 
          class="todo-item" 
          :class="{'todo-completed': item.is_completed, 'todo-top': item.is_top}">
          <span>{{item.title}}</span>
          <div class="operator-list">
            <CheckCircleFilled v-show="item.is_completed" />
            <DeleteOutlined v-show="!item.is_completed" @click="onDeleteItem(index)" />
            <ToTopOutlined v-show="!item.is_completed" @click="onTopItem(index)" />
            <CheckOutlined v-show="!item.is_completed" @click="onCompleteItem(index)" />
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
  min-height: 100vh;
  box-sizing: border-box;
  padding-top: 100px;
  background: linear-gradient(rgba(219, 77, 109, .02) 60%, rgba(93, 190, 129, .05));
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

      .todo-top {
        background: #F05E1C;
        color: #fff;
        border-radius: 5px;
      }

      .todo-completed {
        color: rgba(199, 199, 199, 1);
        border-bottom-color: rgba(199, 199, 199, .4);
        transition: all .5s;
        background: #fff;
      }

      .todo-item:hover {
        box-shadow: 0 0 5px 8px rgb(255 177 27 / 20%);
        border-bottom: 2px solid transparent;
      }

      .todo-completed:hover {
        box-shadow: none;
        border-bottom-color: rgba(199, 199, 199, .4);
      }
    }
  }
}
</style>
