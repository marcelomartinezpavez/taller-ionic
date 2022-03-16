import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import FormCliente from '../components/FormCliente';
import './Page.css';
import TableCliente from "../components/TableCliente";
import TableVehiculo from "../components/TableVehiculo";
import FormVehiculo from "../components/FormVehiculo";

const Vehiculos: React.FC = () => {

    const { name } = useParams<{ name: string;}>();
    const { component } = useParams<{ component:string;}>();
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Vehiculos</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <TableVehiculo />
                <FormVehiculo />
            </IonContent>
        </IonPage>
);
};

export default Vehiculos;
