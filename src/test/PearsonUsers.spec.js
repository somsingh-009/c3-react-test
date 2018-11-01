import React from "react";
import { shallow } from "enzyme";
import { PearsonUsers } from "../components/pearson_users/PearsonUsers";
import User from "../components/user/User";



describe("PearsonUsers component tests", () => {

    let component;
    let users = [
        {
            id: 4,
            first_name: "Eve",
            last_name: "Holt",
            avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
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
    ];



    beforeAll(() => {
        component = shallow(<PearsonUsers/>);
    });



    afterAll(() => {
        component = null;
    });



    it("renders a h1", () => {
        const h1 = component.find("h1");
        expect(h1.text()).toEqual("Pearson User Management");
    });


    it("Render PearsonUser Component", () => {
        expect(component.find(".pearson-users")).toHaveLength(1);
    });


    it("Render users list", ()=> {
        const userCount = users.length;
        expect(component.find(User)).toHaveLength(userCount);
    });


    it("Remove duplicate users from userlist",()=>{
        const uniqueUserCount = users.length;
        const duplicateUsers = [...users, ...users];

        users = component.instance().filterUniqueUsers(duplicateUsers);
        expect(component.find(User)).toHaveLength(uniqueUserCount);
    });

    it("Delete user from user list",()=>{
        const userCount = users.length;
        component.instance().deleteUser(0);
        expect(component.find(User)).toHaveLength(userCount-1);
    });

});

