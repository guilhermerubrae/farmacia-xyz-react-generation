import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  return (
    <>
        <div className="flex justify-center bg-neutral-900 text-white">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>GENERATION FARM XYZ | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={40} weight='bold' />
              <InstagramLogo size={40} weight='bold' />
              <FacebookLogo size={40} weight='bold' />
            </div>
          </div>
        </div>
      </>
  )
}

export default Footer