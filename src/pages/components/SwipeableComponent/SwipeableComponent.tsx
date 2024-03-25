
import { useSwipeable } from 'react-swipeable';

const SwipeableComponent: React.FC = () => {
  const handlers = useSwipeable({
    onSwipedLeft: () => console.log('Swiped left!'),
    onSwipedRight: () => console.log('Swiped right!'),
  });

  return (
    <div {...handlers}>
      {/* Your content here */}
    </div>
  );
};

export default SwipeableComponent;
