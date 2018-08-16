import React from 'react';

export default class EditUser extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            id: this.props.userEditObject.id,
            name:this.props.userEditObject.name,
            tel:this.props.userEditObject.tel,
            permisson:this.props.userEditObject.permisson,
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        const info = {};
        this.setState({
            [name]: value
        });
    }

    saveButton = () => {
        var info = {};
        info.id = this.state.id;
        info.name = this.state.name;
        info.tel = this.state.tel;
        info.permisson = this.state.permisson;
        this.props.getUserEditInfo(info);
        this.props.changeEditUserStatus();
    }
    hienThiForm = () => {
        return (
            <div className="col-12">
                <div className="card text-left">
                      <div className="card border-primary bg-secondary mb-3 mt-2">
                        <div className="card-header" align="center">Edit User</div>
                        <div className="form-group">
                          <label>Ho va ten<input type="text" name="name" defaultValue={this.props.userEditObject.name} onChange={(event) => this.isChange(event)}/></label>
                        </div>
                        <div className="form-group">
                          <label>So dien thoai<input type="text" name="tel" defaultValue={this.props.userEditObject.tel} onChange={(event) => this.isChange(event)}/></label>
                        </div>
                        <div className="form-group">
                          <label>Quyen
                            <select name="permisson" defaultValue={this.props.userEditObject.permisson} onChange={(event) => this.isChange(event)}>
                              <option value="admin" checked>Admin</option>
                              <option value="moderator">Moderator</option>
                              <option value="normal">Normal</option>
                            </select>
                          </label>
                        </div>
                        <div className="form-group">
                          <input type="submit" defaultValue="Luu thong tin" className="btn btn-danger" width="100%" onClick={() => this.saveButton()}/>
                        </div>
                      </div>
                </div>
            </div>
        )
        
    }
    render() {
        
        return (
            <div>
                {this.hienThiForm()}
            </div>
        );
    }
}
