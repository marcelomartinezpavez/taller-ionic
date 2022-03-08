import React, { useState } from 'react';

import {
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    IonToast,
    useIonToast, IonSelect, IonSelectOption, IonCol, useIonViewWillEnter, IonRow
} from '@ionic/react';

const FormVehiculo: React.FC = () => {

    const [marca, setMarca] = useState<string>();
    const [modelo, setModelo] = useState<string>();
    const [patente, setPatente] = useState<string>();
    const [anio, setAnio] = useState<string>();
    const [numeroMotor, setNumeroMotor] = useState<string>();
    const [numeroChasis, setNumeroChasis] = useState<string>();
    const [rutDueno, setRutDueno] = useState<string>();
    const [color, setColor] = useState<string>();
    const [kilometraje, setKilometraje] = useState<string>();


    const [clientes, setClientes] = useState<[]>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const clte = await fetch('http://localhost:8080/cliente/all');
        const resClte = await clte.json();
        setClientes(resClte.clienteDtoList);
    });

    return (
        <IonList>
            <IonItem>
                <IonLabel position="floating">Marca</IonLabel>
                <IonInput value={marca} placeholder="Marca" onIonChange={e => setMarca(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Modelo</IonLabel>
                <IonInput value={modelo} placeholder="Modelo" onIonChange={e => setModelo(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Patente</IonLabel>
                <IonInput value={patente} placeholder="Patente" onIonChange={e => setPatente(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel position="floating">Año</IonLabel>
                <IonInput value={anio} placeholder="Año" onIonChange={e => setAnio(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Número Motor</IonLabel>
                <IonInput value={numeroMotor} placeholder="Número Motor" onIonChange={e => setNumeroMotor(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Número Chasis</IonLabel>
                <IonInput value={numeroChasis} placeholder="Número Chasis" onIonChange={e => setNumeroChasis(e.detail.value!)} clearInput></IonInput>
            </IonItem>


            <IonItem>
                <IonLabel>Dueño</IonLabel>

                <IonSelect onIonChange={e => setRutDueno(e.detail.value!)} placeholder="Select One">
                    {clientes?.map(cl => {
                        console.log("cl");
                        console.log(cl);
                        console.log(cl['rut']);
                        return (
                            <IonSelectOption value={cl['rut']} >{cl['nombre'] +' '+cl['apellido']}</IonSelectOption>
                    );
                    })}
                </IonSelect>

            </IonItem>
            <IonItem>
                <IonLabel position="floating">Color</IonLabel>
                <IonInput value={color} placeholder="Color" onIonChange={e => setColor(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Kilometraje</IonLabel>
                <IonInput value={kilometraje} placeholder="Kilometraje" onIonChange={e => setKilometraje(e.detail.value!)} clearInput></IonInput>
            </IonItem>
            <IonButton onClick={ () => agregaVehiculo() }>Agregar</IonButton>
            <IonButton color="danger">Cancelar</IonButton>

        </IonList>

    );
    function agregaVehiculo(){
        console.log("agrega Vehiculo");
        console.log(marca);
        console.log(modelo);
        console.log(patente);
        console.log(anio);
        console.log(numeroMotor);
        console.log(numeroChasis);
        console.log(rutDueno);
        console.log(color);
        console.log(kilometraje);

        if(patente == null){
            alert('Patente es requerida');
            return;
        }
        //const clte = await fetch('http://localhost:8080/cliente/insert');
        //const resClte = await clte.json();
        //setClientes(resClte.clienteDtoList);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ marca: marca,
                modelo:modelo,
                patente:patente,
                anio:anio,
                numeroMotor:numeroMotor,
                numeroChasis:numeroChasis,
                rutDueno:rutDueno,
                color:color,
                kilometraje:kilometraje
            })
        };
        fetch('http://localhost:8080/vehiculo/insert', requestOptions)
            .then(response => {
                console.log(response);
                console.log(response.status)
                if(response.status == 201){
                    alert("Vehiculo agregado con éxito")

                }
                console.log(response.json());
                //esponse.json()
            });
        //.then(data => this.setState({ postId: data.id }));



    }
};


export default FormVehiculo;
