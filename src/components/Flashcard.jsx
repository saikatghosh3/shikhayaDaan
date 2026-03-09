import { useState } from 'react'

export default function Flashcard({ items, title, categoryColor }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)

  const currentItem = items[currentIndex]

  const handleNext = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev + 1) % items.length)
  }

  const handlePrev = () => {
    setIsFlipped(false)
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length)
  }

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flashcard-container">
      <h2 className="flashcard-title">{title}</h2>

      <div className="flashcard-progress">
        <span>{currentIndex + 1} / {items.length}</span>
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${((currentIndex + 1) / items.length) * 100}%`, backgroundColor: categoryColor }}
          ></div>
        </div>
      </div>

      <div
        className={`flashcard ${isFlipped ? 'flipped' : ''}`}
        onClick={handleFlip}
        style={{ borderColor: categoryColor }}
      >
        <div className="flashcard-front">
          <span className="flashcard-text">{currentItem.character}</span>
          <p className="flashcard-hint">Click to reveal</p>
        </div>
        <div className="flashcard-back">
          <span className="flashcard-text-back">{currentItem.name}</span>
        </div>
      </div>

      <div className="flashcard-controls">
        <button className="control-button prev-button" onClick={handlePrev}>
          ← Previous
        </button>
        <button className="control-button flip-button" onClick={handleFlip}>
          Flip Card
        </button>
        <button className="control-button next-button" onClick={handleNext}>
          Next →
        </button>
      </div>

      <div className="card-items">
        {items.map((item, index) => (
          <div
            key={index}
            className={`card-item ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index)
              setIsFlipped(false)
            }}
            style={{
              backgroundColor: index === currentIndex ? categoryColor : '#f0f0f0',
            }}
          >
            {item.character}
          </div>
        ))}
      </div>
    </div>
  )
}
