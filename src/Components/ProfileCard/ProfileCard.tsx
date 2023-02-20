import Image from "next/image";
import React from "react";
import DP from "../../../public/images/DP.jpeg";
import { BsFillPhoneVibrateFill, BsGithub, BsGlobe2 } from "react-icons/bs";
import { MdBloodtype } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { RiLinkedinFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";
import Link from "next/link";

const teams = [
  {
    id: 1,
    name: "MD Habibur Rahaman",
    designation: "Software Engineer",
    phone: "+880 1521-320912",
    blood: "A+",
    email: "habiburnobel@gmail.com",
    linkedin: "https://www.linkedin.com/in/habibur-rahaman-nobel/",
    facebook: "https://www.facebook.com/habibur.rahaman.nobel",
    github: "https://github.com/nobel7761",
    portfolio: "https://habibur-rahaman-portfolio.netlify.app/",
    description:
      "Humans need negligence and pity to survive. Whatever the urge or desire to do something, it comes from here. Which is called pursuit of absolute happiness.",
  },
];

const ProfileCard = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      {teams.map((member) => (
        <div
          key={member.id}
          className="w-1/4 rounded-md bg-[#0B162A] px-4 py-12 text-white shadow-[#0B162A] shadow-2xl"
        >
          <div className="flex justify-center mb-8">
            <div className="w-48 h-48 flex justify-center items-center rounded-full overflow-hidden bg-[#ADEFD1FF] border-4">
              <Image
                src={DP}
                alt="DP"
                width={500}
                height={500}
                className="rounded-full mt-6"
              />
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-3xl font-bold ">{member.name}</p>
            <p className="text-xl">{member.designation}</p>
            <p className="italic my-4">{member.description}</p>
          </div>

          <div className="px-4 text-base">
            <div className="flex gap-x-4 items-center my-1">
              <MdBloodtype className="text-xl text-white" />
              {member.blood}
            </div>

            <div className="flex gap-x-4 items-center my-1">
              <BsFillPhoneVibrateFill className="text-xl text-white" />
              {member.phone}
            </div>

            <div className="flex gap-x-4 items-center my-1">
              <HiOutlineMail className="text-xl text-white" />
              {member.email}
            </div>
          </div>

          <div className="px-4 mt-8 flex gap-x-4 justify-center items-center">
            {member.linkedin && (
              <Link href={member.linkedin} target="_blank">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#0077B5]">
                  <RiLinkedinFill className="text-xl" />
                </div>
              </Link>
            )}
            {member.facebook && (
              <Link href={member.facebook} target="_blank">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-[#4867AA]">
                  <FaFacebookF className="text-xl" />
                </div>
              </Link>
            )}

            {member.github && (
              <Link href={member.github} target="_blank">
                <BsGithub className="text-3xl" />
              </Link>
            )}

            {member.portfolio && (
              <Link href={member.portfolio} target="_blank">
                <div className="w-8 h-8 rounded-full flex justify-center items-center bg-white">
                  <BsGlobe2 className="text-xl text-blue-500" />
                </div>
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfileCard;
