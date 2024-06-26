import Swiper, { Navigation, A11y, Autoplay, Pagination } from 'swiper'
import 'swiper/css/bundle'
import { buildRefs, getJSON } from '@/assets/scripts/helpers.js'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { gsap } from 'gsap'

gsap.registerPlugin(ScrollTrigger)

export default (sliderPosts) => {
  const refs = buildRefs(sliderPosts)
  const data = getJSON(sliderPosts)
  const swiper = initSlider(refs, data)
  return () => swiper.destroy()
}

function initSlider (refs, data) {
  const { options } = data
  const config = {
    modules: [Navigation, A11y, Autoplay, Pagination],
    a11y: options.a11y,
    slidesPerView: 1,
    spaceBetween: 20,
    navigation: {
      nextEl: refs.next,
      prevEl: refs.prev
    },
    // pagination: {
    //   el: refs.dots,
    //   type: 'bullets',
    //   clickable: true,
    // },
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20
      },
      1181: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    },
    on: {
      afterInit: () => {
        ScrollTrigger.refresh()
      }
    }
  }
  if (options.autoplay && options.autoplaySpeed) {
    config.autoplay = {
      delay: options.autoplaySpeed
    }
  }

  return new Swiper(refs.slider, config)
}
