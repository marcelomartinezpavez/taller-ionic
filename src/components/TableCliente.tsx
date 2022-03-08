import React, {useState} from 'react';

import {IonGrid, IonRow, IonCol, useIonViewDidEnter,
    useIonViewDidLeave,
    useIonViewWillEnter,
    useIonViewWillLeave} from '@ionic/react';

export const TableCliente: React.FC = () => {

    const [clientes, setClientes] = useState<[]>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const clte = await fetch('http://localhost:8080/cliente/all');
        const resClte = await clte.json();
        setClientes(resClte.clienteDtoList);
    });

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="2.4">Nombre</IonCol>
                <IonCol size="2.4">Rut</IonCol>
                <IonCol size="2.4">Teléfono</IonCol>
                <IonCol size="2.4">Dirección</IonCol>
                <IonCol size="2.4">Cuidad</IonCol>
            </IonRow>

            {clientes?.map(cl => {
                console.log("cl");
                console.log(cl);
                console.log(cl['rut']);
                return (
                    <IonRow>
                    <IonCol size="2.4">{cl['nombre']}</IonCol>
                    <IonCol size="2.4">{cl['rut']}</IonCol>
                    <IonCol size="2.4">{cl['telefono']}</IonCol>
                    <IonCol size="2.4">{cl['direccion']}</IonCol>
                    <IonCol size="2.4">{cl['ciudad']}</IonCol>
                    </IonRow>
                );
            })}

        </IonGrid>
    );
};

export default TableCliente;
