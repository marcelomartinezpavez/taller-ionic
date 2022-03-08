import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import FormCliente from '../components/FormCliente';
import './Page.css';
import TableCliente from "../components/TableCliente";

const Clientes: React.FC = () => {

    const { name } = useParams<{ name: string;}>();
    const { component } = useParams<{ component:string;}>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Clientes</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <TableCliente />
                <FormCliente />
            </IonContent>
        </IonPage>
);
};

export default Clientes;
