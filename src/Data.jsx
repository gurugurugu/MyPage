import { ImPencil } from "react-icons/im";
import { BsShop, BsHeart, BsWatch, BsStar } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";
import { TiDeviceDesktop } from "react-icons/ti";
import { TbSpeakerphone } from "react-icons/tb";

import project1 from "./assets/project1.jpg";
import project2 from "./assets/project2.jpg";
import project3 from "./assets/project3.jpg";
import project4 from "./assets/project4.jpg";
import project5 from "./assets/project5.jpg";
import project6 from "./assets/project6.jpg";
import project7 from "./assets/project7.jpg";

import blog1 from "./assets/blog1.jpg";
import blog2 from "./assets/blog2.jpg";
import blog3 from "./assets/blog3.jpg";
import blog4 from "./assets/blog4.jpg";



import { TfiHeadphoneAlt } from "react-icons/tfi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GoMailRead } from "react-icons/go";

export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  // {
  //   id: 2,
  //   text: "Projects",
  //   href: "projects",
  // },
  {
    id: 3,
    text: "About Me",
    href: "services",
  },
  {
    id: 4,
    text: "Blog",
    href: "blog",
  },
  // {
  //   id: 5,
  //   text: "Testimonials",
  //   href: "testimonials",
  // },
  {
    id: 6,
    text: "Contact",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <ImPencil />,
    title: "Who I am",
    context:"My name is Wei-Hsiang, I was born in Taipei, Taiwan."
  },
  {
    id: 2,
    icon: <BsShop />,
    title: "Where I come from",
    context:"I graduate from Soochow University in 2018. And I received a master's degree from National Taiwan University in 2021. Specialize in Machine Learning and Web Application Development."
  },
  {
    id: 3,
    icon: <TiDeviceDesktop />,
    title: "What I have achieved",
    context:"1.During my graduate studies, I quoted latest AI-related papers and completed the thesis of building ML model for predicting risk of new born genetic diseases.<2019-21> 2. Participation in the FinTech competition and obtain 40,000 NT in the competition awards.<2020>"
  },
  {
    id: 4,
    icon: <TbSpeakerphone/>,
    title: "Now",
    context:""
  },
];
// export const serviceFinishes = [
//   {
//     id: 1,
//     icon: <BsHeart />,
//     text: "Happy Clients",
//     amount: 566,
//   },
//   {
//     id: 2,
//     icon: <BsWatch />,
//     text: "Working Hours",
//     amount: 5335,
//   },
//   {
//     id: 3,
//     icon: <BsStar />,
//     text: "Awards Won",
//     amount: 2,
//   },
//   {
//     id: 4,
//     icon: <BiCoffeeTogo />,
//     text: "Coffee",
//     amount: 1189,
//   },

import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios'
// useEffect(() => {
//   Axios.post('http://127.0.0.1:3008/db/serviceinfo').then(res=>{
//     console.log("Getting from ::::", res.data)
//     setImmediate(res.data)
//   }).catch(err => console.log(err))

// }, [])


  
const getserviceFinishes = await axios.post(`https://mypage-server-9c0z.onrender.com/db/serviceinfo`).then(res=>{  
  console.log(res.data)
  res.data[0].icon = <BsHeart />
  res.data[1].icon = <BsWatch />
  res.data[2].icon = <BsShop />
  res.data[3].icon = <BiCoffeeTogo />
  return res.data})

  
export const serviceFinishes = getserviceFinishes;


export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "UI/UX", value: "ui/ux" },
  { id: 3, name: "Web Design", value: "web design" },
  { id: 4, name: "Marketing", value: "marketing" },
];

export const projects = [
  {
    id: 1,
    image: project1,
    value: "web design",
  },
  {
    id: 2,
    image: project2,
    value: "ui/ux",
  },
  {
    id: 3,
    image: project3,
    value: "ui/ux",
  },
  {
    id: 4,
    image: project4,
    value: "web design",
  },
  {
    id: 5, 
    image: project5,
    value: "ui/ux",
  },
  {
    id: 6,
    image: project6,
    value: "marketing",
  },
  {
    id: 7,
    image: project7,
    value: "marketing",
  },
];




const getblog= await axios.post(`https://mypage-server-9c0z.onrender.com/db/blog`).then(res=>{  
  res.data[0].image = blog1
  res.data[1].image = blog2
  return res.data})


export const blogs = getblog;


// export const blogs = [
//   {
//     id: 1,
//     image: blog1,
//     title: "What Skills Do You Need for Marketing in 2023?",
//   },
//   {
//     id: 2,
//     image: blog2,
//     title: "What is Web Design? A Comprehensive Guide",
//   },
//   {
//     id: 3,
//     image: blog3,
//     title: "100 Best Web Design Blogs You Must Read in 2023",
//   },
//   {
//     id: 4,
//     image: blog4,
//     title: "How to Learn Web Design at Home",
//   },
// ];



export const contacts = [
  {
    id: 1,
    icon: <TfiHeadphoneAlt />,
    text: "+886 0987707396",
  },
  // {
  //   id: 2,
  //   icon: <HiOutlineLocationMarker />,
  //   text: "28 Green Tower, street Name, New York, USA",
  // },
  {
    id: 3,
    icon: <GoMailRead />,
    text: "a556630702@gmail.com",
  },
];
