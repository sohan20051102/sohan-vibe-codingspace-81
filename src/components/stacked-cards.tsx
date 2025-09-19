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
}

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

  const cards = React.Children.toArray(children) as React.ReactElement<CardProps>[];
  const cardCount = cards.length;

  return (
    <div
      ref={containerRef}
      className={cn("relative", className)}
      style={{ height: `${cardCount * 100}vh` }}
      {...props}
    >
      <div className="sticky top-1/2 -translate-y-1/2 flex items-center justify-center">
        {cards.map((card, index) => {
          const y = useTransform(
            scrollYProgress,
            [index / cardCount, (index + 0.5) / cardCount, (index + 1) / cardCount],
            ["50%", "0%", "-50%"]
          );
          const opacity = useTransform(
            scrollYProgress,
            [
              index / cardCount,
              (index + 0.2) / cardCount,
              (index + 0.8) / cardCount,
              (index + 1) / cardCount,
            ],
            [0, 1, 1, 0]
          );

          return (
            <motion.div
              key={index}
              className="absolute w-full"
              style={{
                transformOrigin: "center",
                y,
                opacity,
                zIndex: cardCount - index,
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
