import {observable, computed} from 'mobx';
import {Fb} from '../../firebase/firebase-store';
import {map, toJS} from 'mobx';

class Todos {
  @observable todos = map({});

  constructor() {
    Fb.todos.on('value', (snapshot) => {
      this.todos = snapshot.val();
    });
  }

  @computed get json() {
    return toJS(this.todos);
  }

  add = (name) => {
    const id = Fb.todos.push().key;
    this.update(id, name);
  };

  update = (id, name) => {
    Fb.todos.update({[id]: {name}})
  };

  del = (id) => {
    Fb.todos.child(id).remove();
  };
}

const todos = new Todos();
export {todos};