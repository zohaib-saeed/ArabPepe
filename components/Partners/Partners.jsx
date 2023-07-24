import React from 'react'
import Image from 'next/image'
import Wrapper from '../shared/Wrapper'
import Heading from '../shared/Typography/Heading'

const Partners = () => {
  return (
    <div className='w-full'>
        <Wrapper id="partners" style="py-16">
          <div className="w-full flex flex-col items-center lg:justify-center justify-start gap-10">
           <Heading text="Partners" />
           <div className='w-full flex items-center justify-center xs:justify-between gap-9 flex-wrap'>
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/dexscreener.png" alt='' fill className='object-contain'/>
              </div>
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/dextools.jpeg" alt='' fill className='object-contain'/>
              </div>
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/geckoterminal.jpeg" alt='' fill className='object-contain'/>
              </div>
              <div className='w-[200px] sm:w-[250px] h-[100px] sm:h-[150px] flex items-center justify-center relative '>
                <Image src="/Assets/Partners/coinmarketcap.png" alt='' fill className='object-contain'/>
              </div>
            </div>
          </div>
        </Wrapper>
    </div>
  )
}

export default Partners