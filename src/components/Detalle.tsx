import {IonIcon, IonInput, IonItem, IonLabel} from "@ionic/react";
import React, {useState} from "react";

const Detalle: React.FC = () => {

    const [detalle, setDetalle] = useState<string>();
    const [descripcionDetalle, setDescripcionDetalle] = useState<string>();
    const [recargoDetalle, setRecargoDetalle] = useState<string>();
    return (<IonItem>
        <IonItem>
            <IonLabel position="floating">Descripcion Detalle</IonLabel>
            <IonInput value={descripcionDetalle} placeholder="Descripcion detalle" onIonChange={e => setDescripcionDetalle( e.detail.value!)} clearInput></IonInput>
        </IonItem>

        <IonItem>
            <IonLabel position="floating">recargo Detalle</IonLabel>
            <IonInput value={recargoDetalle} placeholder="Recargo detalle" onIonChange={e => setRecargoDetalle( e.detail.value!)} clearInput></IonInput>
        </IonItem>

    </IonItem>);
}

export default Detalle;
