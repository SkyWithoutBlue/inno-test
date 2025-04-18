const Partners = () => {
  const partners = [
    { src: "/partnerLogos/IMI.png" },
    { src: "/partnerLogos/Continental.png" },
    { src: "/partnerLogos/Honda.png" },
    { src: "/partnerLogos/Pirelli.png" },
    { src: "/partnerLogos/SKF.png" },
    { src: "/partnerLogos/ADAYO.png" },
    { src: "/partnerLogos/himile.png" },
    { src: "/partnerLogos/AMETEK.png" },
    { src: "/partnerLogos/Nokian Tyres.png" },
    { src: "/partnerLogos/Hankook.png" },
    { src: "/partnerLogos/FLEXTRONICS.png" },
    { src: "/partnerLogos/Michelin.png" }
  ];

  return (
    <div id="partners" className="relative h-[700px]">
      {/* Фоновое изображение */}
      <div
        className="t-cover__carrier absolute inset-0"
        style={{
          backgroundImage: 'url(https://optim.tildacdn.com/tild6665-3265-4239-b438-633632373939/-/format/webp/WhatsApp_Image_2025-.jpeg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'scroll',
          height: '100%'
        }}
      />

      {/* Фильтр - серый фон с прозрачностью 50% */}
      <div
        className="t-cover__filter absolute inset-0"
        style={{
          height: '100%',
          backgroundColor: 'rgba(153, 153, 153, 0.7)' // #999999 с прозрачностью 50%
        }}
      />

      {/* Контент с партнерами */}
      <div className="t-container t-card__container relative z-20">
        <div className="flex flex-col items-center justify-center pb-12">
          <div className="t1074__textwrapper text-center mb-12 mt-[100px] md:mt-0">
            <div className="text-[30px] text-black font-[Arial] md:mb-12 md:mt-12 font-bold">
              Партнеры
            </div>
          </div>

          <div className="max-w-[1200px] mx-auto px-5">
            {/* Первый ряд */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-12">
              {partners.slice(0, 6).map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    className={`t1074__img w-auto object-contain ${
                      partner.src.includes('Honda') ? 'w-[180px] h-[180px]' : 'max-h-[120px]'
                    }`}
                    src={partner.src}
                    alt=""
                  />
                </div>
              ))}
            </div>

            {/* Второй ряд */}
            <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
              {partners.slice(6).map((partner, index) => (
                <div key={index} className="flex items-center justify-center">
                  <img
                    className="t1074__img max-h-[120px] w-auto object-contain"
                    src={partner.src}
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
