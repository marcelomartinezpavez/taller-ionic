import React, {useState} from 'react';

import {IonGrid, IonRow, IonCol, useIonViewWillEnter} from '@ionic/react';

export const TableOrdenTrabajo: React.FC = () => {

    const [ordenes, setOrdenes] = useState<[]>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const clte = await fetch('http://localhost:8080/ordenTrabajo/all');
        const resClte = await clte.json();
        setOrdenes(resClte.ordenTrabajoDtoList);
    });

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="2">Numero de orden</IonCol>
                <IonCol size="2">Fecha ingreso</IonCol>
                <IonCol size="2">rut cliente</IonCol>
                <IonCol size="2">Patente Vehiculo</IonCol>

            </IonRow>

            {ordenes?.map(cl => {
                console.log("cl");
                console.log(cl);

                return (
                    <IonRow>
                        <IonCol size="2">{cl['numeroOrden']}</IonCol>
                        <IonCol size="2">{cl['fechaIngreso']}</IonCol>
                        <IonCol size="2">{cl['rutCliente']}</IonCol>
                        <IonCol size="2">{cl['patenteVehiculo']}</IonCol>

                    </IonRow>
                );
            })}

        </IonGrid>
    );
};

export default TableOrdenTrabajo;
