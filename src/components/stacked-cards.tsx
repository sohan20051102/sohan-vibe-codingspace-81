import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

const StackedCard = React.forwardRef<HTMLDivElement, CardProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full h-full rounded-2xl bg-card shadow-lg",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
);
StackedCard.displayName = "StackedCard";

interface StackedCardsContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactElement<CardProps>[];
  cardHeight?: number;
}

interface StackedCardItemProps {
  index: number;
  card: React.ReactElement<CardProps>;
  cardCount: number;
  scrollYProgress: MotionValue<number>;
  cardHeight: number;
}

const StackedCardItem: React.FC<StackedCardItemProps> = ({
  index,
  card,
  cardCount,
  scrollYProgress,
  cardHeight,
}) => {
  const y = useTransform(
    scrollYProgress,
    [index / cardCount, (index + 0.5) / cardCount, (index + 1) / cardCount],
    ["50%", "0%", "-50%"]
  );
  const scale = useTransform(
    scrollYProgress,
    [index / cardCount, (index + 0.5) / cardCount, (index + 1) / cardCount],
    [0.8, 1, 0.8]
  );
  return (
    <motion.div
      key={index}
      className="absolute w-full"
      style={{
        transformOrigin: "center",
        y,
        scale,
        zIndex: index,
      }}
    >
      {React.cloneElement(card, {
        style: {
          height: `${cardHeight}px`,
          ...card.props.style,
        },
      })}
    </motion.div>
  );
};

export const StackedCards: React.FC<StackedCardsContainerProps> = ({
  children,
  className,
  cardHeight = 400,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const isMobile = useIsMobile();

  const cards = React.Children.toArray(children) as React.ReactElement<CardProps>[];
  const cardCount = cards.length;

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: isMobile ? `${cardCount * 60}vh` : `${cardCount * 100}vh` }}
      {...props}
    >
      <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center">
        {cards.map((card, index) => (
          <StackedCardItem
            key={index}
            index={index}
            card={card}
            cardCount={cardCount}
            scrollYProgress={scrollYProgress}
            cardHeight={cardHeight}
          />
        ))}
      </div>
    </div>
  );
};

export { StackedCard };
