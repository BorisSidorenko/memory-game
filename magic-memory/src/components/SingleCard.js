import './SingleCard.css';

export default function SingleCard({ card, handleChoice }) {
    const handleCoverClick = () => {
        handleChoice(card);
    }

    return (
        <div className="card">
            <div>
                <img 
                    className="front" 
                    src={card.src} 
                    alt="card front" 
                    onClick={handleCoverClick}
                />
                <img className="back" src="/img/cover.png" alt="card back" />
            </div>
        </div>
    )
}
