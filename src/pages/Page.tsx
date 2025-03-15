import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import HomeContainer from '../components/HomeContainer';
import './Page.css';

const Page: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>RegisTime Home</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">"RegisTime Home"</IonTitle>
          </IonToolbar>
        </IonHeader>
        <HomeContainer name="Alfredo Cass" id='1051418846' />
      </IonContent>
    </IonPage>
  );
};

export default Page;
