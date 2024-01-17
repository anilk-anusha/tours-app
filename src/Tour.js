import React, { useState } from 'react';
// Destructing all the properties from the object
const Tour = ({ id, image, info, name, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        {/* 
          Displaying info - toggle functionality 
          
          Condition -> if the Read More is True --> Display Information
          If the Read More id False -->`${info.substring(0, 100)}...`
          Displaying characters from 0 to 100 

          Button to Toggle - Read More/Show Less:
          readMore ? 'show less' : '  read more'
            => Checking the state value of ReadMore (by default its false) if its true/truthy - show less
            if not - read more

         */}
        <p>
          {readMore ? info : `${info.substring(0, 100)}...`}
          <button onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
