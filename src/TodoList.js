import React from 'react';


export class TodoList extends React.Component{
  constructor(props){
      super(props);
  }

  listar(props){
    const list = this.props.items;
    return list.map(item =>{
      return(
        <tr key={item.id.toString()}>
          <td>{item.text}</td>
          <td>{item.id}</td>
          {/*<td>{item.priority}</td>
          <td>{item.dueDate.toString()} </td>*/}
        </tr>
      )
    });
  }

  render(){
    return (

      <div>
        <table>
          <thead>
            <tr>
              <th>Text</th>
              <th>Id</th>
              {/*
              <th>Priority</th>
              <th>dueDate</th>
              */}
            </tr>
          </thead>
          <tbody>
            {this.listar()}
          </tbody>
        </table>
      </div>
    )
  }

}
