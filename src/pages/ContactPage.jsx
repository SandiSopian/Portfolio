import MainLayout from "../layouts/MainLayout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { contact } from "../services/database";

const ContactPage = () => {
  const { email, phone, contactVector } = contact;

  return (
    <MainLayout>
      <div className="flex md:items-center justify-center h-screen px-4 ml-24 lg:ml-0 gap-12">
        <div className="flex flex-col md:items-start justify-center text-white gap-5">
          <h1 className="text-4xl md:text-5xl">{"I'd love to hear from you"}</h1>

          <div>
            <p>Got a project you would like me to work on?</p>
            <span className="block">Or how about just a friendly chat?</span>
          </div>

          {/* Social media */}
          <div className="flex flex-col gap-2">
            <div>
              <FontAwesomeIcon icon={faPhone} /> <span className="ml-1">{phone}</span>
            </div>
            <div>
              <FontAwesomeIcon icon={faEnvelope} />
              <span className="ml-2">
                <a href={`mailto:${email}`}>{email}</a>
              </span>
            </div>
          </div>
        </div>

        <div>
          <img src={contactVector} alt="" className="hidden lg:block w-60" />
        </div>
      </div>
    </MainLayout>
  );
};

export default ContactPage;
