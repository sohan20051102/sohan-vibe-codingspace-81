import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { cn } from "@/lib/utils";

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
  stackGap?: number;
  scaleFactor?: number;
}

export const StackedCards: React.FC<StackedCardsContainerProps> = ({
  children,
  className,
  cardHeight = 400,
  stackGap = 20,
  scaleFactor = 0.05,
  ...props
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cards = React.Children.toArray(children) as React.ReactElement<CardProps>[];

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: `${cards.length * cardHeight + (cards.length - 1) * stackGap}px` }}
      {...props}
    >
      <div className="sticky top-1/4 -translate-y-1/4">
        {cards.map((card, index) => {
          const scale = useTransform(
            scrollYProgress,
            [index / cards.length, (index + 1) / cards.length],
            [1, 1 - (cards.length - 1 - index) * scaleFactor]
          );

          const y = useTransform(
            scrollYProgress,
            [index / cards.length, (index + 1) / cards.length],
            [0, -stackGap * (cards.length - 1 - index)]
          );

          return (
            <motion.div
              key={index}
              className="absolute w-full"
              style={{
                transformOrigin: "center",
                scale,
                y,
                zIndex: cards.length - index,
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
        })}
      </div>
    </div>
  );
};

export { StackedCard };
