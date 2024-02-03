import { Layout } from "./components/layout/component.jsx";
import { restaurants } from '../materials/mock.js';
import { RestaurantTabs } from "./components/restaurantTabs/component.jsx";

export const App = () => {
    return <Layout>
        <RestaurantTabs restaurants={restaurants} />
    </Layout>
};