// PersonPage.js
import React from 'react';
import PersonList from '../components/PersonList'; // Adjust the import path based on your project structure
import jsonData from './../assets/data/dataset'

const PersonPage = () => {
  return (
    <div>
      <PersonList data={jsonData} />
    </div>
  );
};

export default PersonPage;
