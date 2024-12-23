'use client'
import React, { useState } from 'react';
import {  ThumbsUp, TrendingUp, Scale, GlassWaterIcon } from 'lucide-react';
import { H3 } from '../ui/typography';
import Image from 'next/image';

const CoreValues = () => {
  const [data] = useState({
    title: "Our Core Values",
    subtitle: "We live these values every day, in everything we do.",
    values: [
      {
        icon: '/assets/about/trophy.gif',
        title: "Do it well",
        description: "We believe in excellence in everything we do."
      },
      {
        icon: '/assets/about/thumbs.gif',
        title: "Make a difference",
        description: "We strive to create positive impacts."
      },
      {
        icon: '/assets/about/advantage.gif',
        title: "Go all in",
        description: "We are committed to putting our full effort into each task."
      },
      {
        icon: '/assets/about/reseller.gif',
        title: "Lead a balanced life",
        description: "We encourage a harmonious work-life balance for both employees and clients."
      }
    ]
  });

  const ValueCard = ({ icon: Icon, title, description }) => (
    <div className="bg-[#BAE8FF] border-neutral-600  bg-opacity-[0.2] p-6 rounded-xl shadow-lg flex items-start gap-4 transform transition-transform ">
      <Image width={400} height={600} src={Icon} alt={title} className="h-12 w-12 text-blue-600 mb-3" />
      <div>
        <h3 className="text-neutral-800 font-[600] text-bodybold mb-2">{title}</h3>
        <p className="text-neutral-600 font-[400] text-bodysmal">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="max-w-6xl bg-white rounded-[64px] mx-auto p-10 shadow-2xl">
      <div className="text-center mb-12">
        <H3 className="text-neutral-800 font-[600] mb-4">{data.title}</H3>
        <p className="text-bodymed text-neutral-600 font-[400]">{data.subtitle}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.values.map((value, index) => (
          <ValueCard key={index} {...value} />
        ))}
      </div>
    </div>
  );
};

export default CoreValues;