import React from 'react';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';

const progressBarClasses = cva(
    'relative overflow-hidden transition-all duration-300',
    {
        variants: {
            size: {
                small: 'h-2',
                medium: 'h-4',
                large: 'h-6',
            },
            variant: {
                default: 'bg-gray-200 rounded-full',
                square: 'bg-gray-200',
                rounded: 'bg-gray-200 rounded-lg',
            },
        },
        defaultVariants: {
            size: 'medium',
            variant: 'default',
        },
    }
);

const progressFillClasses = cva(
    'h-full transition-all duration-500 ease-in-out',
    {
        variants: {
            variant: {
                default: 'rounded-full',
                square: '',
                rounded: 'rounded-lg',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
);

const ProgressBar = ({
    // Required parameters with defaults
    fill_background_color = "bg-secondary-background",

    // Optional parameters (no defaults)
    layout_width,
    position,

    // Standard React props
    value = 0,
    max = 100,
    variant,
    size,
    className,
    showLabel = false,
    label,
    backgroundColor = '#f3f4f6',
    height = '16px',
    ...props
}) => {
    // Safe validation for optional parameters
    const hasValidWidth = layout_width && typeof layout_width === 'string' && layout_width?.trim() !== '';
    const hasValidPosition = position && typeof position === 'string' && position?.trim() !== '';

    // Calculate percentage
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

    // Build optional Tailwind classes
    const optionalClasses = [
        hasValidWidth ? `w-[${layout_width}]` : 'w-full',
        hasValidPosition ? position : '',
    ]?.filter(Boolean)?.join(' ');

    // Build inline styles
    const containerStyles = {
        backgroundColor: backgroundColor,
        height: height,
    };

    const fillStyles = {
        width: `${percentage}%`,
        backgroundColor: fill_background_color === "bg-secondary-background" ? "#009639" : fill_background_color,
    };

    return (
        <div className="w-full">
            {showLabel && (
                <div className="flex justify-between items-center mb-2">
                    <span className="text-sm font-medium text-text-primary">
                        {label || 'Progress'}
                    </span>
                    <span className="text-sm font-medium text-text-primary">
                        {Math.round(percentage)}%
                    </span>
                </div>
            )}
            <div
                style={containerStyles}
                className={twMerge(
                    progressBarClasses({ variant, size }),
                    optionalClasses,
                    className
                )}
                role="progressbar"
                aria-valuenow={value}
                aria-valuemin={0}
                aria-valuemax={max}
                aria-label={label || `Progress: ${Math.round(percentage)}%`}
                {...props}
            >
                <div
                    style={fillStyles}
                    className={progressFillClasses({ variant })}
                />
            </div>
        </div>
    );
};

export default ProgressBar;