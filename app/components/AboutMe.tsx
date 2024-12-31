"use client";
import { HoverEffect } from "./UI/CardHoverEffect";

const AboutMe = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <HoverEffect items={Information} />
    </div>
  );
}
export const Information = [
  {
    title: "Independent worker",
    description:
      "I often work on projects alone but I am also willing to collaborate from other programmers, editors, and clients to help further improve my knowledge and skills.",
  },
  {
    title: "Adaptive skills",
    description:
      "I am aware that change is constant and there is nothing we can do about it. I can change certain aspects of myself regarding on the challenges and problems that a person might experience and adapt from its environment.",
  },
  {
    title: "Persistent Behavior",
    description:
      "I do not give up easily. If an error exists, I will find out nonstop on how to solve that particular problem. I also value what other people say to me wheather it is a positive or a negative comment, I will fulheartedly accept it.",
  },
  {
    title: "Approachable",
    description:
      "I might seem intimidating but I am very approachabe and is open to communicating with other people.",
  },
  {
    title: "Creative",
    description:
      "At most, I think differently from other people by creating materials that have the concept that is outside of the box.",
  },
  {
    title: "Gamer",
    description:
      "I love to explore and play different types of games in order to increase my collaborative activity and critical thinking.",
  },
];

export default AboutMe;