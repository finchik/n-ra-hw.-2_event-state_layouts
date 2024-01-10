import React from 'react';
import './ListView.css';
import ShopItem from './ShopItem/ShopItem';

function ListView({ items }) { 
  let indexItem = 0;

  return (
    <div className='listView'>
      {items.map((item) => (
        <ShopItem item={item} key={indexItem++} />
      ))}
    </div>
  );
}

export default ListView;