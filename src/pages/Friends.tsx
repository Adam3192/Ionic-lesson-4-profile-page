import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProfileHeader from '../components/ProfileHeader';

const Friends: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Friends Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>
        <ProfileHeader />
      </IonContent>
    </IonPage>
  );
};

export default Friends;
