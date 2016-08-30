import React, { Component } from 'react';
import DevTools from 'mobx-react-devtools';
import { TodosListComponent } from './todos/todos-list.component';

class App extends Component {
  render() {
    return (
        <div>
          <TodosListComponent/>
          <DevTools />
        </div>
    );
  }
}

export default App;
