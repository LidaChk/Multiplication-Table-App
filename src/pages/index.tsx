import { createTheme, MantineProvider } from '@mantine/core';
import Main from './components/main/main';

const theme = createTheme({
  /** Put your mantine theme override here */
});

const Home = () => {
  return (
    <MantineProvider theme={theme}>
      <Main />
    </MantineProvider>
  );
};

export default Home;
