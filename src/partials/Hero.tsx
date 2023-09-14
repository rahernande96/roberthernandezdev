import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi there, I'm <GradientText>Robert</GradientText> 👋
        </>
      }
      description={
        <>
          As a software developer with over 5 years of experience, my main focus
          has been on the backend, although I also have frontend skills. I am
          passionate about music and technology, and have worked on projects
          related to both areas. In addition, I have experience in cloud
          infrastructure and electronics projects.
          <br />
          My experience includes designing, developing and maintaining complex
          applications and systems in languages such as JavaScript, PHP and
          Python. I have worked on projects that require a solid understanding
          of databases such as SQL and NoSQL, and have implemented scalability
          and high availability solutions using technologies such as Docker and
          Kubernetes.
          <br />
          If you are looking for a software developer with backend experience
          and frontend skills, as well as experience in cloud and electronic
          infrastructure projects, I am available to consider exciting
          opportunities.
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="Avatar image"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="https://www.linkedin.com/in/rahernande96/" target="_blank">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="Linkedin icon"
            />
          </a>
        </>
      }
    />
  </Section>
);

export { Hero };
