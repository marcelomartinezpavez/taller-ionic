import React, { useState } from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonItemDivider,
    IonButton
} from '@ionic/react';
import ExploreContainer from "./ExploreContainer";

const FormProveedor: React.FC = () => {

    const [nombre, setNombre] = useState<string>();
    const [apellido, setApellido] = useState<string>();
    const [rut, setRut] = useState<string>();
    const [direccion, setDireccion] = useState<string>();
    const [comuna, setComuna] = useState<string>();
    const [ciudad, setCiudad] = useState<string>();
    const [telefono, setTelefono] = useState<string>();
    const [email, setEmail] = useState<string>();

return (

    <IonList>
        <IonItem>
            <IonLabel position="floating">Nombre</IonLabel>
            <IonInput value={nombre} placeholder="Nombre" onIonChange={e => setNombre(e.detail.value!)}></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Apellido</IonLabel>
            <IonInput value={apellido} placeholder="Apellido" onIonChange={e => setApellido(e.detail.value!)}></IonInput>
        </IonItem>

        <IonItem>
            <IonLabel position="floating">Rut</IonLabel>
            <IonInput type="number" value={rut} placeholder="Rut" onIonChange={e => setRut(e.detail.value!)}></IonInput>
        </IonItem>

        <IonItem>
            <IonLabel position="floating">Direccion</IonLabel>
            <IonInput value={direccion} placeholder="Dirección" onIonChange={e => setDireccion(e.detail.value!)} clearInput></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Comuna</IonLabel>
            <IonInput value={comuna} placeholder="Comuna" onIonChange={e => setComuna(e.detail.value!)} clearInput></IonInput>
        </IonItem>
        <IonItem>
            <IonLabel position="floating">Cuidad</IonLabel>
            <IonInput value={ciudad} placeholder="Cuidad" onIonChange={e => setCiudad(e.detail.value!)} clearInput></IonInput>
        </IonItem>

        <IonItem>
            <IonLabel position="floating">Número de teléfono</IonLabel>
            <IonInput value={telefono} placeholder="Número de teléfono" onIonChange={e => setTelefono(e.detail.value!)} clearInput></IonInput>
        </IonItem>

        <IonItem>
            <IonLabel position="floating">Email</IonLabel>
            <IonInput value={email} placeholder="Email" onIonChange={e => setEmail(e.detail.value!)} clearInput></IonInput>
        </IonItem>
        <IonButton onClick={ () => agregaProveedor() }>Agregar</IonButton>
        <IonButton color="danger">Cancelar</IonButton>

    </IonList>

);

    function agregaProveedor(){
        console.log("agrega Proveedor");
        console.log(nombre);
        console.log(apellido);
        console.log(rut);
        console.log(direccion);
        console.log(comuna);
        console.log(ciudad);
        console.log(telefono);
        console.log(email);

        if(rut == null){
            alert('rut es requerido');
            return;
        }
        //const clte = await fetch('http://localhost:8080/cliente/insert');
        //const resClte = await clte.json();
        //setClientes(resClte.clienteDtoList);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ nombre: nombre,
                apellido:apellido,
                rut:rut,
                direccion:direccion,
                comuna:comuna,
                ciudad:ciudad,
                telefono:telefono,
                email:email
            })
        };
        fetch('http://localhost:8080/proveedor/insert', requestOptions)
            .then(response => {
                console.log(response);
                console.log(response.status)
                if(response.status == 201){
                    alert("Proveedor agregado con éxito")

                }
                console.log(response.json());
                //esponse.json()
            });
        //.then(data => this.setState({ postId: data.id }));



    }
};
export default FormProveedor;
