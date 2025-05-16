import golden from '../../../public/golden.png'
import royal from '../../../public/royal.png'
import primier from '../../../public/primier.png'
import natural from '../../../public/natural.png'
import whiskas from '../../../public/whiskas.png'
import Image from 'next/image'
import { IconBrandFacebook, IconBrandInstagram, IconBrandYoutube } from '@tabler/icons-react'

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Premier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
]

export function Footer() {
  return (
    <section className='bg-[#e84c3d] py-16 text-white'>
      <div className='container mx-auto px-4'>
        <div className='border-b border-white/20 pb-8'>
          <h4 className='text-3xl font-semibold mb-8 text-center'>Marcas que trabalhamos</h4>
          <div className='grid grid-cols-2 lg:grid-cols-6 gap-8' data-aos="fade-left" data-aos-delay="200">
          {brands.map((item,index) => (
            <div key={index} className='bg-white p-4 rounded-lg flex items-center justify-center' >
              <Image
                src={item.logo}
                alt={item.name}
                width={100}
                height={50}
                quality={100}
                style={{
                  width: "auto",
                  height: "auto"
                }}
                className='object-contain'

              />
            </div>
          ))}
        </div>
        </div>
        
        <footer className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5'
          data-aos="flip-up" data-aos-delay="200">
          <div>
            <h3 className='text-2xl font-semibold mb-2'>You Pet shop</h3>
            <p className='mb-4'>Cuidando do seu melhor amigo da melhor forma </p>
            <a
              href='https://wa.me/5583987765674?text= Olá pelo site e gostaria de mais informações'
              className='bg-green-500 px-4 py-2 rounded-md'
              target="_blank"
              >
              Contato via WhatsApp
            </a>
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Contato</h3>
            <p>Email: youpet@youpet.com</p>
            <p>Telefone: (83)988313113</p>
            <p>Avenida Josefa Taveira, 1097, Mangabeira, João Pessoa | PB</p>    
          </div>
          <div>
            <h3 className='text-2xl font-semibold mb-2'>Redes sociais</h3>
            <div className='flex gap-4'>
            <a
              href='#'>
                <IconBrandFacebook className='w-8 h-8'/>
            </a>
            <a
              href='#'>
                <IconBrandInstagram className='w-8 h-8'/>
            </a>
            <a
              href='#'>
                <IconBrandYoutube className='w-8 h-8'/>
            </a>

            </div>
            
          </div>
          

          
        </footer>

      </div>
    </section>
  )
}