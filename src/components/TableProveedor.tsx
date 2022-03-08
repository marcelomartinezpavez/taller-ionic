import React, {useState} from 'react';

import {IonGrid, IonRow, IonCol, useIonViewWillEnter} from '@ionic/react';

export const TableProveedor: React.FC = () => {

    const [proveedores, setProveedores] = useState<[]>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const prov = await fetch('http://localhost:8080/proveedor/all');
        const resProv = await prov.json();
        setProveedores(resProv.proveedorDtoList);
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

            {proveedores?.map(cl => {
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

export default TableProveedor;
