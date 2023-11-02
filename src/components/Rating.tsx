import { useState } from "react";
import { RiStarFill, RiStarLine } from "react-icons/ri";

type RatingProps = {
  setRating: React.Dispatch<React.SetStateAction<number | null>>;
};

const Rating = ({ setRating }: RatingProps) => {
  const maxStars = 5;
  const [stars, setStars] = useState<number[]>([]);

  const Star = ({ index }: { index: number }) => {
    return stars.includes(index) ? <RiStarFill /> : <RiStarLine />;
  };

  const handleStarClick = (num: number) => {
    let array: number[] = [];
    for (let index = 0; index <= [...Array(num)].length; index++) {
      array.push(index);

      setStars(array);
      setRating(array.length);
    }
  };

  return (
    <div className="flex items-center justify-center gap-4">
      {[...Array(maxStars)].map((_, index) => (
        <button
          className="text-[25px] text-yellow-600"
          key={index}
          onClick={() => handleStarClick(index)}
        >
          <Star index={index} />
        </button>
      ))}
    </div>
  );
};

export default Rating;
