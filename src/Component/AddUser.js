import React from 'react';

export default class AddUser extends React.Component {

    constructor(props)
    {
        super(props);
        this.state = {
            name:"",
            tel:"",
            permisson:""
        }
    }

    isChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name] :value
        });
    }
    hienThiForm = () => {
        if (this.props.hienThiForm === true) {
            return (
                <div className="col">
                    <div className="card text-left">
                    
                          <div className="card border-primary mb-3">
                            <div className="card-header" align="center">Them moi</div>
                            <div className="form-group">
                              <label>Ho va ten<input type="text" name="name" onChange={(event) => this.isChange(event)}/></label>
                            </div>
                            <div className="form-group">
                              <label>So dien thoai<input type="text" name="tel" onChange={(event) => this.isChange(event)}/></label>
                            </div>
                            <div className="form-group">
                              <label>Quyen
                                <select name="permisson
                                " onChange={(event) => this.isChange(event)}>
                                  <option value="admin" checked>Admin</option>
                                  <option value="moderator">Moderator</option>
                                  <option value="normal">Normal</option>
                                </select>
                              </label>
                            </div>
                            <div className="form-group">
                              <input type="submit" defaultValue="Submit" className="btn btn-primary" width="100%" onClick={(name, tel, permisson) => this.props.add(this.state.name, this.state.tel, this.state.permisson)}/>
                            </div>
                          </div>
                    
                    </div>
                </div>
            )
        }
    }
    render() {
        
        return (
            <div>
                {this.hienThiForm()}
            </div>
        );
    }
}
