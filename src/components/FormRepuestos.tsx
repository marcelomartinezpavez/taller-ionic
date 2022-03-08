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
    IonButton, useIonViewWillEnter, IonSelect, IonSelectOption
} from '@ionic/react';
import ExploreContainer from "./ExploreContainer";

const FormRepuestos: React.FC = () => {


    const [codigo, setCodigo] = useState<string>();
    const [nombre, setNombre] = useState<string>();
    const [marca, setMarca] = useState<string>();
    const [modelo, setModelo] = useState<string>();
    const [anio, setAnio] = useState<string>();
    const [valor, setValor] = useState<number>();

    const [proveedor, setProveedor] = useState<string>();

    const [proveedores, setProveedores] = useState<[]>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const clte = await fetch('http://localhost:8080/proveedor/all');
        const resClte = await clte.json();
        setProveedores(resClte.proveedorDtoList);
    });

return (

             <IonList>
                <IonItem>
                    <IonLabel position="floating">Nombre</IonLabel>
                    <IonInput value={nombre} placeholder="Nombre" onIonChange={e => setNombre(e.detail.value!)}></IonInput>
                </IonItem>
                 <IonItem>
                     <IonLabel position="floating">Código Repuesto</IonLabel>
                     <IonInput value={codigo} placeholder="Código Repuesto" onIonChange={e => setCodigo(e.detail.value!)}></IonInput>
                 </IonItem>

                 <IonItem>
                     <IonLabel position="floating">Marca</IonLabel>
                     <IonInput value={marca} placeholder="Marca" onIonChange={e => setMarca(e.detail.value!)}></IonInput>
                 </IonItem>

                <IonItem>
                    <IonLabel position="floating">Modelo</IonLabel>
                    <IonInput value={modelo} placeholder="Modelo" onIonChange={e => setModelo(e.detail.value!)} clearInput></IonInput>
                </IonItem>
                 <IonItem>
                     <IonLabel position="floating">Año</IonLabel>
                     <IonInput value={anio} placeholder="Año" onIonChange={e => setAnio(e.detail.value!)} clearInput></IonInput>
                 </IonItem>
                 <IonItem>
                     <IonLabel position="floating">Proveedor</IonLabel>
                     <IonInput value={proveedor} placeholder="Proveedor" onIonChange={e => setProveedor(e.detail.value!)} clearInput></IonInput>
                 </IonItem>

                 <IonItem>
                     <IonLabel position="floating">Valor</IonLabel>
                     <IonInput type="number" value={valor} placeholder="Valor" onIonChange={e => setValor(parseInt(e.detail.value!))} clearInput></IonInput>
                 </IonItem>

                 <IonItem>
                     <IonLabel>Proveedor</IonLabel>

                     <IonSelect onIonChange={e => setProveedor(e.detail.value!)} placeholder="Select One">
                         {proveedores?.map(cl => {
                             console.log("cl");
                             console.log(cl);
                             console.log(cl['rut']);
                             return (
                                 <IonSelectOption value={cl['rut']} >{cl['nombre'] +' '+cl['apellido']}</IonSelectOption>
                             );
                         })}
                     </IonSelect>

                 </IonItem>

                 <IonButton onClick={ () => agregaRepuesto()} >Agregar</IonButton>
                 <IonButton color="danger">Cancelar</IonButton>

            </IonList>

);

    function agregaRepuesto(){
        console.log("agrega Repuesto");
        console.log(marca);
        console.log(modelo);
        console.log(codigo);
        console.log(anio);
        console.log(nombre);
        console.log(proveedor);

        if(codigo == null){
            alert('Código es requerido');
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
                codigo:codigo,
                anio:anio,
                nombre:nombre,
                valor:valor,
                rutProveedor:proveedor
            })
        };
        fetch('http://localhost:8080/repuesto/insert', requestOptions)
            .then(response => {
                console.log(response);
                console.log(response.status)
                if(response.status == 201){
                    alert("Repuesto agregado con éxito")

                }
                console.log(response.json());
                //esponse.json()
            });
        //.then(data => this.setState({ postId: data.id }));



    }


};
export default FormRepuestos;
