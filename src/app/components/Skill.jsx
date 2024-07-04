import Image from 'next/image';
import React from 'react';

const Skill = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Skills
      </h2>
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 max-w-xl mx-auto">
          <div className="flex items-center justify-center">
            <Image src="/images/projects/react-svgrepo-com.svg" alt="React" width={10} height={10} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/js-svgrepo-com (1).svg" alt="javaScript" width={10} height={10} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/tailwind.png" alt="Tailwind CSS" width={100} height={100} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/firebase-svgrepo-com.svg" alt="Firebase" width={100} height={100} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/html-5-svgrepo-com.svg" alt="HTML" width={100} height={100} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/css-3-svgrepo-com.svg" alt="CSS" width={100} height={100} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/bootstrap-svgrepo-com.svg" alt="Bootstrap" width={100} height={100} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/git-svgrepo-com.svg" alt="Git" width={100} height={100} className="w-16 h-16" />
          </div>
          <div className="flex items-center justify-center">
            <Image src="/images/projects/github-color-svgrepo-com.svg" alt="Github" width={100} height={100} className="w-16 h-16" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;