import { Layout } from "./components/layout/component.jsx";
import { restaurants } from '../materials/mock.js';
import { Restaurants } from "./components/restaurants/component.jsx";

export const App = () => {
    return <Layout>
        <Restaurants restaurants={restaurants} />
    </Layout>
};