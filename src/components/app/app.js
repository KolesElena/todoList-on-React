import React, {Component} from "react";
import AppHeader from "../app-header";
import TodoList from "../todo-list";
import SearchPanel from "../search-panel";
import ItemStatusFilter from "../item-status-filter";
import "./app.css";
import ItemAddForm  from "../item-add-form";

export default class App extends Component  {

  maxId=100;

    createTodoItem=(label) => {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
    };


  state= {
      todoData:
          [
          this.createTodoItem("Drink Coffee"),
          this.createTodoItem("Build Awesome App"),
          this.createTodoItem("Have a lunch")
      ],
      term: "",
      filter: "all"
  };


    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    filter (items, filter) {
        if (filter === 'all') {
            return items;
        } else if (filter === 'active') {
            return items.filter((item) => (!item.done));
        } else if (filter === 'done') {
            return items.filter((item) => item.done);
        }
    };

  toggleProperty(arr, id, propName) {
        const idx=arr.findIndex((el)=>el.id===id);
        const oldItem=arr[idx];
        const newItem={...oldItem, [propName]: !oldItem[propName]};
        const newArray=[...arr.slice(0,idx), newItem, ...arr.slice(idx+1)];
        return {
            arr: newArray
        };

    };



    ToggleDone =(id) => {
        this.setState(({todoData}) => {
        const idx=todoData.findIndex((el)=>el.id===id);
        const oldItem=todoData[idx];
        const newItem={...oldItem, done: !oldItem.done};
        const newA=[...todoData.slice(0,idx), newItem, ...todoData.slice(idx+1)];
        return {
            todoData: newA
        };
        });
    };

    ToggleImportant =(id) => {
        this.setState(({todoData}) => {
            const idx=todoData.findIndex((el)=>el.id===id);
            const oldItem=todoData[idx];
            const newItem={...oldItem, important: !oldItem.important};
            const newA=[...todoData.slice(0,idx), newItem, ...todoData.slice(idx+1)];
            return {
                todoData: newA
            };
        });
    };



  deleteItem =(id) => {
    this.setState(({todoData}) => {
      const idx=todoData.findIndex((el)=>el.id===id);
      const newArray=[...todoData.slice(0,idx), ...todoData.slice(idx+1)];
      return {
        todoData: newArray
      }
    });
  };


  addItem =(text) => {
   const newItem=this.createTodoItem(text);

    this.setState(({todoData}) => {
      const newArr=[...todoData, newItem];
      return {
        todoData: newArr
      }
      });
  };

  onSearchFunc= (term)=> {
    this.setState({term});
};

    onFilterChange= (filter)=> {
        this.setState({filter});
    };

  render() {
const {todoData, term, filter}=this.state;
      const visibleItems = this.search(this.filter(todoData, filter), term);
      const countDone=todoData.filter((el)=>el.done).length;
      const countTodo=todoData.length-countDone;
    return (
     <div className="todo-app">
        <AppHeader done={countDone} toDo={countTodo}/>
        <div className="d-flex top-panel"><SearchPanel onSearchFunc={this.onSearchFunc}/>
            <ItemStatusFilter filter={filter} onFilterChange={this.onFilterChange}/></div>
        <TodoList todoData={visibleItems}
  onDeleted={this.deleteItem}
        onToggleImportant={this.ToggleImportant}
        onToggleDone={this.ToggleDone}/>
  <ItemAddForm  onAdded={this.addItem}/>
      </div>
    );
  }
};
