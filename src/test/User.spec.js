import React from "react";
import {shallow} from "enzyme";
import User from "../components/user/User";


describe("User component test", ()=> {

    let component;
    const user = {
        id: 4,
        first_name: "Eve",
        last_name: "Holt",
        avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
    };


    beforeEach(()=> {
        component = shallow(<User key={user.id} user={user}/>);
    });


    afterEach(() => {
        component = null;
    });


    it("Render user component", ()=> {
        expect(component.find(".user")).toHaveLength(1);
    });


    it("Check component rendered image tag",()=> {
        expect(component.find(".avatar")).toHaveLength(1);
    });


    it("Check component rendered delete button",()=> {
        expect(component.find(".delete")).toHaveLength(1);
    });


    it("Check component rendered user name",()=> {
        const user_name = user.first_name + " " + user.last_name;
        expect(component.find("p").text()).toEqual(user_name);
    });

});