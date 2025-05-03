import Image from "next/image"
import about1Img from '../../../public/about-1.png'
import about2Img from '../../../public/about-2.png'
import { Check, MapPin } from "lucide-react"
import { IconBrandWhatsapp } from "@tabler/icons-react"

export function About() {
  return (
    <section className="bg-[#FDF6ec] py-16">

      <div className="container px-4 mx-auto ">

        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            {/* Img 1 */}
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={about1Img}
                alt="Foto de uma pessoa com um Cachorro"
                fill
                quality={100}
                className="object-coverhover:scale-110 duration-300"
                priority
              />
            </div>
            {/* Img 2 */}
            <div className="absolute w-40 h-40 right-4 -bottom-8 border-4 overflow-hidden rounded-lg border-white">
              <Image
                src={about2Img}
                alt="Foto do Cachorro 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          {/* Div do sobre */}
          <div className="space-y-6 mt-10">
            <h2 className="text-4xl font-bold">Sobre</h2>

            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Unde, corrupti? Nisi illo id ea, vitae necessitatibus voluptatibus. Laudantium, eius est optio itaque, cupiditate minus, non sed aut modi totam eligendi?
            </p>

            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500"/>
                Aberto desde 2001
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500"/>
                Equipe com mais de 10 veterinários
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500"/>
                Qualidade é nossa prioridade
              </li>
            </ul>

            <div className="flex gap-2">
            <a href="#"
              className="bg-[#E84c3D] text-white flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <IconBrandWhatsapp size={28} color="white"/>
              Contato via Whatsapp
            </a>
            <a href="#"
              className="text-black flex items-center justify-center w-fit gap-2 px-4 py-2 rounded-md"
            >
              <MapPin className="text-black w-5 h-5"/>
              Endereço da Loja
            </a>
            </div>
          </div>

        </div>
        
      </div>
     
    </section>
  )
}
