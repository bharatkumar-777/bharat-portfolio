import athlete from './img/athlete-small-bharat.png';
import goodtimes from './img/goodtimes-small-bharat.png';
import theracer from './img/theracer-small-bharat.png';

import athlete2 from './img/athlete2.png';
import goodtimes2 from './img/good-times2.png';
import theracer2 from './img/the-racer2.jpg';

export const workState=()=>{
  return [
    {
        title: 'Amigo',
        mainImg: athlete,
        secondaryImg: athlete2,
        url: '/projects/amigo',
        tech: [
          {
            title: 'MERN',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
          {
            title: 'Google authentication',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
          {
            title: 'Material UI',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
          
        ],
        detail:`Using React, Node.js, Express & MongoDB I have developed a sweeping real-time social media
        application that allows users to post interesting events that happened in their lives, in which a
        user can do the functionality of Email login using JWT, OAuth Google login and have a lot of robust
        features like pagination searching and follows the principle of CRUD and user can also add
        comments on another post`
      },
      {
        title: 'Jibber Jabber',
        mainImg: goodtimes,
        url: '/projects/jibjab',
        secondaryImg: goodtimes2,
        tech: [
          {
            title: 'Real-time',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
          {
            title: 'getstream.io',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
          {
            title: 'react',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
        ],
        detail:`
        With Direct and Group Chats, emojis & Reactions, Built-in Gif support, the ability to edit & delete
        messages, specialized commands. 
        it is a full stack application similar to the discord but very light
        weight and a run on a real time environment with get stream.
        
        `
      },
      {
        title: 'Hunch',
        mainImg: theracer,
        url: '/projects/hunch',
        secondaryImg: theracer2,
        tech: [
          {
            title: 'React',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
          {
            title: 'web-design',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
          {
            title: 'future expand',
            description:
              '“Lorem Ipsum is simply dummy text of the printing and typesetting industry.”',
          },
        ],
        detail:`Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Dolor iure sunt itaque cupiditate.
         Molestiae quibusdam ab sint dolorem, modi vitae!`
      },


]

}