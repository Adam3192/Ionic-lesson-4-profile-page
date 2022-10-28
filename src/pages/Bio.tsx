import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ProfileHeader from '../components/ProfileHeader'

const Bio: React.FC = () => {
  return (
   <IonPage>
       <ProfileHeader />
        <IonContent fullscreen>
        </IonContent>
      </IonPage>
  )
}

export default Bio
