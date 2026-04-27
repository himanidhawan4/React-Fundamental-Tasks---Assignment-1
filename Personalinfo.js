
const cardingstyle1 = {
    border: '2px solid pink',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    boxShadow: '5px 5px 15px purple'
};

function Personalinfo() {
    return (
        <div style={cardingstyle1}>
            <h1> MY INFORMATIONS ARE:</h1>
            <p>NAME: HIMANI DHAWAN</p>
            <p>PROFESSION: STUDENT OF BTECH</p>
            <p>HOBBY: LISTENING MUSIC</p>
        </div>
    );
};
export default Personalinfo;