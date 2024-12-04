import { FC } from 'react';
import { ArrowUpRight, ArrowDownRight, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';

interface RatingCardProps {
  title: string;
  rating: string;
  trend: 'up' | 'down' | 'stable';
  description: string;
}

const RatingCard: FC<RatingCardProps> = ({ title, rating, trend, description }) => {
  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <ArrowUpRight className="w-5 h-5 text-success-500" />;
      case 'down':
        return <ArrowDownRight className="w-5 h-5 text-danger-500" />;
      default:
        return <Minus className="w-5 h-5 text-gray-500" />;
    }
  };

  const getRatingColor = (rating: string) => {
    if (rating.startsWith('A')) return 'text-success-600';
    if (rating.startsWith('B')) return 'text-warning-600';
    if (rating.startsWith('C')) return 'text-danger-600';
    return 'text-gray-900';
  };

  return (
    <div className="bg-white rounded-xl shadow-card p-6 border border-gray-100 hover:border-primary-100 transition-colors">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium text-gray-900">{title}</h3>
        {getTrendIcon()}
      </div>
      <div className="mt-4">
        <span className={cn("text-3xl font-bold", getRatingColor(rating))}>
          {rating}
        </span>
      </div>
      <p className="mt-2 text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default RatingCard;