import './HomeContainer.css';
import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonIcon } from '@ionic/react';
import { logoIonic } from 'ionicons/icons';

interface ContainerProps {
  name: string;
  id: string;
}

const HomeContainer: React.FC<ContainerProps> = ({ name, id }) => {
  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Bienvenido, {name}</IonCardTitle>
          <IonCardSubtitle>CC: {id} </IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>Por favor seleccione la acción que desea realizar:</IonCardContent>
      </IonCard>
      <div id='container-flex'>
        <IonCard color="light" className='w-50 card-button' onClick={() => {}}>
          <IonCardHeader>
          <IonIcon icon={logoIonic} size="large"></IonIcon>
          </IonCardHeader>

          <IonCardContent>Registro de Herramienta</IonCardContent>
        </IonCard>
        <IonCard color="light" className='w-50 card-button' onClick={() => {}}>
          <IonCardHeader>
          <IonIcon icon={logoIonic} size="large"></IonIcon>
          </IonCardHeader>

          <IonCardContent>Movimientos</IonCardContent>
        </IonCard>

        <IonCard color="light" className='w-50 card-button' onClick={() => {}}>
          <IonCardHeader>
          <IonIcon icon={logoIonic} size="large"></IonIcon>
          </IonCardHeader>

          <IonCardContent>Ubicacion</IonCardContent>
        </IonCard>
      </div>
    </>

  );
};

export default HomeContainer;