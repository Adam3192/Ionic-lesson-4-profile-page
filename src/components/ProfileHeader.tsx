import {
  IonAvatar,
  IonBackButton,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButtons,
  IonCol,
  IonGrid,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonRow,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './ProfileHeader.css'

const picture = require('../Images/pic.png')

interface ContainerProps {}

const ProfileHeader: React.FC<ContainerProps> = () => {
  return (
    <div>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
        <div className="flex padding2">
          <IonAvatar>
            <img alt="My Picture" src={picture} />
          </IonAvatar>
          <div className="padding">
            <h1>Adam Dixon</h1>
            <p>Full Stack Developer</p>
          </div>
        </div>


        <IonGrid>
          <IonRow>
            <IonItem lines="none" detail={false} routerLink='/profile/bio'>
               <IonLabel>Bio</IonLabel>
            </IonItem>
            <IonItem lines="none" detail={false} routerLink='/profile/posts'>
               <IonLabel>Posts</IonLabel>
            </IonItem>
            <IonItem lines="none" detail={false} routerLink='/profile/friends'>
               <IonLabel>Friends</IonLabel>
            </IonItem>
            <IonItem lines="none" detail={false} routerLink='/profile/photos'>
               <IonLabel>Photos</IonLabel>
            </IonItem>
          </IonRow>
        </IonGrid>


        {/* <IonBreadcrumbs className="ion-justify-content-center ion-padding-top">
          <IonBreadcrumb separator={false} href="/profile/bio">
            Bio
          </IonBreadcrumb>
          <IonBreadcrumb separator={false} href="/profile/posts">
            Posts
          </IonBreadcrumb>
          <IonBreadcrumb separator={false} href="/profile/friends">
            Friends
          </IonBreadcrumb>
          <IonBreadcrumb active={false} href="/profile/photos">
            Photos
          </IonBreadcrumb>
        </IonBreadcrumbs> */}

      </IonHeader>
    </div>
  )
}

export default ProfileHeader
