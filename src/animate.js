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
            duration: 1,
            ease:"easeOut"
        }
    },
    exit:
    {
        opacity: 0,
        y:300,
        transition:
        {
            duration: 0.5,
            ease:"easeIn"
        }
    
        
    }
    
}

