import "../styles/user.css";
import { useEffect } from "react";
import ProfilBackground from "../assets/images/profil_background.jpg";
import ProfilAvatar from "../assets/images/profil_avatar.svg";

function User() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section>
      <div className="headerUser">
        <div className="backgroundUser">
          <img
            className="backgroundUserImg"
            src={ProfilBackground}
            alt="Profil_Background_User"
          />
        </div>
        <div className="avatarUser">
          <img
            className="avatarUserImg"
            src={ProfilAvatar}
            alt="Profil_Avatar_User"
          />
        </div>
      </div>
      <div className="informationsUser">
        <h2 className="titleInformationsUser">Mes informations</h2>
        <p className="titleInformations">Email</p>
        <p className="userInformations">marie.dupont@gmail.com</p>
        <p className="titleInformations">Prénom</p>
        <p className="userInformations">Marie</p>
        <p className="titleInformations">Nom</p>
        <p className="userInformations">Dupont</p>
        <p className="titleInformations">Mot de passe</p>
        <p className="userInformations">********</p>
        <p className="titleInformations">Date de naissance</p>
        <p className="userInformations">21/05/1990</p>
        <p className="titleInformations">Numéro de téléphone</p>
        <p className="userInformations">+ 33 6 07 08 09 99</p>
        <p className="titleInformations">Mes préférences</p>
        <p className="userInformations">
          Fantastisque <br />
          Comédie <br />
          Thriller
        </p>
      </div>
    </section>
  );
}

export default User;
