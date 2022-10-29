import {
  IonAvatar,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ProfileHeader from '../components/ProfileHeader'
import './Friends.css'

const picture = require('../Images/pic.png')

const Friends: React.FC = () => {
  return (
    <IonPage>
      <ProfileHeader />
      <IonContent fullscreen>
        <IonGrid>
          <IonRow className='ion-align-items-center'>
            <IonCol size-xs="2" size-md="6">
              <IonAvatar className="size">
                <img alt="My Picture" src={picture} />
              </IonAvatar>
              <IonAvatar className="size">
                <img alt="My Picture" src={picture} />
              </IonAvatar>
              <IonAvatar className="size">
                <img alt="My Picture" src={picture} />
              </IonAvatar>
              <IonAvatar className="size">
                <img alt="My Picture" src={picture} />
              </IonAvatar>
              <IonAvatar className="size">
                <img alt="My Picture" src={picture} />
              </IonAvatar>
              <IonAvatar className="size">
                <img alt="My Picture" src={picture} />
              </IonAvatar>
            </IonCol>
            <IonCol size-xs="10" size-md="6">
              <IonList>
                <IonItem>
                  <IonLabel><h1>Friend One</h1></IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel><h1>Friend Two</h1></IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel><h1>Friend Three</h1></IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel><h1>Friend Four</h1></IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel><h1>Friend Five</h1></IonLabel>
                </IonItem>
                <IonItem>
                  <IonLabel><h1>Friend Six</h1></IonLabel>
                </IonItem>
              </IonList>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  )
}

export default Friends
