import { useRef, useState, useEffect } from 'react';

import Movies from './components/Movies.jsx';
import { AVAILABLE_PLACES } from './data.js';
import Modal from './components/Modal.jsx';
import DeleteConfirmation from './components/DeleteConfirmation.jsx';
import logoImg from './assets/logo.png';
import { sortPlacesByDistance } from './loc.js';

function App() {
  const selectedPlace = useRef();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState([]);
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem('selectPlaces')) || [];
    console.log(storedIds);
    const storedPlaces = storedIds.map(id => AVAILABLE_PLACES.find((place) => place.id === id));
    setPickedPlaces(storedPlaces);
  }, []);
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const sortedPlaces = sortPlacesByDistance(AVAILABLE_PLACES, position.coords.latitude, position.coords.longitude);
      setAvailablePlaces(sortedPlaces);}
    );
  }, []);
  function handleStartRemovePlace(id) {
    setModalIsOpen(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setModalIsOpen(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storedIds = JSON.parse(localStorage.getItem('selectPlaces')) || [];
    if(!storedIds.includes(id)){
    localStorage.setItem('selectPlaces', JSON.stringify([id, ...storedIds]));
    }
  }

  function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    ); 
    setModalIsOpen(false);
    const storedIds = JSON.parse(localStorage.getItem('selectPlaces')) || [];
    localStorage.setItem('selectPlaces', JSON.stringify(storedIds.filter((id) => id != selectedPlace.current)))
  }

  return (
    <>
      <Modal open={modalIsOpen}>
       {modalIsOpen && (<DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />)}
      </Modal>

      <header>
        <img src={logoImg} alt="Stylized globe" />
        <h1>MoviePicker</h1>
        <p>
        Create your personal collection of movies you would like to watch or have already watched.
        </p>
      </header>
      <main>
        <Movies
          title="I'd like to watch ..."
          fallbackText={'Select the movies you would like to watch this week from the list below.'}
          movies={pickedPlaces}
          onSelectMovie={handleStartRemovePlace}
        />
        <Movies
          title="My Movie Picks"
          movies={AVAILABLE_PLACES}
          fallbackText="Sorting places by distance..."
          onSelectMovie={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
