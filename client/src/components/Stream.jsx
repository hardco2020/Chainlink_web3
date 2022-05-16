import React from "react";
import Bottom from "./Bottom";
import Chat from "./Chat";
import StreamElement from "./StreamElement";

const style = {
  wrapper: `w-screen h-[90vh] p-4`,
  container: ` h-full border-8 p-1`,
  topController: `flex h-[73vh]`,
  streamContainer: `flex w-3/5 h-full `,
  chatContainer: `flex w-2/5 h-full`,
  bottomController: `flex w-full h-[9vh]`,
};

const Stream = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.topController}>
          <div className={style.streamContainer}>
            <StreamElement />
          </div>
          <div className={style.chatContainer}>
            <Chat />
          </div>
        </div>

        <div className={style.bottomController}>
          <Bottom />
        </div>
      </div>
    </div>
  );
};

export default Stream;
