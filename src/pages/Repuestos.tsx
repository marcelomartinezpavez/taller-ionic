import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';

import FormRepuestos from "../components/FormRepuestos";
import TableRepuestos from "../components/TableRepuestos";

const Repuestos: React.FC = () => {

    const { name } = useParams<{ name: string;}>();
    console.log(name);
    const { component } = useParams<{ component:string;}>();
    console.log(component)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>Repuestos</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <TableRepuestos />
                <FormRepuestos />
            </IonContent>
        </IonPage>
);
};

export default Repuestos;
