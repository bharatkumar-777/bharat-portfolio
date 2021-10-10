// import {motion} from 'framer-motion';

export const pageAnimation= 
{
    hidden:{
        opacity: 0,
        y:300,
    },
    show:
    {
        opacity: 1,
        y:0,
        transition:
        {
            duration: 0.7,
            ease:"easeOut",
            when:"beforeChildren",
            staggerChildren:0.25,
        }
    },
    exit:
    {
        opacity: 0,
        y:300,
        transition:
        {
            duration: 0.5,
            ease:"easeIn",
            
        }
    
        
    }
    
}

export const titleAnim =
{
        hidden:
        {
            y:200,
            opacity: 0,
        },
        show:
        {
            y:0,
            opacity: 1,
            transition:
            {
                duration: 0.5,
                ease:"easeOut",
               
            }
        }
}

export const fade =
{
  hidden:{opacity: 0},
  show:
    {
        opacity:1, 
        transition: {
            duration:0.6,
            ease:"easeOut",
            staggerChildren:0.4
        
        },

    },
}

export const zoomAnim = 
{
    hidden:
    {
        opacity: 0,
        scale:1.8,
    },
    show:
    {
        opacity: 1,
        scale:1,
        transition: 
        {
            duration:0.75,
            ease:"easeOut",
        }
    }

}

export const slider=
{
    hidden:
    {
        width:"0%",
    },
    show:
    {
        width:"100%",
        transition:
        {
            duration:1,
            ease:"easeOut",
        }
    }
}