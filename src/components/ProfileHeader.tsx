import {
  IonAvatar,
  IonBackButton,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButton,
  IonButtons,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonMenuButton,
  IonRouterLink,
  IonRow,
  IonTabBar,
  IonTabButton,
  IonTabs,
  IonThumbnail,
  IonTitle,
  IonToolbar,
} from '@ionic/react'
import './ProfileHeader.css'

const picture = require('../Images/me.png')

interface ContainerProps {}

const ProfileHeader: React.FC<ContainerProps> = () => {
  return (
    <div>
      <IonHeader>
        <IonToolbar className="ion-justify-content-center" color="primary">
          <IonTitle>User Profile</IonTitle>
        </IonToolbar>
        <div className="flex padding2">
          <IonAvatar>
            <img alt="My Picture" src={picture} />
          </IonAvatar>
          <div className="padding">
            <h1>Adam Dixon</h1>
            <p>jeremyadixon@hotmail.com</p>
          </div>
        </div>

        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonItem lines="none" detail={false} routerLink="/profile/bio">
              <IonLabel color="medium">Bio</IonLabel>
            </IonItem>
            <IonItem lines="none" detail={false} routerLink="/profile/posts">
              <IonLabel color="medium">Posts</IonLabel>
            </IonItem>
            <IonItem lines="none" detail={false} routerLink="/profile/friends">
              <IonLabel color="medium">Friends</IonLabel>
            </IonItem>
            <IonItem lines="none" detail={false} routerLink="/profile/photos">
              <IonLabel color="medium">Photos</IonLabel>
            </IonItem>
          </IonRow>
        </IonGrid>

      </IonHeader>
    </div>
  )
}

export default ProfileHeader
