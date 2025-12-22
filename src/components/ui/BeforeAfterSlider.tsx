import { useState } from 'react';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  caption?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = 'Before',
  afterLabel = 'After',
  caption,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max((x / rect.width) * 100, 0), 100);
    setSliderPosition(percentage);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  return (
    <div className="space-y-4">
      <div
        className="relative w-full aspect-[16/10] md:aspect-video rounded-2xl overflow-hidden cursor-ew-resize select-none shadow-xl border border-border/50"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img
          src={afterImage}
          alt={afterLabel}
          className="absolute inset-0 w-full h-full object-cover"
          draggable={false}
        />

        {/* Before Image (Clipped) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <img
            src={beforeImage}
            alt={beforeLabel}
            className="absolute inset-0 w-full h-full object-cover"
            style={{ 
              width: `${100 / (sliderPosition / 100)}%`,
              maxWidth: 'none'
            }}
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-primary shadow-lg shadow-primary/50"
          style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
        >
          {/* Slider Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-primary rounded-full shadow-xl shadow-primary/40 flex items-center justify-center border-2 border-background">
            <div className="flex gap-1">
              <div className="w-0.5 h-5 bg-primary-foreground/80 rounded-full" />
              <div className="w-0.5 h-5 bg-primary-foreground/80 rounded-full" />
            </div>
          </div>
        </div>

        {/* Labels */}
        <div className="absolute top-4 left-4 px-4 py-2 bg-foreground/90 text-background text-xs font-semibold rounded-full tracking-wide uppercase">
          {beforeLabel}
        </div>
        <div className="absolute top-4 right-4 px-4 py-2 bg-primary text-primary-foreground text-xs font-semibold rounded-full tracking-wide uppercase">
          {afterLabel}
        </div>
      </div>
      
      {caption && (
        <p className="text-center text-sm text-muted-foreground italic">
          {caption}
        </p>
      )}
    </div>
  );
}