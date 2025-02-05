import "./AfficheFilm.scss"

const AfficheFilm = ({ titre, date, image, pourcentage }) => {
    return (
        <div className="movie">
            <a href="#">
                <img
                    src={image}
                    alt={titre}
                    style={{ width: '220px', height: '330px', objectFit: 'cover' }}
                />
                <div className="score">
                    <p>{pourcentage}%</p>
                </div>
                <h5>{titre}</h5>
                <p>{date}</p>
            </a>
        </div>
    );
};

export default AfficheFilm;