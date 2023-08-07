import React from "react";
import "../../styles/our-member.css"; // Import your CSS file with styles for the team section

const teamMembers = [
  {
    id: 1,
    name: "Rahul",
    designation: "CO Founder & CEO",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png",
    social: [
      {
        name: "Email",
        icon: "fa-envelope",
        link: "#",
      },
      {
        name: "LinkedIn",
        icon: "fa-linkedin",
        link: "#",
      },
      // Add more social links as needed
    ],
  },
  // Add more team members as needed
  {
    id: 1,
    name: "Sandeep",
    designation: "CO Founder & CFO",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png",
    social: [
      {
        name: "Email",
        icon: "fa-envelope",
        link: "#",
      },
      {
        name: "LinkedIn",
        icon: "fa-linkedin",
        link: "#",
      },
      // Add more social links as needed
    ],
  },
  {
    id: 1,
    name: "Varun",
    designation: "Operations Head",
    image:
      "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjxivAs4UknzmDfLBXGMxQkayiZDhR2ftB4jcIV7LEnIEStiUyMygioZnbLXCAND-I_xWQpVp0jv-dv9NVNbuKn4sNpXYtLIJk2-IOdWQNpC2Ldapnljifu0pnQqAWU848Ja4lT9ugQex-nwECEh3a96GXwiRXlnGEE6FFF_tKm66IGe3fzmLaVIoNL/s1600/img_avatar.png",
    social: [
      {
        name: "Email",
        icon: "fa-envelope",
        link: "#",
      },
      {
        name: "LinkedIn",
        icon: "fa-linkedin",
        link: "#",
      },
      // Add more social links as needed
    ],
  },
];

const OurMembers = () => {
  return (
    <section id="team" className="pb-5">
      <div className="container">
        <h5 className="section-title h1">OUR TEAM</h5>
        <div className="row">
          {teamMembers.map((member) => (
            <div
              className="col-xs-12 col-sm-6 col-md-4"
              key={member.id}
            >
              <div className="image-flip">
                <div className="mainflip flip-0">
                  <div className="frontside">
                    <div className="card">
                      <div className="card-body text-center">
                        <p>
                          <img
                            className="img-fluid"
                            src={member.image}
                            alt="card image"
                          />
                        </p>
                        <h4 className="card-title">{member.name}</h4>
                        <p className="card-text">{member.designation}</p>
                        <ul className="list-inline">
                          {member.social.map((socialItem) => (
                            <li className="list-inline-item" key={socialItem.name}>
                              <a
                                className="social-icon text-xs-center"
                                target="_blank"
                                href={socialItem.link}
                              >
                                <i className={`fa ${socialItem.icon}`} aria-hidden="true"></i>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
             
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurMembers;
