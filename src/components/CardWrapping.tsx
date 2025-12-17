type Corner = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

type PositionProp = ['all'] | Corner[];

interface CardProps {
  children: React.ReactNode;
  cornerPosition?: PositionProp;
  typeCorner?: 'square' | 'angular';
  className?: string;
  borderColor?: string;
  cornerColor?: string;
}

const ALL_CORNERS: Corner[] = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

export default function CardWrapping({
  children,
  cornerPosition = ["all"],
  typeCorner = "angular",
  className,
  borderColor = "border-primary",
  cornerColor = "--color-primary"
}: CardProps) {
  const isAll = cornerPosition[0] === 'all';

  const cornersToRender: Corner[] = isAll ? ALL_CORNERS : cornerPosition as Corner[];
  const size = typeCorner === 'square' ? 5 : 41;

  return (
    <div className={`${borderColor} border relative ${className}`}>
      {children}
      {
        cornersToRender.map((corner) => {
          const { positionClass, rotationClass } = getPosition({
            cornerPosition: corner,
            typeCorner
          })

          return (
            <svg
              key={corner}
              className={`absolute ${positionClass} ${rotationClass}`}
              width={size}
              height={size}
              style={{ color: `var(${cornerColor})` }}
            >
              <use href={`/corner-spritesheet.svg#${typeCorner}-corner`} />
            </svg>
          )
        })
      }
    </div>
  )
}

interface GetPositionProps {
  cornerPosition: Corner;
  typeCorner?: 'square' | 'angular';
}

function getPosition({ cornerPosition, typeCorner = "angular" }: GetPositionProps) {
  const style = {
    "angular": {
      "top-left": {
        positionClass: "-top-px -left-px",
        rotationClass: "rotate-0"
      },
      "top-right": {
        positionClass: "-top-px -right-px",
        rotationClass: "rotate-90"
      },
      "bottom-left": {
        positionClass: "-bottom-px -left-px",
        rotationClass: "-rotate-90"
      },
      "bottom-right": {
        positionClass: "-bottom-px -right-px",
        rotationClass: "rotate-180"
      }
    },
    "square": {
      "top-left": {
        positionClass: "-top-0.5 -left-0.5",
        rotationClass: "rotate-0"
      },
      "top-right": {
        positionClass: "-top-0.5 -right-0.5",
        rotationClass: "rotate-0"
      },
      "bottom-left": {
        positionClass: "-bottom-0.5 -left-0.5",
        rotationClass: "rotate-0"
      },
      "bottom-right": {
        positionClass: "-bottom-0.5 -right-0.5",
        rotationClass: "rotate-0"
      }
    }
  }

  return style[typeCorner][cornerPosition];
}