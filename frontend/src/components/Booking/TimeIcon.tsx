interface TimeIconProps extends React.SVGAttributes<SVGSVGElement> {}

export const TimeIcon: React.FC<TimeIconProps> = ({ className, ...props }) => {
    return (
        <svg
            width="11"
            height="11"
            viewBox="0 0 11 11"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            {...props}
        >
            <g clipPath="url(#clip0_37_27)">
                <path d="M5.5 11C4.04131 11 2.64236 10.4205 1.61091 9.38909C0.579463 8.35764 0 6.95869 0 5.5C0 4.04131 0.579463 2.64236 1.61091 1.61091C2.64236 0.579463 4.04131 0 5.5 0C6.95869 0 8.35764 0.579463 9.38909 1.61091C10.4205 2.64236 11 4.04131 11 5.5C11 6.95869 10.4205 8.35764 9.38909 9.38909C8.35764 10.4205 6.95869 11 5.5 11ZM5.5 9.9C6.66695 9.9 7.78611 9.43643 8.61127 8.61127C9.43643 7.78611 9.9 6.66695 9.9 5.5C9.9 4.33305 9.43643 3.21389 8.61127 2.38873C7.78611 1.56357 6.66695 1.1 5.5 1.1C4.33305 1.1 3.21389 1.56357 2.38873 2.38873C1.56357 3.21389 1.1 4.33305 1.1 5.5C1.1 6.66695 1.56357 7.78611 2.38873 8.61127C3.21389 9.43643 4.33305 9.9 5.5 9.9ZM4.95 5.7255V2.2H6.05V5.2745L8.2225 7.447L7.447 8.2225L4.95 5.7255Z" />
            </g>
            <defs>
                <clipPath id="clip0_37_27">
                    <rect
                        width="11"
                        height="11"
                    />
                </clipPath>
            </defs>
        </svg>
    );
};
