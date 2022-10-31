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

const friend1 = require('../Images/friend1.png')
const friend2 = require('../Images/friend2.png')
const friend3 = require('../Images/friend3.png')
const friend4 = require('../Images/friend4.png')
const friend5 = require('../Images/friend5.png')
const friend6 = require('../Images/friend6.png')

const Friends: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <ProfileHeader />
        <div className="container">
          <IonAvatar className="size">
            <img alt="My Picture" src={friend1} />
          </IonAvatar>
          <IonItem className="width">
            <IonLabel>
              <h1>Matthew Morales</h1>
            </IonLabel>
          </IonItem>
        </div>
        <div className="container">
          <IonAvatar className="size">
            <img alt="My Picture" src={friend2} />
          </IonAvatar>
          <IonItem className="width">
            <IonLabel>
              <h1>Corey Wright</h1>
            </IonLabel>
          </IonItem>
        </div>
        <div className="container">
          <IonAvatar className="size">
            <img alt="My Picture" src={friend3} />
          </IonAvatar>
          <IonItem className="width">
            <IonLabel>
              <h1>Crystal Hall</h1>
            </IonLabel>
          </IonItem>
        </div>
        <div className="container">
          <IonAvatar className="size">
            <img alt="My Picture" src={friend4} />
          </IonAvatar>
          <IonItem className="width">
            <IonLabel>
              <h1>Wilma James</h1>
            </IonLabel>
          </IonItem>
        </div>
        <div className="container">
          <IonAvatar className="size">
            <img alt="My Picture" src={friend5} />
          </IonAvatar>
          <IonItem className="width">
            <IonLabel>
              <h1>Clyde Hamilton</h1>
            </IonLabel>
          </IonItem>
        </div>
        <div className="container">
          <IonAvatar className="size">
            <img alt="My Picture" src={friend6} />
          </IonAvatar>
          <IonItem className="width">
            <IonLabel>
              <h1>Allen Davidson</h1>
            </IonLabel>
          </IonItem>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Friends
