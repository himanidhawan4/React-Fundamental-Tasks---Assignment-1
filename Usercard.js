const cardingstyle5 = {
    border: '2px solid pink',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'cursive',
    boxShadow: '5px 5px 15px purple'

};
const Usercard = ({name,age,email}) => {
    return (
        <div style={cardingstyle5} >
             <h2>Name:{name}</h2>
             <p>Age: {age}</p>
             <p>Email: {email}</p>
        </div>
    );
};

export default Usercard;