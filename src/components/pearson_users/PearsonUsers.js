import React, {Component} from "react";
import HttpClient from "../../services/util/HttpClient";
import User from "../user/User";
import NoUser from "../common/NoUser";
import Loader from "../common/Loader"
import {COMPONENT_CONSTANTS} from "../../constants/Component_Constants";
import "./PearsonUsers.css"
export class PearsonUsers extends Component {
    state = {
        isLoading: false,
        users: [
            {
                id: 4,
                first_name: "Eve",
                last_name: "Holt",
                avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
            },
            {
                id: 5,
                first_name: "Charles",
                last_name: "Morris",
                avatar:"https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
            },
            {
                id: 6,
                first_name: "Tracey",
                last_name: "Ramos",
                avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
            }
        ]

    };


    /**

     * Component mounting is completed fetch user list here

     */

    componentDidMount() {
        this.getUserList();
    }


    /**

     * Fetch user list data and update state

     */

    getUserList = () => {
        const url = COMPONENT_CONSTANTS.user_request_url;

        HttpClient.get(url).then((response) => {
            let allUsers = [...this.state.users, ...response.data.data];
            let filteredUsers = this.filterUniqueUsers(allUsers);

            this.setState({users: filteredUsers});
        }, (err) => {
            console.log(err);
        });

    };


    /**
     * Creates unique user list based on user id
     */

    filterUniqueUsers = (users) => {
        let newUsers = [];
        let findValue;

        users.forEach(user => {
            findValue = newUsers.find(u => {
                return user.id === u.id;
            });

            if (!findValue) newUsers.push(user);
        });

        return newUsers;
    };


    /**
     * deletes a user from user list
     */

    deleteUser = (index) => {
        let users = [...this.state.users];
        users.splice(index, 1);

        this.setState({
            users
        });
    };


    /**
     * get user list jsx
     */

    makeUserList = () => {
        let usersData = null;
        const {users, isLoading} = this.state;

        if (!isLoading) {
            usersData =<NoUser />;
        }

        if (users.length) {
            usersData = users.map((user, index) => {
                return (
                          <User key = {user.id} user = {user} deleteUser = {() => this.deleteUser(index)}></User>
                        );
            }
            );
        }

        return usersData;
        };


    /**
     * Renders the component view
     */

    render() {
        const {isLoading} =
        this.state;
        return (
            <div className = "pearson-users" >
                <h1> Pearson User Management </h1>
                <div className = "users-container" >
                {this.makeUserList()}
                </div>
                <Loader loading = {isLoading} ></Loader>
            </div>
        );
    }
}