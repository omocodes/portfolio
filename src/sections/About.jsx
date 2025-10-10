import { useState } from 'react';
import Globe from 'react-globe.gl';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('omodiale.codes@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.jpg" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Hi, I&apos;m Omolemo Diale</p>
              <p className="grid-subtext">
                I&apos;m a multiskilled software developer with a flair for creative problem-solving and a deep interest in building tech that makes everyday life easier. My journey into tech began unconventionally as a barber running a side hustle on campus. That hands-on hustle taught me discipline, customer engagement, and the importance of accessible services, ultimately inspiring me to create ZARLO, an Uber for beauty services. I bring solid experience in web development (React, Angular, Spring Boot), and CRM/ERP systems (Microsoft Dynamics 365, Bitrix24). I&apos;ve worked with a startup, volunteered at NGOs, and academic institutions, developing everything from internal tools to public-facing applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech Stack</p>
              <p className="grid-subtext">
                Microsoft Office Suite (Advanced), Microsoft Dynamics 365, Power BI, Power Platform, Dataverse, Bitrix24, SQL, Data 
Migration, ETL Processes, Data Cleansing & Transformation. Data Import/Export, Automation, Data Integration, 
Business Analysis, Process Automation, Dashboards & Reporting, Next.js, JWT, CORS, JUnit, 
Jest, RESTful APIs, Python, Django, Angular, WordPress, Java, Spring Boot, MongoDB, Agile Methodologies, Scrum, 
Atlassian, Docker, CI/CD, Agile/Scrum, Figma, Git, GitHub, Client Requirements Gathering, Technical Consulting, 
Solution Design, User Training, Problem-Solving, Analytical Thinking 
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: -25.7, lng: 28.2, text: "I'm here!", color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I&apos;m very flexible with time zone communications & locations</p>
              <p className="grid-subtext">I&apos;m based in Pretoria and Johannesburg, South Africa and open to remote work worldwide.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">My Passion for Development</p>
              <p className="grid-subtext">
                I love solving problems and building impactful solutions through code. Development isn&apos;t just my
                profession—it&apos;s my passion. I enjoy learning new technologies and contributing to meaningful projects.
              </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img
              src="assets/grid4.png"
              alt="grid-4"
              className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
            />

            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">omodiale.codes@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;