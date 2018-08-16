import React from 'react';
import EditUser from './EditUser';

export default class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			tempValue:'',
			userObj: {}
		}
	}

	hienThi = () => {
		if (this.props.hienThiForm === false) {
			return (<div className="btn btn-block btn-outline-info" onClick={() => this.props.ketNoi()}>Them moi</div>);
		} else {
			return (
				<div className="btn btn-block btn-outline-secondary" onClick={() => this.props.ketNoi()}>Dong lai</div>	
			);
		}
	}

	isChange = (event) => {
		this.setState({'tempValue': event.target.value});
		this.props.getSearchText(this.state.tempValue);
	}
	showEditUser = (status) => {
        if (status === true) {
        	console.log(this.props.userEditObject);
            return <EditUser 
            		userEditObject={this.props.userEditObject}
            		getUserEditInfo={(info) => this.getUserEditInfo(info)}
            		changeEditUserStatus={this.props.changeEditUserStatus}
            		/>
        }
    }

    getUserEditInfo = (info) => {
    	this.setState({
    		userObj: info
    	});
    	this.props.getUserEditInfoApp(info);
    }
	render() {
		return (
			<div className="col-12">
				{this.showEditUser(this.props.editUserStatus)}
		        <div className="form-group">
		          <div className="btn-group">
		            <input type="text" name className="form-control" placeholder="Nhap tu khoa can tim" onChange={(event) => this.isChange(event)}/>
		            <input type="submit" name className="btn btn-info" defaultValue="Tim" onClick={(dl) => this.props.getSearchText(this.state.tempValue)}/>
		          </div>
		        </div>
		        <div class="btn-group">
		        	{this.hienThi()}
		        </div>
		        <hr/>
		    </div>
		);
	}
}
