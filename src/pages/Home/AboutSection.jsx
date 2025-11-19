import React from 'react';

const AboutSection = () => {
    const features = [
        {
            icon: '/images/img_group_48096377.svg',
            title: 'Become a Data-Driven Investor',
            description: 'Lilypads is the cloud-based real estate investment platform that helps you make data-driven investment decisions and assists with reaching your long term investment objectives.'
        },
        {
            icon: '/images/img_group_48096378.svg',
            title: 'Lilypads can help you make smarter decisions.',
            description: 'Streamline your investment evaluation process and collaborate in reaching your long term investment objectives'
        }
    ];

    const services = [
        {
            icon: '/images/img_group_48096374.svg',
            title: 'Manager Due Diligence',
            description: 'Evaluate managers against your objectives using traditional risk metrics with the addition of factor analysis. All it takes is a set of returns'
        },
        {
            icon: '/images/img_group_48096375.svg',
            title: 'Optimize Asset Allocation',
            description: 'Understand the underlying risk drivers in your portfolio using the Lilypads analysis factors and then optimize that portfolio based on objectives'
        },
        {
            icon: '/images/img_group_48096376.svg',
            title: 'Our Subscribers',
            description: 'Serving a constellation of global subscribers Pension funds, Funds of Funds, Banks, Family offices, Asset managers, Wealth Managers'
        }
    ];

    return (
        <section className="w-full bg-background-card py-[53px] sm:py-[80px] lg:py-[106px]">
            <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">

                    {/* Left Column - About Header */}
                    <div className="lg:col-span-1">
                        <div className="flex flex-col gap-[10px]">
                            <div className="flex items-center gap-[10px] mb-4">
                                <div className="w-[11px] sm:w-[16px] lg:w-[22px] h-[4px] bg-accent-background"></div>
                                <span
                                    className="text-accent-background font-semibold leading-[20px]"
                                    style={{
                                        fontSize: '16px',
                                        fontFamily: 'Lexend'
                                    }}
                                >
                                    About Us
                                </span>
                            </div>

                            <h2
                                className="text-text-primary leading-[27px] sm:leading-[40px] lg:leading-[54px]"
                                style={{
                                    fontSize: 'clamp(24px, 4vw, 36px)',
                                    fontFamily: 'DM Serif Display',
                                    fontWeight: '400'
                                }}
                            >
                                Lillypad is the only Real Estate Investment tool you need for your business
                            </h2>
                        </div>
                    </div>

                    {/* Middle Column - Features */}
                    <div className="lg:col-span-1 space-y-8 lg:space-y-12">
                        {features?.map((feature, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                <div className="flex items-center gap-5">
                                    <div className="flex-shrink-0 w-[70px] sm:w-[80px] lg:w-[90px] h-[70px] sm:h-[80px] lg:h-[90px] bg-white rounded-[44px] shadow-[6px_6px_20px_rgba(125,89,195,0.2)] flex items-center justify-center">
                                        <img
                                            src={feature?.icon}
                                            alt=""
                                            className="w-[40px] sm:w-[45px] lg:w-[50px] h-[40px] sm:h-[45px] lg:h-[50px]"
                                        />
                                    </div>
                                    <h3
                                        className="text-text-primary font-semibold leading-[21px] sm:leading-[25px] lg:leading-[28px] flex-1"
                                        style={{
                                            fontSize: 'clamp(16px, 2.5vw, 18px)',
                                            fontFamily: 'Lexend'
                                        }}
                                    >
                                        {feature?.title}
                                    </h3>
                                </div>

                                <p
                                    className="text-text-primary leading-[25px]"
                                    style={{
                                        fontSize: '16px',
                                        fontFamily: 'Lexend',
                                        fontWeight: '400'
                                    }}
                                >
                                    {feature?.description}
                                </p>
                            </div>
                        ))}
                    </div>

                    {/* Right Column - Services */}
                    <div className="lg:col-span-1 space-y-8 lg:space-y-12">
                        {services?.map((service, index) => (
                            <div key={index} className="flex flex-col gap-5">
                                <div className="flex items-center gap-5">
                                    <div className="flex-shrink-0 w-[70px] sm:w-[80px] lg:w-[90px] h-[70px] sm:h-[80px] lg:h-[90px] bg-white rounded-[44px] shadow-[6px_6px_20px_rgba(125,89,195,0.2)] flex items-center justify-center">
                                        <img
                                            src={service?.icon}
                                            alt=""
                                            className="w-[40px] sm:w-[45px] lg:w-[50px] h-[40px] sm:h-[45px] lg:h-[50px]"
                                        />
                                    </div>
                                    <h3
                                        className="text-text-primary font-semibold leading-[21px] sm:leading-[25px] lg:leading-[28px] flex-1"
                                        style={{
                                            fontSize: 'clamp(16px, 2.5vw, 18px)',
                                            fontFamily: 'Lexend'
                                        }}
                                    >
                                        {service?.title}
                                    </h3>
                                </div>

                                <p
                                    className="text-text-primary leading-[25px]"
                                    style={{
                                        fontSize: '16px',
                                        fontFamily: 'Lexend',
                                        fontWeight: '400'
                                    }}
                                >
                                    {service?.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;