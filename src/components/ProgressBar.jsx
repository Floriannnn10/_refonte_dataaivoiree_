import { motion } from 'framer-motion';

const ProgressBar = ({ value, color = "orange", className = "" }) => {
  return (
    <div className={`w-full h-2 bg-gray-200 rounded-full overflow-hidden ${className}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: `${value}%` }}
        transition={{ duration: 1, delay: 0.2 }}
        className={`h-full bg-${color}-500 rounded-full`}
        style={{
          background: `var(--${color}-500, #f97316)` // Fallback to orange if color not found
        }}
      />
    </div>
  );
};

export default ProgressBar; 