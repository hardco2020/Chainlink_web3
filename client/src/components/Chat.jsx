import React from "react";

const style = {
  wrapper: `w-full h-full`,
  header: `flex h-[5vh] items-center justify-center font-bold bg-red-100`,
  chatContainer: `h-5/6`,
  faceContainer: `flex justify-center h-3/6 p-1 border-4`,
  faceLeft: `w-1/2 h-full bg-sky-100 mr-2`,
  faceRight: `w-1/2 h-full bg-sky-100`,
  chatRoomContainer: `flex h-[39vh] bg-orange-100 p-2`,
};

const Chat = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>Class101</div>
      <div className={style.chatContainer}>
        <div className={style.faceContainer}>
          <div className={style.faceLeft}>FaceLeft</div>
          <div className={style.faceRight}>FaceRight</div>
        </div>
        <div className={style.chatRoomContainer}> Chat Room </div>
      </div>
    </div>
  );
};

export default Chat;
