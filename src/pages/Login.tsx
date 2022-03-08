import React, { useState } from 'react';

import {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage,
    IonTitle, IonToolbar, IonRow, IonCol, IonIcon, IonItem, IonLabel, IonInput, IonButton
} from '@ionic/react';
import { useParams } from 'react-router';
import ExploreContainer from '../components/ExploreContainer';
import './Page.css';
import {personCircle} from "ionicons/icons";
import axios from "axios";

const Login: React.FC = () => {

    const [ user, setUser ] = useState<string>();
    const [ pass, setPass ] = useState<string>();


    const { name } = useParams<{ name: string;}>();
    console.log(name);
    const { component } = useParams<{ component:string;}>();
    console.log(component)
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Login</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Login</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonRow>
                    <IonCol>
                        <IonIcon
                            style={{ fontSize: "70px", color: "#0040ff" }}
                            icon={personCircle}
                        />
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>
                        <IonItem>
                            <IonLabel position="floating"> User</IonLabel>
                            <IonInput
                                type="text"
                                value={user}
                                onIonChange={(e) => setUser(e.detail.value!)}
                            >
                            </IonInput>
                        </IonItem>

                        <IonItem>
                            <IonLabel position="floating"> Contraseña</IonLabel>
                            <IonInput
                                type="password"
                                value={pass}
                                onIonChange={(e) => setPass(e.detail.value!)}
                            >
                            </IonInput>
                        </IonItem>
                    </IonCol>
                </IonRow>
                <IonRow>
                    <IonCol>

                        <IonButton expand="block" onClick={handleLogin}>
                            Login
                        </IonButton>

                    </IonCol>
                </IonRow>

            </IonContent>
        </IonPage>
    );

    function handleLogin () {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: user,
                pass:pass
            })
        };
        fetch('http://localhost:8080/login/', requestOptions)
            .then(response => {
                console.log(response);
                console.log(response.status)
                if(response.status == 200){
                    alert("Login con éxito")
                }else{
                    alert("Datos incorrectos");
                }
                console.log(response.json());
                //esponse.json()
            });
    };
};



export default Login;
