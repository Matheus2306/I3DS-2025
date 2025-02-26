import "./SocialLinks.module.css"
const SocialLinks = ({icon, link}) => {
  return (
    <a href={link} target="_blank">
      <ion-icon name={icon}></ion-icon>
    </a>
  )
}

export default SocialLinks