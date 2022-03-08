import React, {useState} from 'react';

import {IonGrid, IonRow, IonCol,

    useIonViewWillEnter} from '@ionic/react';

export const TableCliente: React.FC = () => {

    const [vehiculos, setVehiculos] = useState<[]>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const clte = await fetch('http://localhost:8080/vehiculo/all');
        const resClte = await clte.json();
        setVehiculos(resClte.vehiculoDtoList);
    });

    return (
        <IonGrid>
            <IonRow>
                <IonCol size="1.714">Marca</IonCol>
                <IonCol size="1.714">Modelo</IonCol>
                <IonCol size="1.714">Patente</IonCol>
                <IonCol size="1.714">Año</IonCol>
                <IonCol size="1.714">Numero Chasis</IonCol>
                <IonCol size="1.714">Dueño</IonCol>
                <IonCol size="1.714">Color</IonCol>

            </IonRow>

            {vehiculos?.map(cl => {
                console.log("cl");
                console.log(cl);
                console.log(cl['rut']);
                return (
                    <IonRow>
                        <IonCol size="1.714">{cl['marca']}</IonCol>
                        <IonCol size="1.714">{cl['modelo']}</IonCol>
                        <IonCol size="1.714">{cl['patente']}</IonCol>
                        <IonCol size="1.714">{cl['anio']}</IonCol>
                        <IonCol size="1.714">{cl['numeroChasis']}</IonCol>
                        <IonCol size="1.714">{cl['rutDueno']}</IonCol>

                        <IonCol size="1.714">{cl['color']}</IonCol>
                    </IonRow>
                );
            })}

        </IonGrid>
    );
};

export default TableCliente;
