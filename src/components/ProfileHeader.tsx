import {
  IonAvatar,
  IonBackButton,
  IonBreadcrumb,
  IonBreadcrumbs,
  IonButtons,
  IonHeader,
  IonMenuButton,
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
      <IonBreadcrumbs>
        <IonBreadcrumb href="/profile/bio">Bio</IonBreadcrumb>
        <IonBreadcrumb href="/profile/posts">Posts</IonBreadcrumb>
        <IonBreadcrumb href="/profile/friends">Friends</IonBreadcrumb>
        <IonBreadcrumb active={false} href="/profile/photos">Photos</IonBreadcrumb>
      </IonBreadcrumbs>
      </IonHeader>
    </div>
  )
}

export default ProfileHeader
