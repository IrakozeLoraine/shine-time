import Avatar from './Avatar';

export default function Header() {
  return (
    <div className="py-20 bg-sudsy-image md:bg-iron-image bg-cover h-[40vw] max-h-[40vw]">
      <div className="container mx-auto px-2 md:px-6">
        <div className="flex flex-col items-center -mt-10 md:items-end md:mr-52">
          <div className="flex md:flex-col gap-1 md:gap-3 mb-2 md:mb-12">
            <h2 className="font-cursive text-white text-2xl md:text-7xl">
              Looking for the
            </h2>
            <br />
            <h2 className="font-cursive text-white text-2xl md:text-7xl text-center">
              time to Shine?
            </h2>
          </div>

          <div className="block md:flex md:gap-8 md:items-center">
            <button className="bg-white text-xs md:text-2xl text-main font-bold rounded-md py-3 px-9">
              contact us
            </button>
            <div className="hidden md:block">
              <Avatar src={'/img/white-fb-btn.svg'} alt="" size={'55'} />
            </div>
          </div>
        </div>
      </div>
    </div>
    // <>
    //   <Carousel
    //     carouseImages={[
    //       '/img/carousel/iron-image.svg',
    //       '/img/carousel/spray-image.svg',
    //       '/img/carousel/sudsy-image.svg',
    //       '/img/carousel/tools-image.svg',
    //     ]}
    //   />
    // </>
  );
}
