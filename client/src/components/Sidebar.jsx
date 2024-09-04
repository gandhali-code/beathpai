import React from 'react';
import './Sidebar.css';

const Sidebar = ({ activeIndex }) => {
  const menuItems = [
    { id: 'responsibility', label: 'Responsibility', iconSrc: '/icons/resp.png' },
    { id: 'training', label: 'Training', iconSrc: '/icons/train.png' },
    { id: 'los', label: 'Line of Separation (LOS)', iconSrc: '/icons/los.png' },
    { id: 'pba', label: 'Perimeter Buffer Area (PBA)', iconSrc: '/icons/pba.png' },
    { id: 'personnel', label: 'Personnel', iconSrc: '/icons/personnel.png' },
    { id: 'wild-birds', label: 'Wild Birds, Rodents and Insects', iconSrc: '/icons/wildbirds.png' },
    { id: 'equipment', label: 'Equipment and Vehicles', iconSrc: '/icons/equipment.png' },
    { id: 'mortality', label: 'Mortality Disposal', iconSrc: '/icons/mortality.png' },
    { id: 'manure', label: 'Manure and Litter Management', iconSrc: '/icons/manure.png' },
    { id: 'replacement', label: 'Replacement Poultry', iconSrc: '/icons/replacement.png' },
    { id: 'water', label: 'Water Supplies', iconSrc: '/icons/water.png' },
    { id: 'feed', label: 'Feed and Replacement Litter', iconSrc: '/icons/feed.png' },
    { id: 'reporting', label: 'Reporting of Elevated Morbidity and Mortality', iconSrc: '/icons/reporting.png' },
    { id: 'auditing', label: 'Auditing', iconSrc: '/icons/auditing.png' },
  ];

  return (
    <div className="sidebar">
        <div className='sidebar-title'> 14 Biosecurity Principles</div>
      <ul className="sidebar-menu">
        {menuItems.map((item, index) => (
          <li
            key={item.id}
            className={`sidebar-item ${activeIndex === index ? 'active' : ''}`}
          >
            <img src={item.iconSrc} alt={item.label} className="sidebar-icon" />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
