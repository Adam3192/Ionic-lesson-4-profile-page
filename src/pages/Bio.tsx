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
          <p className='ion-padding'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolore tempore quidem earum debitis. Illo magni eius accusantium repellendus omnis natus impedit eveniet vel veniam corrupti non, accusamus dignissimos praesentium quos expedita nulla ipsa. Vero, nostrum?</p>
          <p className='ion-padding'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto aliquam sequi illum quo perferendis provident cumque? Eveniet quaerat vero quidem architecto modi minus perspiciatis exercitationem, nisi commodi nemo, possimus voluptates similique dignissimos nostrum officia. Error laudantium libero rerum temporibus, maxime sunt officiis ex tempore. Maxime quasi alias cumque temporibus magni?</p>
        </IonContent>
      </IonPage>
  )
}

export default Bio
