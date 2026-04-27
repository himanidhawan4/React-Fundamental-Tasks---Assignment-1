import { useEffect, useState } from 'react';

const cardingstyle2 = {
  border: '2px solid pink',
  borderRadius: '12px',
  padding: '20px',
  maxWidth: '400px',
  margin: '20px auto',
  textAlign: 'center',
  fontFamily: 'cursive',
  boxShadow: '5px 5px 15px purple'
};

const formatDateTime = () => {
  const now = new Date();
  const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const months = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
    'September', 'October', 'November', 'December'
  ];
  const dayName = days[now.getDay()];
  const date = String(now.getDate()).padStart(2, '0');
  const monthName = months[now.getMonth()];
  const year = now.getFullYear();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  const seconds = String(now.getSeconds()).padStart(2, '0');
  return `${dayName}, ${date} ${monthName} ${year}, ${hours}:${minutes}:${seconds}`;
};

const DateComponent = () => {
  const [formatted, setFormatted] = useState(formatDateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setFormatted(formatDateTime());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div style={cardingstyle2}>
      <p>{formatted}</p>
    </div>
  );
};

export default DateComponent;
