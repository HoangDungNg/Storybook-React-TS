import { CustomButton, CustomStack } from './components';
import './App.css';

function App() {
  return (
    <>
      <CustomStack>
        <CustomButton color="pink" type="outlined">
          My Button
        </CustomButton>
        <CustomButton color="pink" type="outlined">
          My Button
        </CustomButton>
        <CustomButton color="pink" type="outlined">
          My Button
        </CustomButton>
      </CustomStack>
    </>
  );
}

export default App;
