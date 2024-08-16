import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Image from "next/image";

interface Data {
  path: string;
  fit: string;
  aspect: string;
  location: string;
  description: string;
}

interface ShopCardProps {
  card: Data;
}

const ShopCard = ({ card } : ShopCardProps) => {
    const router = useRouter();

    return (
      <div className='flex flex-col h-full jost'>
        <div
          className={`h-full relative aspect-[${card.aspect}]`}
        >
          <motion.button
            whileHover={{opacity: .7}}
            onClick={() => router.push('/shop/' + card.location[0] + (card.path?.split('-').pop()?.replace('.webp', '') || ''))}
            >
            <Image
              src={card.path}
              alt={card.location + ' photo'} 
              layout='fill'
              objectFit='cover'
              className={card.fit}
            />
          </motion.button>
        </div>
        <div>$10</div>
      </div>
    );
  };

export default ShopCard