import React, { Component } from 'react';
import './../App.css';
import Header from './Header';
import Search from './Search';
import TableData from './TableData';
import AddUser from './AddUser';
import EditUser from './EditUser';
import DataUser from './dulieu';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            hienThiTrangThaiForm: false,
            data: [],
            dataSearch: '',
            editUserStatus: false,
            userEditObject: {}
        }
    }

    componentWillMount() {
        if (localStorage.getItem('userData') === null) {
            localStorage.setItem('userData', JSON.stringify(DataUser));
        } else {
            this.setState({
                data: JSON.parse(localStorage.getItem('userData'))
            });
        }
    }
    thayDoi = () => (
        this.setState({
            hienThiTrangThaiForm: !this.state.hienThiTrangThaiForm
        })
    )

    getSearchText = (dl) => {
        this.setState({
            dataSearch: dl
        })
    }
    getDataUserAdd = (name, tel, permisson) => {
        let data = {};
        data.id = "";
        data.name = name;
        data.tel = tel;
        data.permisson = permisson;
        var items = this.state.data;
        items.push(data);
        this.setState({
            data: items
        });
        localStorage.setItem('userData', JSON.stringify(this.state.data));
    }
    editUser = (user) => {
        this.setState({
            userEditObject: user
        });
    }

    changeEditUserStatus = () => {
        //let currentComponent = this;
        this.setState({
            editUserStatus: !this.state.editUserStatus    
        });   
    }
    getUserEditInfoApp = (info) => {
        var temp = this.state.data;
        temp.forEach((value, key) => {
            if (value.id == info.id) {
                value.name = info.name;
                value.tel = info.tel;
                value.permisson = info.permisson;
            }
        });

        this.setState({
            data: temp
        });

        localStorage.setItem('userData', JSON.stringify(this.state.data));

    }
    deleteUser = (idUser) => {
        var tempData = this.state.data;
        tempData = tempData.filter(item => item.id != idUser);
        this.setState({
            data: tempData
        });     

        localStorage.setItem('userData', JSON.stringify(this.state.data));
    }
  render() {

    var mang = [];
    if (this.state.dataSearch != '') {  
        this.state.data.map((item) => {
            if (item.name.indexOf(this.state.dataSearch) != -1) {
                mang.push(item);
            }
        })
    }
    return (
    <div>
      <Header />
      <div className="searchForm">
        <div className="row">
            <Search
            getSearchText={(dl) => this.getSearchText(dl)} 
            ketNoi={() => this.thayDoi()} hienThiForm={this.state.hienThiTrangThaiForm}
            editUserStatus={this.state.editUserStatus}
            userEditObject={this.state.userEditObject}
            getUserEditInfoApp={(info) => this.getUserEditInfoApp(info)}
            changeEditUserStatus={this.changeEditUserStatus}
            />
            <TableData data={mang.length > 0 ? mang: this.state.data} editUser={(user) => this.editUser(user)} changeEditUserStatus={() => this.changeEditUserStatus()} deleteUser={(idUser) => this.deleteUser(idUser)}/>
            <AddUser hienThiForm={this.state.hienThiTrangThaiForm} add={(name, tel, permisson) => this.getDataUserAdd(name, tel, permisson)}/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;
