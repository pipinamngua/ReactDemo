import React from 'react';
import TableRow from './TableRow';
export default class TableData extends React.Component {
	
	constructor(props) {
		super(props);
	}

	editFunc = (user) => {
		this.props.editUser(user);
	}
	deleteButtonClick = (idUser) => {
		this.props.deleteUser(idUser);
	}
	render() {
		var mang = this.props.data;
		let element = [];
		let product = mang.map((value,key) => {
			return <TableRow
					key={key}
					id={value.id}
					stt={key}
					name={value.name}
					tel={value.tel}
					permission={value.permisson}
					editFunc={(user) => this.editFunc(value)}
					changeEditUserStatus = {this.props.changeEditUserStatus}
					deleteButtonClick={(idUser) => this.deleteButtonClick(idUser)}
					/>
		})
		console.log(mang);
		return (
			<div className="col">
        .<table className="table table-striped table-inverse table-hover">
          <thead>
            <tr>
              <th>STT</th>
              <th>Ho va ten</th>
              <th>So dien thoai</th>
              <th>Quyen</th>
              <th>Hanh dong</th>
            </tr>
          </thead>
          <tbody>
          		{product}
            
          </tbody>
        </table>
      </div>
		);
	}
}
