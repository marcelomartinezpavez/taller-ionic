import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import './Page.css';
import TableProveedor from "../components/TableProveedor";
import FormProveedor from "../components/FormProveedor";

const Proveedores: React.FC = () => {

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
                    <IonTitle>Proveedores</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <TableProveedor />
                <FormProveedor />
            </IonContent>
        </IonPage>
);
};

export default Proveedores;
