import React from 'react';
import Avatar from '../components/Avatar';

export default function Footer() {
  return (
    <div className="px-14 py-20 w-full bottom-0 bg-bgfooter">
      <div className="flex flex-col justify-center mx-auto">
        <div className="grid grid-cols-3">
          <div className="flex flex-col ml-14 pb-5 font-bold">
            <p className="text-2xl pb-4 font-bold text-footer">
              Contact Details
            </p>
            <p className="text-white">5557 483961</p>
            <p className="text-white">05557 345098</p>
            <a className="text-white underline cursor-pointer">
              hello@shinetimebanbury.co.uk
            </a>
          </div>
          <div className="flex flex-col items-center ml-14 pb-5">
            <p className="text-2xl pb-4 font-bold text-footer">Find us on</p>
            <Avatar src={'/img/white-fb-btn.svg'} alt="" size={'55'} />
          </div>
          <div className="flex flex-col font-bold ml-14 pb-5">
            <p className="text-2xl pb-4 text-footer">Useful Links</p>
            <a className="cursor-pointer text-white">COVID-19</a>
            <a className="cursor-pointer text-white">Partner 1</a>
            <a className="cursor-pointer text-white">Partner 2</a>
            <a className="cursor-pointer text-white">Top Tips</a>
          </div>
        </div>
      </div>
      <h1 className="text-center pt-16 text-footer font-bold">
        © Shinetime Banbury | 2022
      </h1>
    </div>
  );
}
