import Flashcard from './Flashcard'

export default function NumbersSection() {

  const banglaNumbers = [
    { character: '০', name: 'শূন্য' },
    { character: '১', name: 'এক' },
    { character: '২', name: 'দুই' },
    { character: '৩', name: 'তিন' },
    { character: '৪', name: 'চার' },
    { character: '৫', name: 'পাঁচ' },
    { character: '৬', name: 'ছয়' },
    { character: '৭', name: 'সাত' },
    { character: '৮', name: 'আট' },
    { character: '৯', name: 'নয়' },
    { character: '১০', name: 'দশ' },
  ]

  const englishNumbers = [
    { character: '0', name: 'Zero' },
    { character: '1', name: 'One' },
    { character: '2', name: 'Two' },
    { character: '3', name: 'Three' },
    { character: '4', name: 'Four' },
    { character: '5', name: 'Five' },
    { character: '6', name: 'Six' },
    { character: '7', name: 'Seven' },
    { character: '8', name: 'Eight' },
    { character: '9', name: 'Nine' },
    { character: '10', name: 'Ten' },
  ]

  return (
    <>
      <Flashcard
        items={banglaNumbers}
        title="বাংলা সংখ্যা"
        categoryColor="#FF6B6B"
      />

      <Flashcard
        items={englishNumbers}
        title="English Numbers"
        categoryColor="#4ECDC4"
      />
    </>
  )
}