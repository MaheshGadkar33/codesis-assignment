import React from 'react';
import { twMerge } from 'tailwind-merge';

const Button = ({
    // Text styling
    text = "Button",
    text_font_size = "16",
    text_font_family = "Lexend",
    text_font_weight = "600",
    text_line_height = "20px",
    text_text_align = "center",
    text_color = "#ffffff",

    // Border styling
    border_border = "none",
    border_border_radius = "20px",

    // Background and effects
    fill_background_color = "#7d59c3",
    effect_box_shadow = "none",

    // Layout
    layout_width = "auto",
    layout_gap = "8px",
    padding = "20px 34px",
    margin,
    position,

    // React props
    variant,
    size,
    disabled = false,
    className,
    children,
    onClick,
    type = "button",
    ...props
}) => {
    // Build inline styles for pixel-perfect control
    const buttonStyles = {
        fontSize: `${text_font_size}px`,
        fontFamily: text_font_family,
        fontWeight: text_font_weight,
        lineHeight: text_line_height,
        textAlign: text_text_align,
        color: text_color,
        backgroundColor: fill_background_color,
        border: border_border,
        borderRadius: border_border_radius,
        padding: padding,
        width: layout_width === "100%" ? "100%" : layout_width,
        gap: layout_gap,
        ...(effect_box_shadow !== "none" && { boxShadow: effect_box_shadow }),
        ...(margin && { margin: margin }),
        ...(position && { position: position }),
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? "0.5" : "1",
        transition: "all 0.2s ease-in-out",
    };

    const handleClick = (event) => {
        if (disabled) return;
        if (typeof onClick === 'function') {
            onClick(event);
        }
    };

    return (
        <button
            type={type}
            disabled={disabled}
            onClick={handleClick}
            style={buttonStyles}
            className={twMerge(
                'inline-flex items-center justify-center font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed hover:opacity-90 transition-opacity duration-200',
                className
            )}
            aria-disabled={disabled}
            {...props}
        >
            {children || text}
        </button>
    );
};

export default Button;