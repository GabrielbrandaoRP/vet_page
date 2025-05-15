import { IconBrandWhatsapp } from "@tabler/icons-react";
import dogImg from '../../../public/hero-dog.webp'
import catImg from '../../../public/cat-hero.png'
import Image from 'next/image'


export function Hero() {
  return (
    <section className="bg-amber-300 text-white relative overflow-hidden">

      <div>
        <Image
          src={dogImg}
          alt="Foto do cachorro Hero"
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-60 lg:hidden"
        />
        <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4">

        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">
          <div className="space-y-6">

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
              Seu pet merece cuidado, carinho e atenção especial
            </h1>

            <p className="lg:text-lg">
              Oferecemos os melhores serviços para garantir o bem-estar e a felicidade do seu amigo de quatro patas.
            </p>

            <a href='https://wa.me/5583987765674?text= Olá pelo site e gostaria de mais informações'
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center
                justify-center gap-2 w-fit" target="_blank"
            >
            <IconBrandWhatsapp size={28}/>
              Contato via whatsapp
            </a>
          
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b> de desconto na primeira compra.
              </p>
              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catImg}
                    alt="Foto do gatão"
                    className="object-fill"
                    quality={100}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-full relative">
            <Image
              src={dogImg}
              alt="Foto do cachorro hero"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw"
              quality={100}
              priority
            />
          </div>

        </article>
      </div>

      
    </section>
  )
}