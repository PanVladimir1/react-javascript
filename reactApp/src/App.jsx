import { Layout } from "./components/layout/component.jsx";
import { restaurants } from '../materials/mock.js';
import { RestaurantTabs } from "./components/restaurantTabs/component.jsx";
import { UserContext } from "./components/contexts/user.jsx";
import { useState } from "react";

export const App = () => {
    const [user, setUser] = useState();
    return <UserContext.Provider value={{user, setUser}}>
                <Layout>
                    <RestaurantTabs restaurants={restaurants} />
                </Layout>
            </UserContext.Provider> 
};