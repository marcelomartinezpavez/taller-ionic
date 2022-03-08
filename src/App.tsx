import { IonApp, IonRouterOutlet, IonSplitPane } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Page from './pages/Page';
import Login from './pages/Login';

import Inicio from './pages/Inicio';
import Clientes from './pages/Clientes';
import Proveedores from './pages/Proveedores';
import Vehiculos from './pages/Vehiculos';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Repuestos from "./pages/Repuestos";
import OrdenTrabajo from "./pages/OrdenTrabajo";

const App: React.FC = () => {

  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId="main">
          <Menu />
          <IonRouterOutlet id="main">
            <Route path="/" exact={true}>
              <Redirect to="/page/Inicio" />
            </Route>

            <Route path="/page/Login" exact={true}>
              <Login />
            </Route>

            <Route path="/page/Inicio" exact={true}>
              <Inicio />
            </Route>
            <Route path="/page/Clientes" exact={true}>
              <Clientes />
            </Route>
            <Route path="/page/Vehiculos" exact={true}>
              <Vehiculos />
            </Route>
            <Route path="/page/OrdenTrabajo" exact={true}>
              <OrdenTrabajo />
            </Route>
            <Route path="/page/Repuestos" exact={true}>
              <Repuestos />
            </Route>
            <Route path="/page/Proveedores" exact={true}>
              <Proveedores />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
