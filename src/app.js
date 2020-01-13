import Vue from 'vue';


document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      tasks: [
        { name: "Shopping", isDone: false, priority: "High Prority" },
        { name: "Run", isDone: false, priority: "High Prority" },
        { name: "Cooking", isDone: true, priority: "High Prority" },
        { name: "Cleaning", isDone: true, priority: "Low Prority" }
      ],
      newTask: { name: "", isDone: false, priority: "" }
    },
    methods: {
      saveNewTask: function() {
        this.tasks.push(this.newTask);
        this.newTask = { name: "", priority: ""} ;
      },
      taskDone: function(index) {
        this.tasks[index].isDone = true;
      }
    }
  });
});
