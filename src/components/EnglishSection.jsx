import Flashcard from './Flashcard'

export default function EnglishSection() {
  const englishItems = [
    { character: 'A', name: 'Apple' },
    { character: 'B', name: 'Ball' },
    { character: 'C', name: 'Cat' },
    { character: 'D', name: 'Dog' },
    { character: 'E', name: 'Elephant' },
    { character: 'F', name: 'Fish' },
    { character: 'G', name: 'Grapes' },
    { character: 'H', name: 'House' },
    { character: 'I', name: 'Ice Cream' },
    { character: 'J', name: 'Jellyfish' },
    { character: 'K', name: 'Kite' },
    { character: 'L', name: 'Lion' },
    { character: 'M', name: 'Monkey' },
    { character: 'N', name: 'Nest' },
    { character: 'O', name: 'Orange' },
    { character: 'P', name: 'Penguin' },
    { character: 'Q', name: 'Queen' },
    { character: 'R', name: 'Rainbow' },
    { character: 'S', name: 'Sun' },
    { character: 'T', name: 'Tiger' },
    { character: 'U', name: 'Umbrella' },
    { character: 'V', name: 'Violin' },
    { character: 'W', name: 'Whale' },
    { character: 'X', name: 'Xylophone' },
    { character: 'Y', name: 'Yo-yo' },
    { character: 'Z', name: 'Zebra' },
  ]

  return (
    <Flashcard
      items={englishItems}
      title="English Alphabet"
      categoryColor="#FFB347"
    />
  )
}
