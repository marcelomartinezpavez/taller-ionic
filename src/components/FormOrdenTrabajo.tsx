import React, {useEffect, useState} from 'react';

import {
    IonInput,
    IonItem,
    IonLabel,
    IonList,
    IonButton,
    IonCard,
    IonIcon,
    IonToast,
    useIonToast, IonSelect, IonSelectOption, IonCol,
    useIonViewWillEnter,
    useIonActionSheet,
    useIonViewDidEnter,
    useIonViewWillLeave,
    useIonViewDidLeave,
    IonRow, IonCardContent, IonTitle
} from '@ionic/react';

import Detalle from "../components/Detalle";


const FormOrdenTrabajo: React.FC = () => {

    const [numeroOrden, setNumeroOrden] = useState<string>();
    const [fechaIngreso, setFechaIngreso] = useState<string>();
    const [rutCliente, setRutCliente] = useState<string>();
    const [patenteVehiculo, setPatenteVehiculo] = useState<string>();
    const [detalle, setDetalle] = useState<any>();
    const [codigoRepuestos, setCodigoRepuestos] = useState<string>();
    const [clientes, setClientes] = useState<[]>();
    const [vehiculo, setVehiculos] = useState<[]>();
    const [countDetalle, setCountDetalle] = useState(1);
    const [detalles, setDetalles] = useState<[any]>();
    const [repuesto, setRepuestos] = useState<[]>();
    const [descripcionDetalle, setDescripcionDetalle] = useState<string>();
    const [recargoDetalle, setRecargoDetalle] = useState<string>();
    const [valorOt, setValorOt] = useState<string>();

    useIonViewWillEnter(async () => {
        console.log('ionViewWillEnter event fired');
        const clte = await fetch('http://localhost:8080/cliente/all');
        const resClte = await clte.json();
        setClientes(resClte.clienteDtoList);

        const veh = await fetch('http://localhost:8080/vehiculo/all');
        const resVeh = await veh.json();
        console.log("resVeh");
        console.log(resVeh);
        setVehiculos(resVeh.vehiculoDtoList);

        const rep = await fetch('http://localhost:8080/repuesto/all');
        const resRep = await rep.json();
        console.log("resRep");
        console.log(resRep);
        setRepuestos(resRep.repuestoDtoList);

    });

    useIonViewDidEnter( () => {
        console.log("useIonViewDidEnter");
    });
    useIonViewWillLeave( () => {
        console.log("useIonViewWillLeave");
    });
    useIonViewDidLeave( () => {
        console.log("useIonViewDidLeave");
    });


    return (
        <IonList>

            <IonItem>
                <IonLabel position="floating">Numero orden</IonLabel>
                <IonInput value={numeroOrden} placeholder="Numero Orden" onIonChange={e => setNumeroOrden(e.detail.value!)}></IonInput>
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Fecha de Ingreso</IonLabel>
                <IonInput value={fechaIngreso} placeholder="Fecha de Ingreso" onIonChange={e => setFechaIngreso(e.detail.value!)}></IonInput>
            </IonItem>

            <IonItem>
                <IonLabel>Patente Vehiculo</IonLabel>

                <IonSelect onIonChange={e => {
                    setPatenteVehiculo(e.detail.value!);
                    //getVehiculoByClient(e.detail.value);
                } } placeholder="Select One">
                    {vehiculo?.map(cl => {
                        console.log("cl");
                        console.log(cl);
                        return (
                            <IonSelectOption value={cl['patente']} >{cl['patente'] +' '+cl['marca']+' '+cl['modelo']}</IonSelectOption>
                        );
                    })}
                </IonSelect>

            </IonItem>

            <IonTitle>Detalle</IonTitle>
            {obtieneDetalle(countDetalle)}

            <IonItem>
                <IonButton fill="outline" onClick={() => {setCountDetalle(countDetalle + 1)}}>Agregar detalle</IonButton>
            </IonItem>

            <IonItem>
                <IonLabel>Repuesto</IonLabel>

                <IonSelect onIonChange={e => {
                    setCodigoRepuestos(e.detail.value!);
                    //getVehiculoByClient(e.detail.value);
                } } placeholder="Select One">
                    {repuesto?.map(cl => {
                        console.log("cl");
                        console.log(cl);
                        return (
                            <IonSelectOption value={cl['codigo']} >{cl['codigo'] +' '+cl['nombre']+' '+cl['marca']+' '+cl['modelo']}</IonSelectOption>
                        );
                    })}
                </IonSelect>

            </IonItem>


            <IonItem>
                <IonLabel>Rut cliente</IonLabel>

                <IonSelect onIonChange={e => {
                    setRutCliente(e.detail.value!);
                    getVehiculoByClient(e.detail.value);
                    } } placeholder="Select One">
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
                <IonLabel position="floating">Valor Orden Trabajo</IonLabel>
                <IonInput value={valorOt} placeholder="Valor Orden Trabajo" onIonChange={e => setValorOt( e.detail.value!)} clearInput></IonInput>
            </IonItem>

            <IonButton onClick={ () => agregaOrdenTrabajo() }>Agregar</IonButton>
            <IonButton color="danger">Cancelar</IonButton>

        </IonList>

    );

    async function getVehiculoByClient(rutCliente: any) {
        console.log("getVehiculoByClient");
        console.log(rutCliente);
        const vehiculos = await fetch('http://localhost:8080/vehiculo/cliente/'.concat(rutCliente));
        const resvehiculo = await vehiculos.json();
        console.log("resvehiculo");
        console.log(resvehiculo);
        setVehiculos(resvehiculo.vehiculoDtoList);
    }

    function obtieneDetalle(cant:number) {
        console.log("obtieneDetalle");
        console.log(cant);
        const det = [];
        for (let i =0;i<cant;i++) {
            det.push(<Detalle/>);
        }
        //setDetalles(det);
        return det;
    }

   // function obtieneDetalle(cant:number){
   //     console.log("obtieneDetalle");
   //     let detalles:any;
        //for (let i =0;i<cant;i++) {
        //    console.log("i: "+i);
        //    if (detalles == undefined) {
        //        setDetalles(detalles);
                //setDetalles([<Detalle />]);
        //    } else {
        //        detalles = detalles + <Detalle />;
        //    }
        //}
        //return detalles;
    //}

    function agregaOrdenTrabajo(){
        console.log("agrega Orden de trabajo");
        let obtencionDetalle = obtieneDetalle(countDetalle);
        console.log(obtieneDetalle(countDetalle));
        console.log(obtencionDetalle);
        console.log(obtencionDetalle.length);
        for(let i =0; i<obtencionDetalle.length;i++){
            console.log("obtencionDetalle["+i+"]");

            console.log(obtencionDetalle[i]);
            //console.log(obtencionDetalle[i].descripcionDetalle);

            const myJSON = JSON.stringify(obtencionDetalle[i]);
            console.log("myJSON");
            console.log(myJSON);
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ numeroOrden: numeroOrden,
                fechaIngreso:fechaIngreso,
                rutCliente:rutCliente,
                patenteVehiculo:patenteVehiculo,
                detalle:[{descripcion:descripcionDetalle, recargo:recargoDetalle}],
                codigoRepuestos:codigoRepuestos,
                valorOt: valorOt
            })
        };
        console.log("requestOptions");
        console.log(requestOptions);
        console.log(requestOptions.body);
        fetch('http://localhost:8080/ordenTrabajo/insert', requestOptions)
            .then(response => {
                console.log(response);
                console.log(response.status)
                if(response.status == 201){
                    alert("Orden de trabajo agregada con éxito")

                }
                console.log(response.json());
                //esponse.json()
            });
        //.then(data => this.setState({ postId: data.id }));



    }
};


export default FormOrdenTrabajo;
