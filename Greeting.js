const cardingstyle3 = {
    border: '2px solid pink',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'cursive',
    boxShadow: '5px 5px 15px purple'

};

const Greeting = () => {
    return (
        <div style={cardingstyle3}>
            <p>Hello EVERYONE!!</p>
            <p>how are you ???</p>
            <p>have a nice day</p>
        </div>
    );
};

export default Greeting;