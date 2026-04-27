const cardingstyle4 = {
    border: '2px solid pink',
    borderRadius: '12px',
    padding: '20px',
    maxWidth: '400px',
    margin: '20px auto',
    textAlign: 'center',
    fontFamily: 'cursive',
    boxShadow: '5px 5px 15px purple'
};

const list_of_items = [
    {
        "title": "A Guide to React's JSX",
        "url": "https://reactjs.org/docs/jsx-in-depth.html",
        "author": "React",
        "num_comments": 150,
        "points": 250,
        "objectID": 0
    },
    {
        "title": "Mastering JavaScript ES6",
        "url": "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import",
        "author": "MDN Web Docs",
        "num_comments": 200,
        "points": 300,
        "objectID": 1
    },
    {
        "title": "Understanding Redux State Management",
        "url": "https://redux.js.org/tutorials/essentials/part-1-overview-concepts",
        "author": "Redux",
        "num_comments": 120,
        "points": 180,
        "objectID": 2
    },
];

const List = () => {
    return (
        <div style={cardingstyle4}>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Comments</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {list_of_items.map((item) => (
                        <tr key={item.objectID}>
                            <td>
                                <a href={item.url}>{item.title}</a>
                            </td>
                            <td>{item.author}</td>
                            <td>{item.num_comments}</td>
                            <td>{item.points}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default List;