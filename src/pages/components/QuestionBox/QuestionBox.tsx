import { Button, Group, Text, Collapse, Box, Flex, Blockquote } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useEffect } from 'react';

type QuestionBoxProps = {
  question: string;
  answer: string;
};
const QuestionBox: React.FC<QuestionBoxProps> = ({
  question,
  answer,
}: QuestionBoxProps) => {
  const [opened, { toggle }] = useDisclosure(false);

  useEffect(() => {
    console.log({ opened });
    if (opened) {
      toggle();
    }
  }, [question, answer]);

  return (
    <Flex direction="column" align="center" gap={'1em'}>
      <Group justify="center">
        <Button variant="light" size="xl" onClick={toggle} color='#b344fb'>{question}</Button>
        </Group>
        <Collapse in={opened} transitionDuration={0}>
        <Button variant="outline" onClick={toggle} color='#b344fb'>{answer}</Button>
        </Collapse>

    </Flex>
  );
};

export default QuestionBox;
