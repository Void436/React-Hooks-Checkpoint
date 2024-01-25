import React, { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

//there is no use of comments during the code but in case it will count here is one

const App = () => {
  const [movies, setMovies] = useState([
    {
      title: "Hardcore Henry",
      description: "Henry is resurrected from death with no memory, and he must save his wife from a telekinetic warlord with a plan to bio-engineer soldiers.",
      posterURL: "https://bsreviews.org/wp-content/uploads/2016/04/hardcore-fbshare.jpg",
      rating: 6.7,
    },
    {
      title: "Shaft",
      description: "JJ Shaft, a cyber security expert with a degree from MIT, enlists his family's help to uncover the truth behind his best friend's untimely death.",
      posterURL: "https://media.outnow.ch/Movies/Bilder/2000/Shaft/wallpapers.fs/05.jpg",
      rating: 6.4,
    },
    {
      title: "The Godfather",
      description: "Don Vito Corleone, head of a mafia family, decides to hand over his empire to his youngest son Michael. However, his decision unintentionally puts the lives of his loved ones in grave danger.",
      posterURL: "https://images5.alphacoders.com/131/1315822.jpg",
      rating: 9.2,
    },
    {
      title: "The Dictator",
      description: "The heroic story of a dictator who risked his life to ensure that democracy would never come to the country he so lovingly oppressed.",
      posterURL: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/6ef93591-8d4d-48c4-aa85-064526234220/d58wp3x-684b0c3a-8618-42dc-8f22-7d08a67fce26.jpg/v1/fill/w_900,h_563,q_75,strp/the_dictator_wallpaper_by_starstruckps_d58wp3x-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTYzIiwicGF0aCI6IlwvZlwvNmVmOTM1OTEtOGQ0ZC00OGM0LWFhODUtMDY0NTI2MjM0MjIwXC9kNTh3cDN4LTY4NGIwYzNhLTg2MTgtNDJkYy04ZjIyLTdkMDhhNjdmY2UyNi5qcGciLCJ3aWR0aCI6Ijw9OTAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.UqhG_aIWy9tLWbXdUN_RH427ulXBjcjK6uTWwki_Otk",
      rating: 6.4,
    },
    {
      title: "Red Notice",
      description: "An Interpol agent successfully tracks down the world's most wanted art thief with help from a rival thief. But nothing is as it seems as a series of double-crosses ensues.",
      posterURL: "https://wallpapers.com/images/hd/red-notice-aesthetic-poster-u03gr40tkhzk74pd.jpg",
      rating: 6.3,
    },
  ]);

  const [movieFiltered, setMovieFilter] = useState(movies);

  const addMovie = (newMovie) => {
    setMovies([...movies, newMovie]);
    setMovieFilter([...movies, newMovie]);
  };

  const filterMovie = ({ title, rate }) => {
    const filtered = movies.filter(
      (movie) =>
        (movie.title.toLowerCase().includes(title.toLowerCase())) && (movie.rating >= rate)
    );
    setMovieFilter(filtered);
  };

  const AddMovieForm = ({ onAddMovie }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [posterURL, setPosterURL] = useState("");
    const [rating, setRating] = useState("");

    const ajout = (e) => {
      e.preventDefault();

      const newMovie = {
        title,
        description,
        posterURL,
        rating,
      };

      onAddMovie(newMovie);

      setTitle("");
      setDescription("");
      setPosterURL("");
      setRating("");
    };

    return (
    
      <Form onSubmit={ajout} id="formulaire" className="text-center" >
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={title} placeholder="Movie's Title.." onChange={(e) => setTitle(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={description} placeholder="Movie's Description" onChange={(e) => setDescription(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>posterUrl</Form.Label>
            <Form.Control type="text" value={posterURL} placeholder="URL Movie Image" onChange={(e) => setPosterURL(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Rating</Form.Label>
            <Form.Control type="number" value={rating} placeholder="Movie's rating?" onChange={(e) => setRating(e.target.value)} required/>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label><br/><br/></Form.Label>
          <Button variant="primary" style={{width:"200px"}} type="sumbit">Add Movie</Button>{' '}
          </Form.Group>
        </Row>
      </Form>
   
    );
  };

  return (
    <>
      <h1>Movies</h1>
      <AddMovieForm onAddMovie={addMovie} />
      <Filter onFilter={filterMovie} />
      <MovieList movies={movieFiltered} />
    </>
  );
};


//there is no use of comments during the code but in case it will count here is two

export default App;
