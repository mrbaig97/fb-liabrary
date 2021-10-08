import './App.css';
import { Box,Paper } from '@mui/material';
import PostImage from './components/Posts';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 488,
          height: 420,
        },
      }}
    >
      <Paper elevation={3} >
        <PostImage/>
        </Paper> 
    </Box>

      </header>
    </div>
  );
}

export default App;
