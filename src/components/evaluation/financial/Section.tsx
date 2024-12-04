import { ReactNode } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface SectionProps {
  title: string;
  children: ReactNode;
  isExpanded?: boolean;
  onToggle?: () => void;
}

export function Section({ title, children, isExpanded = true, onToggle }: SectionProps) {
  return (
    <div className="border rounded-lg">
      <button
        className="w-full px-4 py-3 flex justify-between items-center bg-gray-50 rounded-t-lg"
        onClick={onToggle}
      >
        <span className="text-lg font-medium">{title}</span>
        {onToggle && (isExpanded ? <ChevronUp /> : <ChevronDown />)}
      </button>
      
      {isExpanded && (
        <div className="p-4 space-y-6">
          {children}
        </div>
      )}
    </div>
  );
}