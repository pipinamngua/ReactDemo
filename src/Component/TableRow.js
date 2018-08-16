import React from 'react';

export default class TableRow extends React.Component {

	constructor(props) {
		super(props);
	}

  edit = () =>{
    this.props.editFunc();
    this.props.changeEditUserStatus()
  }
  deleteButtonClick = (idUser) => {
      this.props.deleteButtonClick(idUser);
      console.log(idUser);
  }
	render() {
		return (
			<tr>
              <td>{this.props.stt}</td>
              <td>{this.props.name}</td>
              <td>{this.props.tel}</td>
              <td>{this.props.permission}</td>
              <td>
                <div className="btn-group">
                  <div className="btn btn-warning sua"><i className="fa fa-edit" onClick={() => this.edit()}>Sua</i></div>
                  <div className="btn btn-danger xoa"><i className="fa fa-delete" onClick={(idUser) => this.deleteButtonClick(this.props.id)}>Xoa</i></div>
                </div>
              </td>
            </tr>
		);
	}
}
