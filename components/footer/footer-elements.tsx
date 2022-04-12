import React from 'react';


const FooterElements = ({items}:{items:string[]}) => {
  return (
    <div className='py-[1rem]'>
        {items.map(item => <p key={item} className='text-[0.8rem] py-[0.3rem]'>{item}</p>)}
       

    </div>
  )
}

export default FooterElements