import React, { useState } from 'react';
import Button from '../ui/Button';

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { name: 'Home', isActive: true },
        { name: 'Network', isActive: false },
        { name: 'Product', isActive: false },
        { name: 'Technology', isActive: false },
        { name: 'Our Story', isActive: false },
        { name: 'Knowledge Center', isActive: false },
    ];

    return (
        <header className="w-full bg-header-background">
            <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center py-4 lg:py-6">
                    {/* Logo Section */}
                    <div className="flex items-center">
                        <img
                            src="/images/img_header_logo.svg"
                            alt="Lilypads Logo"
                            className="w-[70px] h-[42px] sm:w-[80px] sm:h-[48px] lg:w-[90px] lg:h-[54px]"
                        />
                    </div>

                    {/* Navigation Menu - Desktop */}
                    <nav className="hidden lg:flex items-center gap-[30px]">
                        {menuItems?.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center gap-[8px]">
                                <span
                                    className={`text-sm font-medium leading-[18px] text-center cursor-pointer transition-colors duration-200 hover:text-primary-light ${item?.isActive
                                        ? 'text-primary-light font-bold' : 'text-header-text'
                                        }`}
                                >
                                    {item?.name}
                                </span>
                                {item?.isActive && (
                                    <div className="w-[6px] h-[6px] bg-primary-light rounded-full" />
                                )}
                            </div>
                        ))}
                    </nav>

                    {/* Action Buttons - Desktop */}
                    <div className="hidden lg:flex items-center gap-4 mr-[74px]">
                        <Button
                            text="Contact Us"
                            text_font_size="14"
                            text_font_family="Lexend"
                            text_font_weight="600"
                            text_line_height="18px"
                            text_text_align="center"
                            text_color="#ffffff"
                            border_border="1px solid #ffffff"
                            border_border_radius="20px"
                            padding="20px 34px"
                            className="hover:bg-white hover:text-primary-background transition-colors duration-200"
                        />
                        <Button
                            text="Log In"
                            text_font_size="14"
                            text_font_family="Lexend"
                            text_font_weight="600"
                            text_line_height="18px"
                            text_text_align="center"
                            text_color="#7d59c3"
                            fill_background_color="#ffffff"
                            border_border_radius="20px"
                            padding="20px 34px"
                            className="hover:bg-gray-50 transition-colors duration-200"
                        />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <svg
                            className="w-6 h-6 text-header-text"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            {menuOpen ? (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            ) : (
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            )}
                        </svg>
                    </button>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'} pb-4`}>
                    <nav className="flex flex-col space-y-4 mb-6">
                        {menuItems?.map((item, index) => (
                            <div key={index} className="flex items-center justify-between">
                                <span
                                    className={`text-sm font-medium leading-[18px] cursor-pointer transition-colors duration-200 ${item?.isActive
                                        ? 'text-primary-light font-bold' : 'text-header-text'
                                        }`}
                                >
                                    {item?.name}
                                </span>
                                {item?.isActive && (
                                    <div className="w-[6px] h-[6px] bg-primary-light rounded-[3px]" />
                                )}
                            </div>
                        ))}
                    </nav>

                    <div className="flex flex-col gap-3">
                        <Button
                            text="Contact Us"
                            text_font_size="14"
                            text_font_family="Lexend"
                            text_font_weight="600"
                            text_line_height="18px"
                            text_text_align="center"
                            text_color="#ffffff"
                            border_border="1px solid #ffffff"
                            border_border_radius="20px"
                            padding="16px 24px"
                            layout_width="100%"
                            className="hover:bg-white hover:text-primary-background transition-colors duration-200"
                        />
                        <Button
                            text="Log In"
                            text_font_size="14"
                            text_font_family="Lexend"
                            text_font_weight="600"
                            text_line_height="18px"
                            text_text_align="center"
                            text_color="#7d59c3"
                            fill_background_color="#ffffff"
                            border_border_radius="20px"
                            padding="16px 24px"
                            layout_width="100%"
                            className="hover:bg-gray-50 transition-colors duration-200"
                        />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;