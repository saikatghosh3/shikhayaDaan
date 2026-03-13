import Flashcard from './Flashcard'

import  image1 from '../assets/bangla/ajogor.png'
import  image2 from '../assets/bangla/aam.png'
import  image3 from '../assets/bangla/elish.png'
import  image4 from '../assets/bangla/egol.png'
import  image5 from '../assets/bangla/oot.png'
import  image6 from '../assets/bangla/usha.png'
import  image7 from '../assets/bangla/rishi.png'
import  image8 from '../assets/bangla/ektara.png'
import  image9 from '../assets/bangla/oirabot.png'
import  image10 from '../assets/bangla/oll.png'
import  image11 from '../assets/bangla/ousodh.png'
import  image12 from '../assets/bangla/kak.png'
import  image13 from '../assets/bangla/khorgosh.png'
import  image14 from '../assets/bangla/goru.png'
import  image15 from '../assets/bangla/ghora.png'
import  image16 from '../assets/bangla/bang.png'
import  image17 from '../assets/bangla/chad.png'
import  image18 from '../assets/bangla/chata.png'
import  image19 from '../assets/bangla/jahaz.png'
import  image20 from '../assets/bangla/jhinuk.png'
import  image21 from '../assets/bangla/bang.png'


export default function BanglaSection() {

 const sorborno = [
    { character: 'অ', name: 'অজগর', image: image1, description: 'অজগর (Python)' },
    { character: 'আ', name: 'আম', image: image2, description: 'আম (Mango)' },
    { character: 'ই', name: 'ইলিশ', image: image3, description: 'ইলিশ (Hilsa Fish)' },
    { character: 'ঈ', name: 'ঈগল', image: image4, description: 'ঈগল (Eagle)' },
    { character: 'উ', name: 'উট', image: image5, description: 'উট (Camel)' },
    { character: 'ঊ', name: 'ঊষা', image: image6, description: 'ঊষা (Dawn)' },
    { character: 'ঋ', name: 'ঋষি', image: image7, description: 'ঋষি (Sage)' },
    { character: 'এ', name: 'একতারা', image: image8, description: 'একতারা (Ektara)' },
    { character: 'ঐ', name: 'ঐরাবত', image: image9, description: 'ঐরাবত (Elephant)' },
    { character: 'ও', name: 'ওল', image: image10, description: 'ওল (Taro)' },
    { character: 'ঔ', name: 'ঔষধ', image: image11, description: 'ঔষধ (Medicine)' },
  ]

  const banjonborno = [
{ character: 'ক', name: 'কাক', image: image12, description: 'কাক (Crow)' },
    { character: 'খ', name: 'খরগোশ', image: image13, description: 'খরগোশ (Rabbit)' },
    { character: 'গ', name: 'গরু', image: image14, description: 'গরু (Cow)' },
    { character: 'ঘ', name: 'ঘোড়া', image: image15, description: 'ঘোড়া (Horse)' },
    { character: 'ঙ', name: 'ব্যাঙ', image: image16, description: 'ব্যাঙ (Frog)' },

    { character: 'চ', name: 'চাঁদ', image: image17, description: 'চাঁদ (Moon)' },
    { character: 'ছ', name: 'ছাতা', image: image18, description: 'ছাতা (Umbrella)' },
    { character: 'জ', name: 'জাহাজ', image: image19, description: 'জাহাজ (Ship)' },
    { character: 'ঝ', name: 'ঝিনুক', image: image20, description: 'ঝিনুক (Shell)' },
    { character: 'ঞ', name: 'পাঞ্জা', image: image21, description: 'পাঞ্জা (Paw)' },

    { character: 'ট', name: 'টমেটো' },
    { character: 'ঠ', name: 'ঠেলা' },
    { character: 'ড', name: 'ডাল' },
    { character: 'ঢ', name: 'ঢাক' },
    { character: 'ণ', name: 'বাণ' },

    { character: 'ত', name: 'তাল' },
    { character: 'থ', name: 'থালা' },
    { character: 'দ', name: 'দরজা' },
    { character: 'ধ', name: 'ধান' },
    { character: 'ন', name: 'নদী' },

    { character: 'প', name: 'পাখি' },
    { character: 'ফ', name: 'ফুল' },
    { character: 'ব', name: 'বই' },
    { character: 'ভ', name: 'ভালুক' },
    { character: 'ম', name: 'মাছ' },

    { character: 'য', name: 'যান' },
    { character: 'র', name: 'রথ' },
    { character: 'ল', name: 'লেবু' },

    { character: 'শ', name: 'শাপলা' },
    { character: 'ষ', name: 'ষাঁড়' },
    { character: 'স', name: 'সাপ' },
    { character: 'হ', name: 'হাতি' },

    { character: 'ড়', name: 'ঘড়ি' },
    { character: 'ঢ়', name: 'আঢ়ি' },
    { character: 'য়', name: 'ময়ূর' },

    { character: 'ৎ', name: 'উৎপাদন' },
    { character: 'ং', name: 'বাংলা' },
    { character: 'ঃ', name: 'দুঃখ' },
    { character: 'ঁ', name: 'চাঁদ' },
  ]

  return (
    <>
      <Flashcard
        items={sorborno}
        title="স্বরবর্ণ (Bangla Vowels)"
        categoryColor="#FF6B6B"
      />

      <Flashcard
        items={banjonborno}
        title="ব্যঞ্জনবর্ণ (Bangla Consonants)"
        categoryColor="#4ECDC4"
      />
    </>
  )
}