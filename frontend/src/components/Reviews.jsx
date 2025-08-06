import React from 'react';
import { motion } from 'framer-motion';
import pic1 from '../assets/images/pic1.png';
import pic2 from '../assets/images/pic2.png';
import pic3 from '../assets/images/pic3.png';
import pic4 from '../assets/images/pic4.png';

const reviews = [
  {
    id: 1,
    image: pic2,
    name: 'Thomas Duca',
    des: "The Law Firm I was connected to did an amazing job of handling a case for me. They were great at communicating with me. They were great at communicating with me every step of the way. They helped me get treatment, and I was very pleased with the eventual settlement of the case. The Law Firm is the perfect mix of a small firm's personal attention with the resources of a large firm. They answered emails and calls immediately. He made it clear that my job was to get treatment and recover, and his job was to handle the case and deal with the insurance companies. I am so happy that I hired The Law Firm I was connected to help me. Thank you.The Law Firm I was connected to was absolutely amazing. They fought for me every step of the way to get the settlement I needed. Kristen was the best person for me in my settlement...",
    rating: 4.5,
  },
  {
    id: 2,
    image: pic3,
    name: 'Craig M',
    des: "The Law Firm I was connected to has the most amazing and honest attorneys I have ever known. They truly care about you and work hard for you, making sure that you always feel comfortable and how they keep you updated on your situation with your case at all times. You never feel lost, and they don’t take too much time to answer your doubts. They will come to you if you need to! They always made me feel comfortable and important. I highly recommend them. They are good at what they do.Sincerely, Patrician Jones",
    rating: 5,
  },
  {
    id: 3,
    image: pic4,
    name: 'Michele Norman',
    des: "The Law Firm I was connected to has helped me with a life-altering ordeal. They have supported and guided me through my case to the very end...",
    rating: 3.5,
  },
  {
    id: 4,
    image: pic1,
    name: 'Patrician Jones',
    des: "The Law Firm I was connected to was absolutely amazing. They fought for me every step of the way to get the settlement I needed. Kristen was the best person for me in my settlement. She reassured me even when I was going through tough times with the pain that I was in and felt hopeless. She made sure that my needs were taken care of and I was receiving proper medical help. She made it a point that if she had to reach out to my work to explain the situation with them she would do so that I maintained my job position. In my opinion she was outstanding and if I had to go through this whole ordeal again I'd want her by my side.",
    rating: 4,
  },
];

const StarRating = ({ rating }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating - fullStars >= 0.5;

  return (
    <div className="flex gap-0.5 text-yellow-400 mb-0">
      {/* Full stars */}
      {[...Array(fullStars)].map((_, i) => (
        <svg
          key={`full-${i}`}
          className="w-5 h-5"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.278 3.934a1 1 0 00.95.69h4.146c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.278 3.934c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.278-3.934a1 1 0 00-.364-1.118L2.037 9.36c-.783-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.278-3.934z" />
        </svg>
      ))}

      {/* Half star */}
      {hasHalfStar && (
        <svg
          key="half-star"
          className="w-5 h-5"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <clipPath id="halfClipId">
              <rect width="10" height="20" />
            </clipPath>
          </defs>
          <path
            clipPath="url(#halfClipId)"
            fill="currentColor"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.278 3.934a1 1 0 00.95.69h4.146c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.278 3.934c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.278-3.934a1 1 0 00-.364-1.118L2.037 9.36c-.783-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.278-3.934z"
          />
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.278 3.934a1 1 0 00.95.69h4.146c.969 0 1.371 1.24.588 1.81l-3.357 2.44a1 1 0 00-.364 1.118l1.278 3.934c.3.921-.755 1.688-1.538 1.118l-3.357-2.44a1 1 0 00-1.176 0l-3.357 2.44c-.783.57-1.838-.197-1.538-1.118l1.278-3.934a1 1 0 00-.364-1.118L2.037 9.36c-.783-.57-.38-1.81.588-1.81h4.146a1 1 0 00.95-.69l1.278-3.934z"
          />
        </svg>
      )}
    </div>
  );
};

const Reviews = () => {
  return (
    <div className="bg-gray-100 px-4 py-12 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reviews.map((review, index) => (
          <motion.div
            key={review.id}
            className="bg-white rounded-lg shadow-md p-5 flex flex-col items-center text-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={review.image}
              alt={review.name}
              className="w-20 h-20 rounded-full object-cover mb-4"
            />
            <StarRating rating={review.rating} />
            <h3 className="font-semibold text-lg text-gray-800 mt-2 mb-1">
              {review.name}
            </h3>
            <p className="text-sm text-gray-700 leading-relaxed">{review.des}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
