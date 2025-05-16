'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import tutorMel from '../../../public/tutorMel.png'
import tutorChico from '../../../public/tutorChico.jpg'
import tutorKatrina from '../../../public/tutorKatrina.png'
import Image from 'next/image'


const testimonials = [
  {
    content: "Desde que passei a levar a Mel para a You Pet, ela passou ter menos queda de pelo e voltar  do pet shope cheirosa e totalmente satisfeita. Estou impressionada com o atendimento excelente dos profissionais que a trataram muito bem. ",
    author: "Amanda Oliveira",
    role: "Tutora da Mel",
    image: tutorMel,
  },
  {
    content: "Atendimento excelente, o Chico sempre foi teimoso para tomar banho e escovar os dentes, dentes desde está bem mais obediente em relação a isso.",
    author: "Gabriel Brandão",
    role: "Tutor do Chico",
    image: tutorChico,

  },
  {
    content: "Excelente banho e corte de unhas, exatamente o que a Katrina estava precisando, suas unhas estavam grades e nunca consegui cortar.",
    author: "Gerson Brandão",
    role: "Tutor da Katrina",
    image: tutorKatrina,
  },
]


export function Testimonials() {

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
  })

  function scrollPrev() {
    emblaApi?.scrollPrev();
  }
  function scrollNext() {
    emblaApi?.scrollNext();
  }
  return (
    <section className="bg-[#FFD449] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold  text-center mb-12">Depoimentos dos nossos clientes</h2>
        
        <div className="relative max-w-4xl mx-auto" data-aos="flip-right" data-aos-delay="100">
          <div className='overflow-hidden' ref={emblaRef}>
            <div className='flex'>
              {testimonials.map((item, index) => (
                <div key={index} className='flex-[0_0_100%] min-w-0 px-3'>
                  <article className='bg-[#1e293b] text-white rounded-2xl p-6 space-y-4 h-full flex
                  flex-col'>
                    <div className='flex flex-col items-center text-center space-y-4 '>
                      <div className='w-24 h-24 relative'>
                        <Image
                          src={item.image}
                          alt={item.author}
                          fill
                          sizes='96px'
                          className='object-cover rounded-full'
                        />
                      </div>
                      
                      <p className='text-gray-200 '>{item.content}</p>
                      
                      <div>
                          <p className='font-bold'>{item.author}</p>
                          <p className='text-sm text-gray-400'>{item.role}</p>
                      </div>
                      
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
          <button
            className='w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg absolute left-3 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
            onClick={scrollPrev}
          >
            <ChevronLeft
              className='w-6 h-6 text-gray-600'
            />
          </button>
          <button className='w-10 h-10 bg-white flex items-center justify-center rounded-full shadow-lg absolute 
           -right-7 -translate-y-1/2 -translate-x-1/2 top-1/2 z-10'
                  onClick={scrollNext}        
          >
            <ChevronRight
              className='w-6 h-6 text-gray-600'
              
            />
          </button> 
        </div>
      </div>
    </section>
  )
}