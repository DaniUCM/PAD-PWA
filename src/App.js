import './App.css';

import React from 'react';
import Axios from 'axios';

import Nav from './components/Nav'
import Results from './components/Results'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      request: {
        query: "",
        title: "",
        type:""
      },
      results: []
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    return (
      <>
        <Nav name="User"/>
        <main>
          <form>
            <label htmlFor="query">Busqueda</label>
            <input type="text" id="query" name="query" onChange={this.onChange}></input>
            <div className="btn-group">
              <button type="submit" className="btn-green" value="books" onClick={this.onSubmit}>Libros</button>
              <button type="submit" className="btn-blue" value="all" onClick={this.onSubmit}>Todos</button>
              <button type="submit" className="btn-purple" value="magazines" onClick={this.onSubmit}>Revistas</button>
            </div>
          </form>
          <Results data={this.state.results}/>
        </main>
      </>
    );
  }

  onChange(e) {
    e.preventDefault();
    this.state.request[e.target.name] = e.target.value;
  }

  onSubmit(e) {
    e.preventDefault();

    Axios.get("https://www.googleapis.com/books/v1/volumes?q=" + this.state.request.query + "&maxResults=10&printType=" + e.target.value).then((res) => {
      this.setState({"results": res.data.totalItems > 0 ? res.data.items : []})
    }).catch((e) => {
      console.log(e);
    });
  }
}

export default App;
