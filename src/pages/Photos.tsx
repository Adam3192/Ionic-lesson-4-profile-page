import {
  IonContent,
  IonHeader,
  IonImg,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import ProfileHeader from '../components/ProfileHeader'
import './Photos.css'

const photo1 = require('../Images/photo1.png')
const photo2 = require('../Images/photo2.png')
const photo3 = require('../Images/photo3.png')
const photo4 = require('../Images/photo4.png')
const photo5 = require('../Images/photo5.png')
const photo6 = require('../Images/photo6.png')
const photo7 = require('../Images/photo7.png')
const photo8 = require('../Images/photo8.png')

const Photos: React.FC = () => {
  return (
    <IonPage>
      <ProfileHeader />
      <IonContent fullscreen>
        <div className='container2'>
          <IonImg className="sizeAdjust" src={photo1} alt="image1"></IonImg>
          <IonImg className="sizeAdjust" src={photo2} alt="image1"></IonImg>
        </div>
        <div className='container2'>
          <IonImg className="sizeAdjust" src={photo3} alt="image1"></IonImg>
          <IonImg className="sizeAdjust" src={photo4} alt="image1"></IonImg>
        </div>
        <div className='container2'>
          <IonImg className="sizeAdjust" src={photo5} alt="image1"></IonImg>
          <IonImg className="sizeAdjust" src={photo6} alt="image1"></IonImg>
        </div>
        <div className='container2'>
          <IonImg className="sizeAdjust" src={photo7} alt="image1"></IonImg>
          <IonImg className="sizeAdjust" src={photo8} alt="image1"></IonImg>
        </div>
      </IonContent>
    </IonPage>
  )
}

export default Photos
