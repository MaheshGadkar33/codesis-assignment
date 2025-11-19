import React from "react";
import Button from "../../components/ui/Button";

const HeroSection = () => {
  const stats = [
    { number: "658+", label: "Properties Registered" },
    { number: "685+", label: "Deals Cracked" },
    { number: "255+", label: "Investors" },
  ];

  return (
    <section className="w-full relative overflow-hidden bg-white pt-12 sm:pt-16 lg:pt-20">
      {/* Purple Background for Cards Area */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/img_rectangle_900x1440.png')",
          top: "0",
          height: "100%",
        }}
      />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start min-h-[450px] sm:min-h-[600px] lg:min-h-[900px]">
          {/* Left Content */}
          <div className="w-full lg:w-[44%] flex flex-col gap-[55px] sm:gap-[82px] lg:gap-[110px] order-2 lg:order-1">
            {/* Hero Text Section */}
            <div className="flex flex-col gap-[20px] sm:gap-[30px] lg:gap-[40px]">
              {/* Welcome Text */}
              <div className="flex items-center gap-[10px] ml-4 sm:ml-6 lg:ml-8">
                <div className="w-[11px] sm:w-[16px] lg:w-[22px] h-[4px] bg-accent-background" />
                <p
                  className="text-accent-background font-semibold leading-[20px]"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lexend",
                  }}
                >
                  Welcome to the
                </p>
              </div>

              {/* Main Heading and Description */}
              <div className="flex flex-col gap-2">
                <h1
                  className="text-text-primary leading-[46px] sm:leading-[69px] lg:leading-[92px] w-full max-w-[90%]"
                  style={{
                    fontSize: "clamp(36px, 5vw, 71px)",
                    fontFamily: "DM Serif Display",
                    fontWeight: "400",
                  }}
                >
                  <span className="text-text-primary">
                    Unprecedented Era of{" "}
                  </span>
                  <span className="text-accent-background">
                    Real Estate Investing
                  </span>
                </h1>

                <p
                  className="text-text-secondary leading-[25px] w-full mt-4 sm:mt-6 lg:mt-8"
                  style={{
                    fontSize: "16px",
                    fontFamily: "Lexend",
                    fontWeight: "500",
                  }}
                >
                  Lilypads uses sophisticated technologies for data-driven
                  decisions in investing, managing and funding commercial real
                  estate assets
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-[20px] sm:mt-[30px] lg:mt-[40px]">
                <Button
                  text="Start Investing Now"
                  text_font_size="16px"
                  text_font_family="Lexend"
                  text_font_weight="600"
                  text_line_height="20px"
                  text_color="#ffffff"
                  fill_background_color="#7d59c3"
                  border_border_radius="20px"
                  padding="20px 54px 20px 34px"
                  effect_box_shadow="10px 10px 30px #7d59c333"
                  layout_gap="8px"
                  className="inline-flex items-center justify-center hover:bg-opacity-90 transition-all duration-200"
                >
                  <span>Start Investing Now</span>
                  <img
                    src="/images/img_arrowright.svg"
                    alt=""
                    className="w-5 h-5 ml-2"
                  />
                </Button>
              </div>
            </div>

            {/* Statistics Section */}
            <div className="flex flex-col sm:flex-row gap-[26px] sm:gap-[52px] w-full max-w-[524px]">
              {stats?.map((stat, index) => (
                <div key={index} className="flex flex-col gap-1">
                  <span
                    className="text-primary-light leading-[45px]"
                    style={{
                      fontSize: "36px",
                      fontFamily: "Lexend",
                      fontWeight: "700",
                    }}
                  >
                    {stat?.number}
                  </span>
                  <span
                    className="text-text-primary leading-[20px]"
                    style={{
                      fontSize: "16px",
                      fontFamily: "Lexend",
                      fontWeight: "500",
                    }}
                  >
                    {stat?.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Investment Cards */}
          <div className="w-full lg:w-[56%] flex justify-center lg:justify-end order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative w-full max-w-[732px] h-[450px] sm:h-[600px] lg:h-[900px] overflow-x-auto lg:overflow-x-visible">
              {/* Background Building Image */}
              <img
                src="/images/img_rectangle.png"
                alt=""
                className="absolute left-1/2 transform -translate-x-1/2 lg:left-[72px] lg:transform-none w-[297px] h-[450px] sm:w-[445px] sm:h-[675px] lg:w-[710px] lg:h-[900px] object-cover"
              />

              {/* Investment Dashboard Card */}
              <div className="absolute top-[80px] sm:top-[120px] lg:top-[-20px] left-[15px] sm:left-[30px] lg:left-[60px] w-[280px] sm:w-[320px] lg:w-[360px] bg-white rounded-[50px] p-[11px] sm:p-[16px] lg:p-[22px] shadow-[13px_13px_0px_rgba(47,49,48,0.3)] border border-gray-200">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-4">
                  <h3
                    className="text-text-primary font-bold text-base leading-[20px]"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Investments
                  </h3>
                  <img
                    src="/images/img_line_graph.svg"
                    alt=""
                    className="w-[34px] h-[4px]"
                  />
                </div>
                {/* /images/img_rectangle_2597.png */}
                {/* Property Card */}
                <div className="bg-white rounded-[24px] p-[14px] shadow-[10px_10px_50px_rgba(0,0,0,0.15)] mb-4">
                  <div className="flex gap-[14px] items-start mb-2">
                    <img
                      src="/images/img_rectangle_2641.png"
                      alt="Geminin Apartment"
                      className="w-[96px] h-[114px] rounded-[4px] object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <h4
                        className="text-text-primary font-bold text-base leading-[20px] mb-1"
                        style={{ fontFamily: "Roboto" }}
                      >
                        Geminin Apartment
                      </h4>
                      <p
                        className="text-text-primary text-xs leading-[14px] mb-2 opacity-75"
                        style={{ fontFamily: "Roboto" }}
                      >
                        164 S.carson court newport news,VA 23601
                      </p>
                      <div className="flex justify-end mb-2">
                        <span
                          className="text-text-primary text-sm leading-[17px]"
                          style={{ fontFamily: "Roboto", fontWeight: "700" }}
                        >
                          + 3,5% <span className="font-normal">Yield</span>
                        </span>
                      </div>

                      {/* Progress Bars */}
                      <div className="space-y-1 mb-2">
                        <div className="w-full h-[6px] bg-blue-500 rounded-[3px]"></div>
                        <div className="w-full h-[6px] bg-green-100 rounded-[3px] relative">
                          <div className="w-[66%] h-full bg-green-600 rounded-[3px]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Stats Row */}
                  <div
                    className="flex justify-between items-center text-xs opacity-75 mb-1"
                    style={{ fontFamily: "Roboto" }}
                  >
                    <span>Committed</span>
                    <span>Distribution</span>
                    <span>Contribution</span>
                  </div>
                  <div
                    className="flex justify-between items-center text-sm font-medium"
                    style={{ fontFamily: "Roboto" }}
                  >
                    <span>$105,555</span>
                    <span>$473,685</span>
                    <span>$948,355</span>
                  </div>
                </div>

                {/* Additional cards with stacked layout - Matching Figma Design EXACTLY */}
                <div className="space-y-4">
                  {/* Aurora Card */}
                  <div className="bg-white rounded-[16px] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    <div className="flex gap-3 items-start">
                      <img
                        src="/images/img_rectangle_2893.png"
                        alt="Aurora"
                        className="w-[88px] h-[88px] rounded-[12px] object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4
                          className="text-text-primary font-bold text-base leading-[20px] mb-1"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Aurora
                        </h4>
                        <p
                          className="text-text-primary text-xs leading-[15px] mb-2"
                          style={{ fontFamily: "Roboto", color: "#b0b0b0" }}
                        >
                          164 S.carson court
                          <br />
                          newport news,VA 23601
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#00b894"
                            strokeWidth="3"
                          >
                            <path d="M6 9l6 6 12-12" />
                          </svg>
                          <span
                            className="text-text-primary text-xs font-semibold"
                            style={{ fontFamily: "Roboto", color: "#00b894" }}
                          >
                            + 3,5%{" "}
                            <span className="font-normal text-gray-500">
                              Yield
                            </span>
                          </span>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-1 mb-2">
                          <div className="w-full h-[6px] bg-blue-500 rounded-[3px]"></div>
                          <div className="w-full h-[6px] bg-cyan-400 rounded-[3px]"></div>
                        </div>

                        {/* Stats */}
                        <div
                          className="flex justify-between text-xs mb-0.5"
                          style={{ fontFamily: "Roboto", color: "#b0b0b0" }}
                        >
                          <span className="text-[11px]">Committed</span>
                          <span className="text-[11px]">Distribution</span>
                          <span className="text-[11px]">Contribution</span>
                        </div>
                        <div
                          className="flex justify-between text-xs font-bold"
                          style={{ fontFamily: "Roboto", color: "#2f3130" }}
                        >
                          <span>$219,278</span>
                          <span>$710,568</span>
                          <span>$928,541</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Genesis Card */}
                  <div className="bg-white rounded-[16px] p-4 shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
                    <div className="flex gap-3 items-start">
                      <img
                        src="/images/img_rectangle_2894.png"
                        alt="Genesis"
                        className="w-[88px] h-[88px] rounded-[12px] object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <h4
                          className="text-text-primary font-bold text-base leading-[20px] mb-1"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Genisis
                        </h4>
                        <p
                          className="text-text-primary text-xs leading-[15px] mb-2"
                          style={{ fontFamily: "Roboto", color: "#b0b0b0" }}
                        >
                          164 S.carson court
                          <br />
                          newport news,VA 23601
                        </p>
                        <div className="flex items-center gap-1 mb-2">
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#00b894"
                            strokeWidth="3"
                          >
                            <path d="M6 9l6 6 12-12" />
                          </svg>
                          <span
                            className="text-text-primary text-xs font-semibold"
                            style={{ fontFamily: "Roboto", color: "#00b894" }}
                          >
                            + 3,5%{" "}
                            <span className="font-normal text-gray-500">
                              Yield
                            </span>
                          </span>
                        </div>

                        {/* Progress Bars */}
                        <div className="space-y-1 mb-2">
                          <div className="w-full h-[6px] bg-blue-500 rounded-[3px]"></div>
                          <div className="w-full h-[6px] bg-cyan-400 rounded-[3px]"></div>
                        </div>

                        {/* Stats */}
                        <div
                          className="flex justify-between text-xs mb-0.5"
                          style={{ fontFamily: "Roboto", color: "#b0b0b0" }}
                        >
                          <span className="text-[11px]">Committed</span>
                          <span className="text-[11px]">Distribution</span>
                          <span className="text-[11px]">Contribution</span>
                        </div>
                        <div
                          className="flex justify-between text-xs font-bold"
                          style={{ fontFamily: "Roboto", color: "#2f3130" }}
                        >
                          <span>$169.43</span>
                          <span>$854.08</span>
                          <span>$275.43</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Investor Profile Card - Matching Figma Design */}
              <div className="absolute top-[80px] sm:top-[120px] lg:top-[-20px] right-[15px] sm:right-[30px] lg:left-[507px] w-[280px] sm:w-[300px] lg:w-[340px] bg-white rounded-[24px] shadow-md overflow-hidden">
                {/* Profile Header with Background */}
                <div className="relative">
                  {/* Background Image */}
                  <img
                    src="/images/img_rectangle_2597.png"
                    alt="Building"
                    className="w-full h-[120px] object-cover"
                  />

                  {/* Profile Image - Overlapping */}
                  <div className="absolute left-4 -bottom-6 z-10">
                    <img
                      src="/images/craig.svg"
                      alt="Julie Craig"
                      className="w-[96px] h-[96px] rounded-full border-4 border-white object-cover shadow-md"
                    />
                  </div>
                </div>

                {/* Content Area */}
                <div className="px-4 pb-4">
                  {/* Name and Title */}
                  <h3
                    className="text-text-primary font-bold text-lg mb-1"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Julie Craig
                  </h3>
                  <p
                    className="text-gray-500 text-sm mb-4"
                    style={{ fontFamily: "Roboto" }}
                  >
                    Investor
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {/* Deals Card */}
                    <div className="bg-purple-100 rounded-lg p-3 flex items-center gap-2">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-purple-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54-2.12-2.66-2.12 2.66H11l2.04-2.71 2.04 2.71h3.33L13.96 9.29z" />
                        </svg>
                      </div>
                      <div>
                        <div
                          className="text-lg font-bold text-text-primary"
                          style={{ fontFamily: "Roboto" }}
                        >
                          68
                        </div>
                        <div
                          className="text-xs text-gray-600"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Deals
                        </div>
                      </div>
                    </div>

                    {/* Match Card */}
                    <div className="bg-green-100 rounded-lg p-3 flex items-center gap-2">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                        <svg
                          className="w-5 h-5 text-green-600"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                        </svg>
                      </div>
                      <div>
                        <div
                          className="text-lg font-bold text-green-600"
                          style={{ fontFamily: "Roboto" }}
                        >
                          80%
                        </div>
                        <div
                          className="text-xs text-gray-600"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Match
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Financial Stats */}
                  <div className="space-y-3 mb-4 pb-4 border-b border-gray-200">
                    {/* Row 1: Borrowed & Paid */}
                    <div className="flex justify-between">
                      <div>
                        <div
                          className="text-xs text-gray-500 mb-1"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Borrowed
                        </div>
                        <div
                          className="text-lg font-bold text-text-primary"
                          style={{ fontFamily: "Roboto" }}
                        >
                          $ 350,000
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className="text-xs text-gray-500 mb-1"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Paid
                        </div>
                        <div className="flex items-center gap-1">
                          <div
                            className="text-lg font-bold text-text-primary"
                            style={{ fontFamily: "Roboto" }}
                          >
                            $ 184,000
                          </div>
                          <span className="text-xs font-bold text-green-600">
                            62%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Row 2: Earned & Loan Term */}
                    <div className="flex justify-between">
                      <div>
                        <div
                          className="text-xs text-gray-500 mb-1"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Earned
                        </div>
                        <div className="flex items-center gap-1">
                          <div
                            className="text-lg font-bold text-text-primary"
                            style={{ fontFamily: "Roboto" }}
                          >
                            $ 166,000
                          </div>
                          <span className="text-xs font-bold text-green-600">
                            38%
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div
                          className="text-xs text-gray-500 mb-1"
                          style={{ fontFamily: "Roboto" }}
                        >
                          Loan Term
                        </div>
                        <div
                          className="text-lg font-bold text-text-primary"
                          style={{ fontFamily: "Roboto" }}
                        >
                          12 Months
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Collaborators */}
                  <div className="mb-4">
                    <div
                      className="text-xs text-gray-500 mb-2"
                      style={{ fontFamily: "Roboto" }}
                    >
                      19 Collaborators
                    </div>
                    <div className="flex items-center">
                      <div className="flex -space-x-3">
                        <img
                          src="/images/img_ellipse_49.png"
                          alt=""
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                        <img
                          src="/images/img_ellipse_50.png"
                          alt=""
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                        <img
                          src="/images/img_ellipse_49.png"
                          alt=""
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                        <img
                          src="/images/img_ellipse_50.png"
                          alt=""
                          className="w-8 h-8 rounded-full border-2 border-white object-cover"
                        />
                        <div className="w-8 h-8 rounded-full border-2 border-primary-light bg-purple-100 flex items-center justify-center">
                          <span className="text-xs font-bold text-primary-light">
                            +14
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Navigation Bar */}
                  <div className="flex justify-around items-center border-t border-gray-200 bg-gray-50 -mx-4 -mb-4 px-4 py-3 rounded-b-[24px]">
                    <button className="flex flex-col items-center text-purple-600 hover:opacity-70 transition">
                      <svg
                        className="w-5 h-5 mb-1"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
                      </svg>
                    </button>
                    <button className="flex flex-col items-center text-gray-400 hover:opacity-70 transition">
                      <svg
                        className="w-5 h-5 mb-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                      </svg>
                    </button>
                    <button className="flex flex-col items-center text-gray-400 hover:opacity-70 transition">
                      <svg
                        className="w-5 h-5 mb-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    </button>
                    <button className="flex flex-col items-center text-gray-400 hover:opacity-70 transition">
                      <svg
                        className="w-5 h-5 mb-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
