import React, { useEffect } from "react";
import {
  GradientBackground,
  GradientSphere,
  NoiseOverlay,
  GridOverlay,
  Glow,
  ParticlesContainer,
  ContentContainer,
  ProfilePic,
  Title,
  Description,
  Button,
  SocialIcons,
  SocialLink,
  ScrollArrow,
} from "./Background.styles";
import { FaLinkedin, FaGithub, FaEnvelope, FaArrowDown } from "react-icons/fa";
import perfilImage from "../../assets/images/perfilteste.jpeg"; // Importação da imagem

function Background() {
  useEffect(() => {
    const particlesContainer = document.getElementById("particles-container");
    const particleCount = 80;

    const createParticle = () => {
      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 3 + 1;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      resetParticle(particle);
      particlesContainer.appendChild(particle);
      animateParticle(particle);
    };

    const resetParticle = (particle) => {
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.opacity = "0";
      return { x: posX, y: posY };
    };

    const animateParticle = (particle) => {
      const pos = resetParticle(particle);
      const duration = Math.random() * 10 + 10;
      const delay = Math.random() * 5;

      setTimeout(() => {
        particle.style.transition = `all ${duration}s linear`;
        particle.style.opacity = Math.random() * 0.3 + 0.1;
        const moveX = pos.x + (Math.random() * 20 - 10);
        const moveY = pos.y - Math.random() * 30;
        particle.style.left = `${moveX}%`;
        particle.style.top = `${moveY}%`;

        setTimeout(() => animateParticle(particle), duration * 1000);
      }, delay * 1000);
    };

    for (let i = 0; i < particleCount; i++) {
      createParticle();
    }

    const handleMouseMove = (e) => {
      const mouseX = (e.clientX / window.innerWidth) * 100;
      const mouseY = (e.clientY / window.innerHeight) * 100;

      const particle = document.createElement("div");
      particle.className = "particle";
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${mouseX}%`;
      particle.style.top = `${mouseY}%`;
      particle.style.opacity = "0.6";
      particlesContainer.appendChild(particle);

      setTimeout(() => {
        particle.style.transition = "all 2s ease-out";
        particle.style.left = `${mouseX + (Math.random() * 10 - 5)}%`;
        particle.style.top = `${mouseY + (Math.random() * 10 - 5)}%`;
        particle.style.opacity = "0";
        setTimeout(() => particle.remove(), 2000);
      }, 10);

      const spheres = document.querySelectorAll(".gradient-sphere");
      const moveX = (e.clientX / window.innerWidth - 0.5) * 5;
      const moveY = (e.clientY / window.innerHeight - 0.5) * 5;
      spheres.forEach((sphere) => {
        sphere.style.transform = `translate(${moveX}px, ${moveY}px)`;
      });
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <GradientBackground>
      <GradientSphere className="sphere-1" />
      <GradientSphere className="sphere-2" />
      <GradientSphere className="sphere-3" />
      <Glow />
      <GridOverlay />
      <NoiseOverlay />
      <ParticlesContainer id="particles-container" />
      <ContentContainer>
        <ProfilePic src={perfilImage} alt="Gabriel Fernandes" />
        <Title>Gabriel Fernandes</Title>
        <Description>
          Olá! Eu sou Gabriel Fernandes, um Desenvolvedor Full Stack apaixonado
          por criar soluções inovadoras e eficientes.
        </Description>
        <SocialIcons>
          <SocialLink
            href="https://www.linkedin.com/in/gabriel-fernandes-32015/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </SocialLink>
          <SocialLink
            href="mailto:gabrielfvp32015@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaEnvelope />
          </SocialLink>
          <SocialLink
            href="https://github.com/Gabriel-Fernandes-32015"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </SocialLink>
        </SocialIcons>
        <Button>Veja Meu Portfólio</Button>
      </ContentContainer>
      <ScrollArrow>
        <FaArrowDown />
      </ScrollArrow>
    </GradientBackground>
  );
}

export default Background;
