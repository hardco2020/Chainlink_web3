import React from "react";
import Avatar from "./Avatar";
import Logo from "./Logo";

const style = {
  wrapper: `flex px-4 py-0 w-screen items-center shadow-lg font-bold`,
  headerFront: `flex justify-start flex-1 items-center py-4`,
  headerUrl: `font-bold bg-sky-100 p-2 rounded`,
  headerEnd: `flex flex-1 justify-end items-center text-2xl`,
};

const Header = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.headerFront}>
        <div className="mr-5">
          <Logo />
        </div>
        <div className={style.headerUrl}>
          https://www.minwt.com/webdesign-dev/css/21970.html
        </div>
      </div>
      <div className={style.headerEnd}>
        <div>HOME</div>
        <div className="ml-5">
          <Avatar
            img={
              "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
