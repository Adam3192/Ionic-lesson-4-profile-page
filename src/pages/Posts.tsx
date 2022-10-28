import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProfileHeader from '../components/ProfileHeader';

const Posts: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Posts Page</IonTitle>
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

export default Posts;
