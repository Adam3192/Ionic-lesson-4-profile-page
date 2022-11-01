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
import { useState, useEffect } from 'react';

const picture = require('../Images/me.png')

interface ContainerProps {}

const ProfileHeader: React.FC<ContainerProps> = () => {
 let [ border, setBorder ] = useState(true);

 useEffect(() => {
  setBorder(false)
}, [])

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
            <IonItem className={ window.location.href =='http://localhost:8101/profile/bio' ? 'border' : 'noBorder'} lines="none" detail={false} routerLink="/profile/bio">
              <IonLabel className={ window.location.href =='http://localhost:8101/profile/bio' ? 'blue' : 'grey'} color="medium">Bio</IonLabel>
            </IonItem>
            <IonItem className={ window.location.href =='http://localhost:8101/profile/posts' ? 'border' : 'noBorder'} lines="none" detail={false} routerLink="/profile/posts">
              <IonLabel className={ window.location.href =='http://localhost:8101/profile/posts' ? 'blue' : 'grey'} color="medium">Posts</IonLabel>
            </IonItem>
            <IonItem className={ window.location.href =='http://localhost:8101/profile/friends' ? 'border' : 'noBorder'} lines="none" detail={false} routerLink="/profile/friends">
              <IonLabel className={ window.location.href =='http://localhost:8101/profile/friends' ? 'blue' : 'grey'} color="medium">Friends</IonLabel>
            </IonItem>
            <IonItem className={ window.location.href =='http://localhost:8101/profile/photos' ? 'border' : 'noBorder'} lines="none" detail={false} routerLink="/profile/photos">
              <IonLabel className={ window.location.href =='http://localhost:8101/profile/photos' ? 'blue' : 'grey'} color="medium">Photos</IonLabel>
            </IonItem>
          </IonRow>
        </IonGrid>

      </IonHeader>
    </div>
  )
}

export default ProfileHeader
