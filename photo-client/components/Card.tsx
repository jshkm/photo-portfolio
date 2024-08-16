import { useRouter } from 'next/router'
import { motion } from "framer-motion"
import Image from 'next/image'

interface Data {
  path: string;
  fit: string;
  aspect: string;
  location: string;
  description: string;
}

interface Card {
  photos: Data[];
  layout: number;
}

interface CardProps {
  card: Card;
}

const Card = ({ card }: CardProps) => {
  const router = useRouter();
  switch (card.layout) {
    //2 4x5 on top of square
    case 1:
      return (
        <div className="flex flex-col h-full aspect-[8/13] space-y-4">
          <div className='flex h-[37%] space-x-4'>
            <div className='h-full relative aspect-[4/5]'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[0].path}
                  alt={card.photos[0].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[0].fit}
                />
              </motion.button>
            </div>
            <div className='h-full relative aspect-[4/5]'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[1].path}
                  alt={card.photos[1].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[1].fit}
                />
              </motion.button>
            </div>
          </div>
          <div className='relative grow'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[2].location[0] + (card.photos[2].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[2].path}
                alt={card.photos[2].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[2].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // square on top of 2 4x5
    case 2:
      return (
        <div className="flex flex-col h-full aspect-[8/13] space-y-4">
          <div className='relative grow'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className='flex h-[37%] space-x-4'>
            <div className='h-full relative aspect-[4/5]'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[1].path}
                  alt={card.photos[1].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[1].fit}
                />
              </motion.button>
            </div>
            <div className='h-full relative aspect-[4/5]'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[2].location[0] + (card.photos[2].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[2].path}
                  alt={card.photos[2].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[2].fit}
                />
              </motion.button>
            </div>
          </div>
        </div>
      )

    //2 4x5 on top of rectangle
    case 3:
      return (
        <div className='flex flex-col h-full w-full aspect-[4/5] space-y-4'>
          <div className="flex h-1/2 aspect-[4/5] space-x-4">
            <div className='h-full w-1/2 relative'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[0].path}
                  alt={card.photos[0].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[0].fit}
                />
              </motion.button>
            </div>
            <div className='h-full w-1/2 relative'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[1].path}
                  alt={card.photos[1].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[1].fit}
                />
              </motion.button>
            </div>
          </div>
          <div className='h-1/2 w-full relative'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[2].location[0] + (card.photos[2].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[2].path}
                alt={card.photos[2].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[2].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    //rectangle on top of 2 4x5
    case 4:
      return (
        <div className='flex flex-col h-full w-full aspect-[4/5] space-y-4'>
          <div className='h-1/2 w-full relative'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className="flex h-1/2 aspect-[4/5] space-x-4">
            <div className='h-full w-1/2 relative'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[1].path}
                  alt={card.photos[1].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[1].fit}
                />
              </motion.button>
            </div>
            <div className='h-full w-1/2 relative'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[2].location[0] + (card.photos[2].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[2].path}
                  alt={card.photos[2].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[2].fit}
                />
              </motion.button>
            </div>
          </div>
        </div>
      )

    // big 5x4 on top of 2 small 5x4
    // case 5:
    //   return (
    //     <div className='flex flex-col h-full w-full aspect-[4/5] space-y-4'>
    //       <div className='w-full border-2 border-black aspect-[5/4]'></div>
    //       <div className="flex grow w-full space-x-4">
    //         <div className='h-full w-1/2 border-2 border-black'></div>
    //         <div className='h-full w-1/2 border-2 border-black'></div>
    //       </div>
    //     </div>
    //   )

    // 2 small 5x4 on top of big 5x4
    // case 6:
    //   return (
    //     <div className='flex flex-col h-full w-full aspect-[4/5] space-y-4'>
    //       <div className="flex grow w-full space-x-4">
    //         <div className='h-full w-1/2 border-2 border-black'></div>
    //         <div className='h-full w-1/2 border-2 border-black'></div>
    //       </div>
    //       <div className='w-full border-2 border-black aspect-[5/4]'></div>
    //     </div>
    //   )

    // 5x4 next to 4x5 on top of pano
    case 7:
      return (
        <div className="flex flex-col h-full aspect-[42/41] space-y-4">
          <div className='flex h-1/2 w-full space-x-4'>
            <div className='aspect-[5/4] relative'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[0].path}
                  alt={card.photos[0].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[0].fit}
                />
              </motion.button>
            </div>
            <div className='aspect-[4/5] relative'>
              <motion.button
                onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
                whileHover={{ opacity: .7 }}>
                <Image
                  src={card.photos[1].path}
                  alt={card.photos[1].location + ' photo'}
                  layout='fill'
                  objectFit='cover'
                  className={card.photos[1].fit}
                />
              </motion.button>
            </div>
          </div>
          <div className="h-1/2 w-full relative">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[2].location[0] + (card.photos[2].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[2].path}
                alt={card.photos[2].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[2].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // pano on top of 4x5 next to 5x4
    // case 8:
    //   return (
    //     <div className="flex flex-col h-full aspect-[42/41] border-2 border-black space-y-4">
    //       <div className="h-1/2 w-full border-black border-2"></div>
    //       <div className='flex h-1/2 w-full space-x-4'>
    //         <div className='aspect-[4/5] border-2 border-black'></div>
    //         <div className='aspect-[5/4] border-2 border-black'></div>
    //       </div>
    //     </div>
    //   )

    // 3 pano on top of each other
    case 9:
      return (
        <div className="flex flex-col h-full w-full aspect-[4/5] space-y-4">
          <div className="relative w-full h-1/3">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className="relative w-full h-1/3">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[1].path}
                alt={card.photos[1].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[1].fit}
              />
            </motion.button>
          </div>
          <div className="relative w-full h-1/3">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[2].location[0] + (card.photos[2].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[2].path}
                alt={card.photos[2].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[2].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // 2 rectangles on top of eachother
    case 10:
      return (
        <div className="flex flex-col h-full w-full aspect-[4/5] space-y-4">
          <div className="relative w-full h-1/2">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className="relative w-full h-1/2">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[1].path}
                alt={card.photos[1].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[1].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // 2 4x5 on top of each other
    case 11:
      return (
        <div className="flex flex-col h-full aspect-[2/5] space-y-4">
          <div className='h-1/2 relative'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className='h-1/2 relative'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[1].path}
                alt={card.photos[1].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[1].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // 4x5 on top of 5x4
    case 12:
      return (
        <div className="flex flex-col h-full aspect-[1/2] space-y-4">
          <div className="relative w-full aspect-[4/5]">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className="relative w-full aspect-[5/4]">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[1].path}
                alt={card.photos[1].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[1].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // 5x4 on top of 4x5
    case 13:
      return (
        <div className="flex flex-col h-full aspect-[1/2] space-y-4">
          <div className="relative w-full aspect-[5/4]">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className="relative w-full aspect-[4/5]">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[1].path}
                alt={card.photos[1].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[1].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // 2 5x4 on top of each other
    case 14:
      return (
        <div className="flex flex-col h-full aspect-[5/8] space-y-4">
          <div className="relative h-1/2">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className="relative h-1/2">
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[1].path}
                alt={card.photos[1].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[1].fit}
              />
            </motion.button>
          </div>
        </div>
      )

    // big 4x5
    case 15:
      return (
        <div className="flex flex-col h-full w-full aspect-[4/5] relative">
          <motion.button
            onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
            whileHover={{ opacity: .7 }}>
            <Image
              src={card.photos[0].path}
              alt={card.photos[0].location + ' photo'}
              layout='fill'
              objectFit='cover'
              className={card.photos[0].fit}
            />
          </motion.button>
        </div>
      )

    // big 5x4
    case 16:
      return (
        <div className="flex flex-col h-full aspect-[5/4] relative">
          <motion.button
            onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
            whileHover={{ opacity: .7 }}>
            <Image
              src={card.photos[0].path}
              alt={card.photos[0].location + ' photo'}
              layout='fill'
              objectFit='cover'
              className={card.photos[0].fit}
            />
          </motion.button>
        </div>
      )

    case 17:
      return (
        <div className='flex flex-col h-full aspect-[3/4] space-y-4'>
          <div className='w-full aspect-square relative'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[0].location[0] + (card.photos[0].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[0].path}
                alt={card.photos[0].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[0].fit}
              />
            </motion.button>
          </div>
          <div className='grow relative'>
            <motion.button
              onClick={() => router.push('/shop/' + card.photos[1].location[0] + (card.photos[1].path?.split('-').pop()?.replace('.webp', '') || ''))}
              whileHover={{ opacity: .7 }}>
              <Image
                src={card.photos[1].path}
                alt={card.photos[1].location + ' photo'}
                layout='fill'
                objectFit='cover'
                className={card.photos[1].fit}
              />
            </motion.button>
          </div>
        </div>
      )
  }
};

export default Card