import { motion, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Card from './Card'

interface Data {
  path: string;
  fit: string;
  aspect: string;
  location: string;
  description: string;
}

interface CardType {
  photos: Data[];
  layout: number;
}

interface ScrollerProps {
  cards: CardType[];
}

const Scroller = ({cards} : ScrollerProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [index, setIndex] = useState(0)
  const [travel, setTravel] = useState(0)
  const [isTrackpad, setIsTrackpad] = useState(false)
  const distance = 200

  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const [prevWindowSize, setPrevWindowSize] = useState({
    width: 0,
    height: 0,
  });

  const cardsRef = useRef<HTMLDivElement>(null)
  const widthRef = useRef<HTMLDivElement>(null)

  interface WheelEventHandler {
    (event: WheelEvent): void;
  }

  interface eventProps {
    (event: React.WheelEvent<HTMLDivElement>): void;
  }

  useEffect(() => {
    const handleResize = () => {
      if (widthRef.current && cardsRef.current && (prevWindowSize.width > windowSize.width || prevWindowSize.height > windowSize.height) && Math.abs(index * distance) + distance +  widthRef.current.offsetWidth > cardsRef.current.offsetWidth) {
        setIndex((-cardsRef.current.offsetWidth + widthRef.current.offsetWidth) / distance)
      }
      
      setPrevWindowSize(windowSize)

      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [windowSize])

  useEffect(() => {
    const handleWheel: WheelEventHandler = (event) => {
      if (Math.abs(event.deltaX) > 0) {
        setIsTrackpad(true)
        setIndex(0)
      } else if (Math.abs(event.deltaY) > 0) {
        setIsTrackpad(false)
        widthRef.current?.scrollTo({
          left: 0,
          behavior: 'smooth'
        })
      }
      
      if (isHovered && !isTrackpad) {
        event.preventDefault();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [isHovered, isTrackpad]);

  useEffect(() => {
    setTravel(index*distance)
  }, [index])

  useEffect(() => {
    setIndex(0)
    setTravel(0)
  }, [cards])

  const animatePhotos: eventProps = (event) => {
    if (widthRef.current && cardsRef.current && !isTrackpad) {
      if (event.deltaY > 0) {
        if (Math.abs(index * distance) + distance +  widthRef.current.offsetWidth < cardsRef.current.offsetWidth) {
          setIndex(index - 1)
        } else {
          setIndex((-cardsRef.current.offsetWidth + widthRef.current.offsetWidth) / distance)
        }
        
      } else if (event.deltaY < 0) {
        if (index < 0) {
          setIndex(index + 1)
        } else {
          setIndex(0)
        }
      }
    }
  };

  return (
    <div 
      className="flex h-full w-full overflow-x-scroll scroller-scrollbar"
      ref={widthRef}
      >
      <motion.div
        className="flex h-full gap-4"
        ref={cardsRef}
        onWheel={animatePhotos}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ x: travel}}
        transition={{ type: 'spring', stiffness: 200, damping: 25 }}
        >
        {cards.map((card, i) => (
          <Card card={card} key={i} />
        ))}
      </motion.div>
    </div>
  );
};

export default Scroller;