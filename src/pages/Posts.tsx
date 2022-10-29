import { IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ProfileHeader from '../components/ProfileHeader';

const Posts: React.FC = () => {
  return (
    <IonPage>
        <ProfileHeader />
         <IonContent fullscreen>
         <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      May 5, 2022
                    </IonCardSubtitle>
                    <IonCardTitle>My Trip to CA</IonCardTitle>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio ad repellat nesciunt quasi ipsa similique quae harum veniam impedit obcaecati, nam ullam atque tempore nulla saepe asperiores sint odio.</p>
                  </IonCardHeader>
                </IonCard>
         <IonCard>
                  <IonCardHeader>
                    <IonCardSubtitle>
                      April 23, 2022
                    </IonCardSubtitle>
                    <IonCardTitle>Spring Cleaning</IonCardTitle>
                  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum optio ad repellat nesciunt quasi ipsa similique quae harum veniam impedit obcaecati, nam ullam atque tempore nulla saepe asperiores sint odio.</p>
                  </IonCardHeader>
                </IonCard>
         </IonContent>
       </IonPage>
   )
};

export default Posts;
