import styled, { keyframes } from "styled-components";

export const GradientBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const float1 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(10%, 10%) scale(1.1); }
`;

const float2 = keyframes`
  0% { transform: translate(0, 0) scale(1); }
  100% { transform: translate(-10%, -5%) scale(1.15); }
`;

const float3 = keyframes`
  0% { transform: translate(0, 0) scale(1); opacity: 0.3; }
  100% { transform: translate(-5%, 10%) scale(1.05); opacity: 0.6; }
`;

export const GradientSphere = styled.div`
  position: absolute;
  border-radius: 50%;
  filter: blur(60px);

  &.sphere-1 {
    width: 40vw;
    height: 40vw;
    background: linear-gradient(
      40deg,
      rgba(255, 0, 128, 0.8),
      rgba(255, 102, 0, 0.4)
    );
    top: -10%;
    left: -10%;
    animation: ${float1} 15s ease-in-out infinite alternate;
  }

  &.sphere-2 {
    width: 45vw;
    height: 45vw;
    background: linear-gradient(
      240deg,
      rgba(72, 0, 255, 0.8),
      rgba(0, 183, 255, 0.4)
    );
    bottom: -20%;
    right: -10%;
    animation: ${float2} 18s ease-in-out infinite alternate;
  }

  &.sphere-3 {
    width: 30vw;
    height: 30vw;
    background: linear-gradient(
      120deg,
      rgba(133, 89, 255, 0.5),
      rgba(98, 216, 249, 0.3)
    );
    top: 60%;
    left: 20%;
    animation: ${float3} 20s ease-in-out infinite alternate;
  }

  /* Ajuste para mobile: reduz o tamanho das esferas */
  @media (max-width: 768px) {
    &.sphere-1 {
      width: 50vw;
      height: 50vw;
      top: -20%;
      left: -20%;
    }

    &.sphere-2 {
      width: 60vw;
      height: 60vw;
      bottom: -30%;
      right: -20%;
    }

    &.sphere-3 {
      width: 40vw;
      height: 40vw;
      top: 70%;
      left: 10%;
    }
  }
`;

export const NoiseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.05;
  z-index: 5;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
`;

export const GridOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 40px 40px;
  background-image: linear-gradient(
      to right,
      rgba(255, 255, 255, 0.03) 1px,
      transparent 1px
    ),
    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
  z-index: 2;
`;

const pulse = keyframes`
  0% { opacity: 0.3; transform: translate(-50%, -50%) scale(0.9); }
  100% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
`;

export const Glow = styled.div`
  position: absolute;
  width: 40vw;
  height: 40vh;
  background: radial-gradient(circle, rgba(72, 0, 255, 0.15), transparent 70%);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  animation: ${pulse} 8s infinite alternate;
  filter: blur(30px);

  /* Ajuste para mobile: reduz o tamanho do glow */
  @media (max-width: 768px) {
    width: 50vw;
    height: 30vh;
  }
`;

export const ParticlesContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  pointer-events: none;

  .particle {
    position: absolute;
    background: white;
    border-radius: 50%;
    opacity: 0;
    pointer-events: none;
  }
`;

export const ContentContainer = styled.div`
  position: relative;
  z-index: 10;
  text-align: center;
  max-width: 600px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  /* Ajuste para mobile: reduz o padding e max-width */
  @media (max-width: 768px) {
    max-width: 90%;
    padding: 1rem;
  }
`;

export const ProfilePic = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  margin-bottom: 1rem;

  &:hover {
    transform: scale(1.1);
    border-color: rgba(255, 58, 130, 0.5);
    box-shadow: 0 0 15px rgba(255, 58, 130, 0.3);
  }

  /* Ajuste para mobile: reduz o tamanho da foto */
  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  background: linear-gradient(to right, #fff, #acacac);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.1);

  /* Ajuste para mobile: reduz o tamanho do título */
  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 1);
  margin-bottom: 2rem;
  font-weight: 500;

  /* Ajuste para mobile: reduz o tamanho e melhora a legibilidade */
  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;

  /* Ajuste para mobile: reduz o gap */
  @media (max-width: 768px) {
    gap: 1.5rem;
    margin-bottom: 1.5rem;
  }
`;

export const SocialLink = styled.a`
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  background: linear-gradient(
    90deg,
    rgba(255, 58, 130, 0.2),
    rgba(82, 51, 255, 0.2)
  );
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    color: white;
    background: linear-gradient(90deg, #ff3a82, #5233ff);
    box-shadow: 0 0 15px rgba(255, 58, 130, 0.5);
  }

  /* Ajuste para mobile: reduz o tamanho dos ícones */
  @media (max-width: 768px) {
    font-size: 1.5rem;
    width: 35px;
    height: 35px;
  }
`;

export const Button = styled.button`
  background: linear-gradient(90deg, #ff3a82, #5233ff);
  color: white;
  font-weight: 600;
  font-size: 1rem;
  padding: 0.8rem 3rem;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  box-shadow: 0 4px 20px rgba(255, 58, 130, 0.3);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 25px rgba(255, 58, 130, 0.4);
  }

  /* Ajuste para mobile: reduz o padding e fonte */
  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 2rem;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
  40% { transform: translateY(-10px); }
  60% { transform: translateY(-5px); }
`;

export const ScrollArrow = styled.div`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 1.5rem;
  color: rgba(255, 255, 255, 0.8);
  z-index: 10;
  animation: ${bounce} 2s infinite;
  transition: all 0.3s ease;

  &:hover {
    color: #ff3a82;
    transform: translateX(-50%) translateY(-5px);
  }

  /* Ajuste para mobile: mantém a posição e tamanho */
  @media (max-width: 768px) {
    bottom: 15px; /* Um pouco mais perto da borda em mobile */
    font-size: 1.2rem;
  }
`;
