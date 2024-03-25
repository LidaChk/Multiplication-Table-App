
import { createTheme, MantineProvider, Button } from '@mantine/core';
import Main from './components/main/main';

const theme = createTheme({
  /** Put your mantine theme override here */
});


export default function Home() {

  return (
    <MantineProvider>
      <Main />
    </MantineProvider>
  );
}
