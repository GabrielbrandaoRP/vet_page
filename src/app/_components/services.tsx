'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronRight, ChevronLeft, Scissors,Syringe,CarTaxiFront, Hotel } from 'lucide-react'
import { IconBrandWhatsapp } from "@tabler/icons-react"


const services = [
  {
    title: "Banho & Tosa",
    description:
      "Inclui banho com produtos específicos para o tipo de pelagem e pele do animal, corte de unhas, limpeza das orelhas e tosa personalizada (higiênica ou estilizada).",
    duration: "R$60,00",
    icon: <Scissors />,
    linkText:
      "Olá, vi no site sobre banho e tosa e gostaria de mais informações.",
  },
  {
    title: "Hotel para Pets",
    description:
      "Hospedagem segura e confortável para o seu pet com monitoramento, alimentação balanceada e atividades recreativas.",
    duration: "R$120,00 a diária",
    icon: <Hotel />,
    linkText:
      "Olá, vi no site sobre o hotel para pets e gostaria de saber mais.",
  },
  {
    title: "Táxi Pet",
    description:
      "Transporte especializado e seguro para levar seu pet ao veterinário, pet shop ou outro destino com conforto e responsabilidade.",
    duration: "A partir de R$40,00",
    icon: <CarTaxiFront />,
    linkText:
      "Olá, vi no site sobre o táxi pet e gostaria de agendar um transporte.",
  },
  {
    title: "Consulta Veterinária",
    description:
      "Atendimento clínico com profissionais capacitados para cuidar da saúde e bem-estar do seu pet.",
    duration: "R$100,00",
    icon: <Syringe />,
    linkText:
      "Olá, vi no site sobre consulta veterinária e gostaria de agendar um horário.",
  },
];


export function Services() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
    slidesToScroll: 1,
    breakpoints: {
      "(min-width: 768px)" : {slidesToScroll: 3}
    }
  })
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12">Serviços</h2>
        
        <div className="relative">
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {services.map((item, index) => (
                <div key={index} className='flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3'>
                  <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex
                  flex-col'>
                    <div className='flex-1 flex items-center justify-between'>
                      <div>
                        <span className='text-3xl'>{item.icon}</span>
                        <div>
                          <h3>{item.title}</h3>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}