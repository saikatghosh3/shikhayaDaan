import Flashcard from './Flashcard'

export default function BanglaSection() {

  const sorborno = [
    { character: 'অ', name: 'অজগর' },
    { character: 'আ', name: 'আম' },
    { character: 'ই', name: 'ইলিশ' },
    { character: 'ঈ', name: 'ঈগল' },
    { character: 'উ', name: 'উট' },
    { character: 'ঊ', name: 'ঊষা' },
    { character: 'ঋ', name: 'ঋষি' },
    { character: 'এ', name: 'একতারা' },
    { character: 'ঐ', name: 'ঐরাবত' },
    { character: 'ও', name: 'ওল' },
    { character: 'ঔ', name: 'ঔষধ' },
  ]

  const banjonborno = [
    { character: 'ক', name: 'কাক' },
    { character: 'খ', name: 'খরগোশ' },
    { character: 'গ', name: 'গরু' },
    { character: 'ঘ', name: 'ঘোড়া' },
    { character: 'ঙ', name: 'ব্যাঙ' },

    { character: 'চ', name: 'চাঁদ' },
    { character: 'ছ', name: 'ছাতা' },
    { character: 'জ', name: 'জাহাজ' },
    { character: 'ঝ', name: 'ঝিনুক' },
    { character: 'ঞ', name: 'পাঞ্জা' },

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