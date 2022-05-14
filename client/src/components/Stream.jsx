import React from "react";

const style = {
  wrapper: `w-screen h-[90vh] p-4`,
  container: ` h-full border-8`,
  topController: `flex h-5/6`,
  streamContainer: `flex w-3/5 h-full`,
  chatContainer: `flex w-2/5 h-full`,
  bottomController: `flex h-1/6`,
};

const Stream = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.topController}>
          <div className={style.streamContainer}>streamContainer</div>
          <div className={style.chatContainer}>chatContainer</div>
        </div>

        <div className={style.bottomController}>bottomController</div>
      </div>
    </div>
  );
};

export default Stream;
