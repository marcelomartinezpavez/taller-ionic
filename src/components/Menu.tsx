import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import {
  book,
  archiveOutline,
  archiveSharp,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  bookSharp
} from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  component: string;
}

const appPages: AppPage[] = [
  {
    title: 'Inicio',
    url: '/page/Inicio',
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    component: 'InicioContainer'
  },
  {
    title: 'Clientes',
    url: '/page/Clientes',
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlaneSharp,
    component: 'Page'
  },
  {
    title: 'Vehiculos',
    url: '/page/Vehiculos',
    iosIcon: bookSharp,
    mdIcon: book,
    component: 'Page'
  },

  {
    title: 'Ordenes de trabajo',
    url: '/page/OrdenTrabajo',
    iosIcon: bookSharp,
    mdIcon: book,
    component: 'Page'
  },
  {
    title: 'Repuestos',
    url: '/page/Repuestos',
    iosIcon: archiveOutline,
    mdIcon: archiveSharp,
    component: 'Page'
  },
  {
    title: 'Proveedor',
    url: '/page/Proveedores',
    iosIcon: trashOutline,
    mdIcon: trashSharp,
    component: 'Page'
  }
];


//const labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>Inbox</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          {appPages.map((appPage, index) => {

            return (

              <IonMenuToggle key={index} autoHide={false}>
                <IonItem className={location.pathname === appPage.url ? 'selected' : ''} routerLink={appPage.url} routerDirection="none" lines="none" detail={false}>
                  <IonIcon slot="start" ios={appPage.iosIcon} md={appPage.mdIcon} />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>

              </IonMenuToggle>

            );
          })}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
