import React from "react";
import Image, { StaticImageData } from "next/image";

export default function About() {
  return (
    <section id="about" className="dark-bg">
      <div className="flex">
        <div className="flex-full">
          <AboutCard
            title="UX/UI Design"
            icon="/icons/design.svg"
            description="I create design  products with unique ideas."
            projects={5}
          />
          <AboutCard
            title="Web Design"
            icon="/icons/code.svg"
            description="I develop Web Applications with coding super smooth."
            projects={15}
          />
          <AboutCard
            title="Mobile"
            icon="/icons/phone.svg"
            description="I develop cross-platform mobile applications."
            projects={4}
          />
        </div>

        <div className="flex-full about-text">
          <h5 className="gray">Introduce</h5>
          <h1 className="white">Hello, I&#39;m Agash Varatharasa</h1>
          <h3 className="white">
            Designer needs to see the creation as a design first to prove others
            !
          </h3>
          <p className="gray">
            Hello I'm a full stack developer with expertise in web and mobile
            application development. I specialize in developing user-friendly
            applications that are easy to use and visually appealing. My skills
            include proficiency in HTML, CSS, JavaScript, React, Node.js, and
            various database technologies. With a passion for problem-solving, I
            can troubleshoot issues that arise in different components of the
            application. <br></br>
            <br></br>I am experienced in working with other developers,
            designers, and stakeholders to deliver high-quality applications
            that meet the desired specifications. My ultimate goal is to create
            innovative and valuable applications that deliver exceptional user
            experiences.
          </p>
        </div>
      </div>

      {/* <div className="flex partners justify-space">
        <Image
          src="/images/partners/wallety.png"
          height={45}
          width={180}
          alt="wallety"
        />
        <Image
          src="/images/partners/artisty.png"
          height={45}
          width={180}
          alt="artisty"
        />
        <Image
          src="/images/partners/khedma-lik.png"
          height={45}
          width={180}
          alt="khedma-lik"
        />
        <Image
          src="/images/partners/directy.png"
          height={45}
          width={180}
          alt="directy"
        />
        <Image
          src="/images/partners/telefy.png"
          height={45}
          width={180}
          alt="telefy"
        />
      </div> */}
    </section>
  );
}

type Props = {
  title: string;
  icon: string | StaticImageData;
  description: string;
  projects: number;
};

function AboutCard({ title, icon, description, projects }: Props) {
  return (
    <div className="light-bg about-card">
      <div className="flex justify-space">
        <h3 className="green">{title}</h3>
        <Image src={icon} width={28} height={28} alt={title} />
      </div>
      <p className="white">{description}</p>
      <span className="gray">{projects.toString()} projects</span>
    </div>
  );
}
