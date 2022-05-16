import React from "react";
import {
  AiOutlineArrowLeft,
  AiOutlineWifi,
  AiOutlineClose,
} from "react-icons/ai";
import {
  BsFillCameraVideoFill,
  BsFillCameraVideoOffFill,
  BsFillMicMuteFill,
  BsFillMicFill,
  BsRecordCircle,
  BsFullscreen,
} from "react-icons/bs";
import { GrMore } from "react-icons/gr";
import { MdOutlineScreenShare } from "react-icons/md";

const style = {
  wrapper: `flex justify-center w-full h-full bg-gray-900 text-white`,
  container: `flex justify-center items-center`,
  icon: `flex relative rounded-full w-10 h-10 bg-slate-100 mr-3`,
};
const IconStyle = {
  color: "black",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
};

const Bottom = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.icon}>
          <BsFillMicFill style={IconStyle} />
        </div>
        <div className={style.icon}>
          <BsRecordCircle style={IconStyle} />
        </div>
        <div className={style.icon}>
          <BsFillCameraVideoFill style={IconStyle} />
        </div>
        <div className={style.icon}>
          <BsFullscreen style={IconStyle} />
        </div>
        <div className={style.icon}>
          <MdOutlineScreenShare style={IconStyle} />
        </div>
      </div>
    </div>
  );
};

export default Bottom;
