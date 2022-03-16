import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import TableOrdenTrabajo from "../components/TableOrdenTrabajo";
import FormOrdenTrabajo from "../components/FormOrdenTrabajo";

const OrdenTrabajo: React.FC = () => {

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
                    <IonTitle>Ordenes trabajo</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <TableOrdenTrabajo />
                <FormOrdenTrabajo />
            </IonContent>
        </IonPage>
);
};

export default OrdenTrabajo;
