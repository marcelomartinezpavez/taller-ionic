import React, {useState} from 'react';

import {IonGrid, IonRow, IonCol, useIonViewWillEnter} from '@ionic/react';

export const TableCliente: React.FC = () => {

    const [repuestos, setRepuestos] = useState<[]>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const clte = await fetch('http://localhost:8080/repuesto/all');
        const resClte = await clte.json();
        setRepuestos(resClte.repuestoDtoList);
    });

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="2">Nombre</IonCol>
                <IonCol size="2">Código</IonCol>
                <IonCol size="2">Marca</IonCol>
                <IonCol size="2">Modelo</IonCol>
                <IonCol size="2">Año</IonCol>
                <IonCol size="2">Proveedor</IonCol>
            </IonRow>

            {repuestos?.map(cl => {
                console.log("cl");
                console.log(cl);
                console.log(cl['rut']);
                return (
                    <IonRow>
                        <IonCol size="2">{cl['nombre']}</IonCol>
                        <IonCol size="2">{cl['codigo']}</IonCol>
                        <IonCol size="2">{cl['marca']}</IonCol>
                        <IonCol size="2">{cl['modelo']}</IonCol>
                        <IonCol size="2">{cl['anio']}</IonCol>
                        <IonCol size="2">{cl['rutProveedor']}</IonCol>
                    </IonRow>
                );
            })}

        </IonGrid>
    );
};

export default TableCliente;
