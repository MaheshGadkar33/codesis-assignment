import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e?.preventDefault();
        console.log('Subscribing email:', email);
        setEmail('');
    };

    return (
        <footer className="w-full bg-[#1f2937] text-white">
            <div className="max-w-[1440px] mx-auto px-6 lg:px-8 py-16">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

                    {/* Left Section - Newsletter & CTA */}
                    <div className="lg:col-span-3">
                        {/* Newsletter Input */}
                        <form onSubmit={handleSubscribe} className="mb-8">
                            <div className="flex items-center" style={{ width: '440px', height: '55px', borderRadius: '15px', border: '1px solid #FFFFFF', boxShadow: '0px 6px 10px 2px #00000026', overflow: 'hidden' }}>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e?.target?.value)}
                                    placeholder="Enter Your Email Here"
                                    className="flex-1 px-6 py-3 text-white placeholder-gray-400 focus:outline-none text-sm"
                                    style={{ fontFamily: 'Lexend', background: '#2E302F', border: 'none' }}
                                    required
                                />
                                <button
                                    type="submit"
                                    style={{ fontFamily: 'Urbanist', width: '185px', height: '45px', borderRadius: '15px', background: '#2E302F', color: '#FFFFFF', border: 'none', fontWeight: '700', fontSize: '12px', lineHeight: '140%', letterSpacing: '0.4%', textAlign: 'center', cursor: 'pointer' }}
                                >
                                    Subscribe To Newsletter
                                </button>
                            </div>
                        </form>

                        {/* CTA Text */}
                        <p className="text-gray-300 text-sm mb-8 leading-relaxed" style={{ fontFamily: 'Lexend' }}>
                            Signup and start enjoying the benefits today!
                        </p>

                        {/* CTA Button */}
                        <button className="text-white font-semibold transition text-sm mb-8" style={{ fontFamily: 'Lexend', width: '200px', height: '60px', borderRadius: '20px', opacity: 1, background: '#7C5AC7' }}>
                            Sign Up To Lilypads
                        </button>

                        {/* Social Icons */}
                        <div className="flex gap-6">
                            {/* Facebook */}
                            <a href="#" className="w-16 h-16 flex items-center justify-center" aria-label="Facebook">
                                <svg width="64" height="64" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_88_12)">
                                        <circle cx="37" cy="31" r="25" fill="white" />
                                    </g>
                                    <g clipPath="url(#clip0_88_12)">
                                        <path d="M37 22.6666C32.3975 22.6666 28.6667 26.3975 28.6667 31C28.6667 35.1591 31.7142 38.6066 35.6983 39.2325V33.4083H33.5817V31H35.6983V29.1641C35.6983 27.0758 36.9417 25.9225 38.8458 25.9225C39.7575 25.9225 40.7108 26.085 40.7108 26.085V28.135H39.6608C38.625 28.135 38.3025 28.7775 38.3025 29.4366V31H40.6133L40.2442 33.4083H38.3025V39.2325C42.2858 38.6075 45.3333 35.1583 45.3333 31C45.3333 26.3975 41.6025 22.6666 37 22.6666Z" fill="#7C5AC7" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_88_12" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_88_12" />
                                            <feOffset dy="6" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_12" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_12" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_88_12">
                                            <rect width="20" height="20" fill="white" transform="translate(27 21)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            {/* Twitter */}
                            <a href="#" className="w-16 h-16 flex items-center justify-center" aria-label="Twitter">
                                <svg width="64" height="64" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_88_18)">
                                        <circle cx="37" cy="31" r="25" fill="white" />
                                    </g>
                                    <g clipPath="url(#clip0_88_18)">
                                        <path d="M45.4683 25.7134C44.8321 25.9948 44.1575 26.1796 43.4667 26.2617C44.1948 25.8263 44.7398 25.1409 45 24.3334C44.3167 24.7401 43.5675 25.0251 42.7867 25.1792C42.2622 24.618 41.567 24.2459 40.8091 24.1205C40.0513 23.9952 39.2733 24.1238 38.5961 24.4863C37.9188 24.8487 37.3803 25.4248 37.0643 26.1249C36.7482 26.825 36.6723 27.6099 36.8483 28.3576C35.4626 28.2881 34.1069 27.928 32.8694 27.3006C31.6319 26.6732 30.5401 25.7926 29.665 24.7159C29.3552 25.2479 29.1925 25.8527 29.1933 26.4684C29.1933 27.6767 29.8083 28.7442 30.7433 29.3692C30.19 29.3518 29.6489 29.2024 29.165 28.9334V28.9767C29.1652 29.7815 29.4436 30.5614 29.9532 31.1843C30.4628 31.8071 31.1721 32.2346 31.9608 32.3942C31.4472 32.5334 30.9086 32.5539 30.3858 32.4542C30.6082 33.1469 31.0417 33.7527 31.6255 34.1868C32.2093 34.6209 32.9143 34.8616 33.6417 34.8751C32.9187 35.4428 32.091 35.8625 31.2057 36.1102C30.3205 36.3579 29.3951 36.4286 28.4825 36.3184C30.0756 37.3429 31.9301 37.8868 33.8242 37.8851C40.235 37.8851 43.7408 32.5742 43.7408 27.9684C43.7408 27.8184 43.7367 27.6667 43.73 27.5184C44.4124 27.0252 45.0013 26.4142 45.4692 25.7142L45.4683 25.7134Z" fill="#7C5AC7" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_88_18" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_88_18" />
                                            <feOffset dy="6" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_18" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_18" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_88_18">
                                            <rect width="20" height="20" fill="white" transform="translate(27 21)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            {/* LinkedIn */}
                            <a href="#" className="w-16 h-16 flex items-center justify-center" aria-label="LinkedIn">
                                <svg width="64" height="64" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_88_24)">
                                        <circle cx="37" cy="31" r="25" fill="white" />
                                    </g>
                                    <g clipPath="url(#clip0_88_24)">
                                        <path d="M32.7833 25.1666C32.7831 25.6087 32.6073 26.0325 32.2946 26.3449C31.9819 26.6573 31.5579 26.8327 31.1158 26.8325C30.6738 26.8323 30.25 26.6565 29.9376 26.3437C29.6252 26.031 29.4498 25.607 29.45 25.165C29.4502 24.723 29.626 24.2991 29.9387 23.9867C30.2515 23.6743 30.6755 23.4989 31.1175 23.4991C31.5595 23.4994 31.9834 23.6752 32.2958 23.9879C32.6082 24.3006 32.7836 24.7246 32.7833 25.1666ZM32.8333 28.0666H29.5V38.5H32.8333V28.0666ZM38.1 28.0666H34.7833V38.5H38.0667V33.025C38.0667 29.975 42.0417 29.6916 42.0417 33.025V38.5H45.3333V31.8916C45.3333 26.75 39.45 26.9416 38.0667 29.4666L38.1 28.0666Z" fill="#7C5AC7" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_88_24" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_88_24" />
                                            <feOffset dy="6" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_24" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_24" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_88_24">
                                            <rect width="20" height="20" fill="white" transform="translate(27 21)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            {/* YouTube */}
                            <a href="#" className="w-16 h-16 flex items-center justify-center" aria-label="YouTube">
                                <svg width="64" height="64" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_88_60)">
                                        <circle cx="37" cy="31" r="25" fill="white" />
                                    </g>
                                    <g clipPath="url(#clip0_88_60)">
                                        <path d="M44.9525 26.415C45.3333 27.9 45.3333 31 45.3333 31C45.3333 31 45.3333 34.1 44.9525 35.585C44.7408 36.4059 44.1217 37.0517 43.3375 37.27C41.9133 37.6667 37 37.6667 37 37.6667C37 37.6667 32.0892 37.6667 30.6625 37.27C29.875 37.0484 29.2567 36.4034 29.0475 35.585C28.6667 34.1 28.6667 31 28.6667 31C28.6667 31 28.6667 27.9 29.0475 26.415C29.2592 25.5942 29.8783 24.9484 30.6625 24.73C32.0892 24.3334 37 24.3334 37 24.3334C37 24.3334 41.9133 24.3334 43.3375 24.73C44.125 24.9517 44.7433 25.5967 44.9525 26.415ZM35.3333 33.9167L40.3333 31L35.3333 28.0834V33.9167Z" fill="#7D59C3" />
                                    </g>
                                    <defs>
                                        <filter id="filter0_d_88_60" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_88_60" />
                                            <feOffset dy="6" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_60" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_60" result="shape" />
                                        </filter>
                                        <clipPath id="clip0_88_60">
                                            <rect width="20" height="20" fill="white" transform="translate(27 21)" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </a>
                            {/* Medium */}
                            <a href="#" className="w-16 h-16 flex items-center justify-center" aria-label="Medium">
                                <svg width="64" height="64" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_88_66)">
                                        <circle cx="37" cy="31" r="25" fill="white" />
                                    </g>
                                    <path d="M30.5941 27.0895C30.6135 26.8937 30.5393 26.6988 30.3916 26.5672L28.8983 24.7676V24.4976H33.5369L37.1227 32.361L40.2748 24.4976H44.6966V24.7668L43.4184 25.991C43.3087 26.0754 43.2556 26.2137 43.2767 26.3496V35.3485C43.2556 35.4852 43.3087 35.6227 43.4184 35.7071L44.6663 36.9313V37.2004H38.3925V36.9313L39.6825 35.6767C39.8107 35.5502 39.8107 35.5122 39.8107 35.319V28.0446L36.2174 37.1709H35.7323L31.5492 28.0446V34.1606C31.5146 34.4179 31.5998 34.6769 31.7812 34.8634L33.4619 36.9026V37.1717H28.6966V36.9026L30.3773 34.8634C30.5561 34.6769 30.6371 34.4162 30.5941 34.1606V27.0895Z" fill="#7D59C3" />
                                    <defs>
                                        <filter id="filter0_d_88_66" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_88_66" />
                                            <feOffset dy="6" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_66" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_66" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </a>
                            {/* Pinterest */}
                            <a href="#" className="w-16 h-16 flex items-center justify-center" aria-label="Pinterest">
                                <svg width="64" height="64" viewBox="0 0 74 74" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g filter="url(#filter0_d_88_72)">
                                        <circle cx="37" cy="31" r="25" fill="white" />
                                    </g>
                                    <path d="M31.2308 28.8809C31.2308 28.2325 31.3441 27.62 31.5675 27.0484C31.7808 26.4931 32.0979 25.9835 32.5016 25.5467C32.9046 25.1156 33.3657 24.7429 33.8716 24.4392C34.3907 24.1252 34.9527 23.8883 35.54 23.7359C36.1343 23.5798 36.7463 23.5011 37.3608 23.5017C38.31 23.5017 39.1933 23.7025 40.0125 24.1025C40.8209 24.4953 41.5091 25.0979 42.005 25.8475C42.5166 26.61 42.7708 27.4725 42.7708 28.4342C42.7708 29.0109 42.7141 29.575 42.5983 30.1267C42.4846 30.6781 42.3038 31.2134 42.06 31.7209C41.8276 32.2121 41.5237 32.6662 41.1583 33.0684C40.791 33.4642 40.3463 33.7802 39.8516 33.9967C39.3146 34.2321 38.7337 34.3505 38.1475 34.3442C37.74 34.3442 37.3333 34.2484 36.9316 34.0559C36.53 33.8642 36.2416 33.6009 36.0683 33.2634C36.0075 33.4975 35.9241 33.8359 35.8133 34.2784C35.7066 34.72 35.635 35.005 35.6033 35.1342C35.57 35.2625 35.5083 35.4767 35.4183 35.7734C35.3573 35.9928 35.279 36.2071 35.1841 36.4142L34.8975 36.9759C34.7735 37.2169 34.6349 37.4501 34.4825 37.6742C34.3316 37.8925 34.145 38.1534 33.9225 38.4534L33.7983 38.4975L33.7158 38.4075C33.6266 37.4634 33.5808 36.8984 33.5808 36.7117C33.5808 36.1592 33.6466 35.5392 33.7766 34.8509C33.9041 34.1634 34.1058 33.2992 34.3766 32.26C34.6475 31.2217 34.8025 30.6109 34.8441 30.43C34.6533 30.0409 34.5566 29.5325 34.5566 28.9075C34.5566 28.4084 34.7125 27.9409 35.025 27.5009C35.3383 27.0625 35.7341 26.8434 36.2141 26.8434C36.5816 26.8434 36.8666 26.965 37.0708 27.2092C37.2758 27.4525 37.3758 27.7592 37.3758 28.1334C37.3758 28.53 37.2441 29.1042 36.9791 29.855C36.7141 30.6067 36.5825 31.1675 36.5825 31.54C36.5825 31.9175 36.7175 32.2334 36.9875 32.4809C37.2539 32.7285 37.6063 32.8627 37.97 32.855C38.3 32.855 38.6058 32.78 38.89 32.6292C39.1697 32.4828 39.4118 32.2738 39.5975 32.0184C40.0018 31.4636 40.2901 30.833 40.445 30.1642C40.525 29.8125 40.5866 29.4784 40.625 29.1642C40.6658 28.8484 40.6833 28.55 40.6833 28.2667C40.6833 27.2275 40.3533 26.4175 39.6975 25.8375C39.0383 25.2575 38.18 24.9692 37.1241 24.9692C35.9233 24.9692 34.9191 25.3575 34.115 26.1367C33.31 26.9134 32.905 27.9009 32.905 29.0984C32.905 29.3625 32.945 29.6175 33.0208 29.8642C33.095 30.11 33.1758 30.3059 33.2633 30.4509C33.35 30.5934 33.4316 30.7325 33.5058 30.8609C33.5808 30.9892 33.62 31.0809 33.62 31.1359C33.62 31.3042 33.5758 31.5234 33.4866 31.7942C33.3941 32.065 33.285 32.2 33.1533 32.2C33.1408 32.2 33.0891 32.1909 32.9991 32.1717C32.6874 32.0787 32.4059 31.9047 32.1833 31.6675C31.947 31.4218 31.7605 31.1325 31.6341 30.8159C31.5081 30.5003 31.41 30.1744 31.3408 29.8417C31.2661 29.5269 31.2291 29.2044 31.2308 28.8809Z" fill="#7D59C3" />
                                    <defs>
                                        <filter id="filter0_d_88_72" x="0" y="0" width="74" height="74" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feMorphology radius="2" operator="dilate" in="SourceAlpha" result="effect1_dropShadow_88_72" />
                                            <feOffset dy="6" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_88_72" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_88_72" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Center - Divider and Logo */}
                    <div className="hidden lg:flex lg:col-span-1 justify-center">
                        <div className="w-px bg-gray-600 mx-8"></div>
                    </div>

                    {/* Center Logo */}
                    <div className="lg:col-span-2 flex justify-center items-start">
                        <svg width="120" height="70" viewBox="0 0 120 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M87.2182 45.5586C98.862 43.7134 110.148 46.7151 119.128 53.1025C112.447 61.5971 102.792 67.6647 91.4643 69.4619C79.8179 71.3097 68.5349 68.3055 59.5541 61.918C66.2352 53.4234 75.8935 47.3558 87.2182 45.5586Z" fill="#322D76" />
                            <path d="M87.2182 45.5586C98.862 43.7134 110.148 46.7151 119.128 53.1025C112.447 61.5971 102.792 67.6647 91.4643 69.4619C79.8179 71.3097 68.5349 68.3055 59.5541 61.918C66.2352 53.4234 75.8935 47.3558 87.2182 45.5586Z" stroke="white" />
                            <path d="M0 52.9489C8.7524 46.7588 19.6855 43.7652 31.0439 45.3541C42.7214 46.9885 52.7092 53.1678 59.5537 61.9186C50.8013 68.1086 39.8655 71.1022 28.5098 69.5133C16.8375 67.8763 6.84714 61.6969 0 52.9489Z" fill="#322D76" />
                            <path d="M0 52.9489C8.7524 46.7588 19.6855 43.7652 31.0439 45.3541C42.7214 46.9885 52.7092 53.1678 59.5537 61.9186C50.8013 68.1086 39.8655 71.1022 28.5098 69.5133C16.8375 67.8763 6.84714 61.6969 0 52.9489Z" stroke="white" />
                            <g opacity="0.8">
                                <path d="M99.15 15.2806C99.4667 26.2053 95.9858 37.2794 88.5338 46.2386C80.8716 55.4489 70.4111 60.739 59.5563 61.9193C59.2396 50.9947 62.7205 39.9205 70.1725 30.9613C77.8321 21.7511 88.2926 16.4583 99.15 15.2806Z" fill="#A6244B" />
                                <path d="M99.15 15.2806C99.4667 26.2053 95.9858 37.2794 88.5338 46.2386C80.8716 55.4489 70.4111 60.739 59.5563 61.9193C59.2396 50.9947 62.7205 39.9205 70.1725 30.9613C77.8321 21.7511 88.2926 16.4583 99.15 15.2806Z" stroke="white" />
                            </g>
                            <g opacity="0.8">
                                <path d="M20.6436 14.6744C31.1894 15.9857 41.312 21.1773 48.8106 30.0963C56.5195 39.2665 60.0417 50.6956 59.5538 61.9166C49.0079 60.6054 38.8829 55.4112 31.3868 46.4948C23.6778 37.3272 20.1556 25.8955 20.6436 14.6744Z" fill="#A6244B" />
                                <path d="M20.6436 14.6744C31.1894 15.9857 41.312 21.1773 48.8106 30.0963C56.5195 39.2665 60.0417 50.6956 59.5538 61.9166C49.0079 60.6054 38.8829 55.4112 31.3868 46.4948C23.6778 37.3272 20.1556 25.8955 20.6436 14.6744Z" stroke="white" />
                            </g>
                            <path d="M60.1638 0C67.3068 8.08856 71.6627 18.8288 71.6628 30.6211C71.6628 42.7447 67.0582 53.7609 59.5544 61.9189C52.4113 53.8303 48.0554 43.0867 48.0554 31.2969C48.0554 19.176 52.6599 8.15802 60.1638 0Z" fill="#765EA8" />
                            <path d="M60.1638 0C67.3068 8.08856 71.6627 18.8288 71.6628 30.6211C71.6628 42.7447 67.0582 53.7609 59.5544 61.9189C52.4113 53.8303 48.0554 43.0867 48.0554 31.2969C48.0554 19.176 52.6599 8.15802 60.1638 0Z" stroke="white" />
                        </svg>
                    </div>

                    {/* Right Section - Links */}
                    <div className="lg:col-span-6">
                        {/* Contact Info */}
                        <div className="mb-12">
                            <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-3" style={{ fontFamily: 'Lexend' }}>
                                Reach Us At
                            </h4>
                            <address className="text-gray-400 text-sm not-italic leading-relaxed" style={{ fontFamily: 'Lexend' }}>
                                6751 Columbia Gateway Dr.<br />
                                3rd floor, Columbia,<br />
                                MD 21046
                            </address>
                        </div>

                        {/* Navigation Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                            {/* Network */}
                            <div>
                                <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: 'Lexend' }}>Network</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Community</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Investor</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Broker</a></li>
                                </ul>
                            </div>

                            {/* Product */}
                            <div>
                                <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: 'Lexend' }}>Product</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Invest</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Discover</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Transact</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Manage</a></li>
                                </ul>
                            </div>

                            {/* Technology */}
                            <div>
                                <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: 'Lexend' }}>Technology</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Artificial Intelligence</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Block Chain</a></li>
                                </ul>
                            </div>

                            {/* Highlights */}
                            <div>
                                <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: 'Lexend' }}>Highlights</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white text-xs leading-tight transition" style={{ fontFamily: 'Lexend' }}>Impact of COVID-19 on the food and beverage industry and the retail sector</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-xs leading-tight transition" style={{ fontFamily: 'Lexend' }}>Commercial lending during COVID-19</a></li>
                                </ul>
                            </div>

                            {/* Our Story & Knowledge Center */}
                            <div>
                                <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: 'Lexend' }}>Our Story</h5>
                                <ul className="space-y-2 mb-8">
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Approach</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>About Us</a></li>
                                </ul>

                                <h5 className="text-white font-semibold text-xs uppercase tracking-wider mb-4" style={{ fontFamily: 'Lexend' }}>Knowledge Center</h5>
                                <ul className="space-y-2">
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Resource</a></li>
                                    <li><a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Blog</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Divider */}
                <div className="border-t border-gray-700"></div>

                {/* Footer Bottom */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-8 gap-4">
                    <p className="text-gray-400 text-sm" style={{ fontFamily: 'Lexend' }}>
                        © 2025 Lilypads. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Privacy Policy</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Terms of Service</a>
                        <a href="#" className="text-gray-400 hover:text-white text-sm transition" style={{ fontFamily: 'Lexend' }}>Cookie Settings</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
