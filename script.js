const todoInput = document.getElementById('todoInput');
    const addBtn = document.getElementById('addBtn');
    const todoList = document.getElementById('todoList');
    let todos = [];

    function renderTodos() {
      todoList.innerHTML = '';
      
      if (todos.length === 0) {
        todoList.innerHTML = '<div class="empty-state">Пусто!</div>';
        return;
      }
      
      todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        
        li.innerHTML = `
          <input 
            type="checkbox" 
            class="todo-checkbox" 
            ${todo.completed ? 'checked' : ''}
            onchange="toggleTodo(${index})"
          >
          <span class="todo-text">${todo.text}</span>
          <span class="todo-text">${todo.date}</span>
          <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        `;
        
        todoList.appendChild(li);
      });
      console.log('todo', todos);
      
    }
1970
    function addTodo() {
      const text = todoInput.value.trim();
      let time = new Date().toLocaleTimeString();
      let date = new Date().toLocaleDateString();
      if (text) {
        todos.push({
          text: text,
          completed: false,
          date: date + ' ' + time
        });
        
        todoInput.value = '';
        renderTodos();
      }
    }

    function toggleTodo(index) {
      todos[index].completed = !todos[index].completed;
      renderTodos();
    }

    function deleteTodo(index) {
      todos.splice(index, 1);
      renderTodos();
    }

    addBtn.addEventListener('click', addTodo);
    
    todoInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        addTodo();
      }
    });

    renderTodos();