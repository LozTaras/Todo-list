import React, {Component} from 'react';

import TodoList from '../todo-list';
import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import ItemStatusFilter from '../item-status-filter';
import ItemAddForm from '../item-add-form';

import './app.css';

class App extends Component {
    maxId = 100;

    state = {
        todoData: [
          this.createTodoItem('Drink Coffee'),
          this.createTodoItem('Build Awesome App'),
          this.createTodoItem('Have a lunch')
        ],
        filter: '',
        status: 'all'
    };

    createTodoItem(label) {
      return {
        label,
        important: false,
        done: false,
        id: this.maxId++
      }
    };

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            return {
              todoData: todoData.slice().filter(item => id !== item.id)
            }
        });
    };

    addItem = (text) => {
      this.setState(({ todoData }) => {
        const newData = [...todoData, this.createTodoItem(text)]; 

        return {
          todoData: newData
        }
      });
    };

    onToggleProperty(arr, id, propName) {
      const newData = arr.slice();

      newData.map((item) => {
        if(item.id === id) {
          item[propName] = !item[propName];
        }

        return item;
      });

      return newData;
    };

    onToggleDone = (id) => {
      this.setState(({ todoData }) => {
        const newData = this.onToggleProperty(todoData, id, 'done');

        return {
          todoData: newData
        }
      });
    };

    onToggleImportant = (id) => {
      this.setState(({ todoData }) => {
        const newData = this.onToggleProperty(todoData, id, 'important');

        return {
          todoData: newData
        }
      });
    };

    onFilter = (val) => {
      this.setState({
        filter: val.toLowerCase()
      });
    };

    onStatus = (status) => {
      this.setState({
        status
      });
    };

    render() {
        const { todoData, filter, status } = this.state,          
          data = todoData.filter(item => ~item.label.toLowerCase().indexOf(filter)),
          doneCount = data.filter((item => item.done)).length,
          moreCount = data.length - doneCount;
        let filteredData;    

        if(status !== 'all') {
          if(status === 'done') {
            filteredData = data.filter(item => item.done);
          } else {
            filteredData = data.filter(item => !item.done);
          }
        }

        return (
            <div className="todo-app">
                <AppHeader 
                  toDo={ moreCount } 
                  done={ doneCount } />
                <div className="top-panel d-flex">
                    <SearchPanel onFilter={ this.onFilter } />
                    <ItemStatusFilter onStatus={ this.onStatus } />            
                </div>
                <TodoList
                    todos={ filteredData || data }
                    onDeleted={ this.deleteItem }
                    onToggleDone={ this.onToggleDone }
                    onToggleImportant={ this.onToggleImportant } />
                <ItemAddForm onAdd={ this.addItem } />
            </div>
        );
    };
}

export default App;
