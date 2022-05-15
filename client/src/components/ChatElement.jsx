import React from "react";
import Avatar from "./Avatar";

const style = {
  wrapper: `w-full p-2`,
  dialoguesContainer: `h-5/6 overflow-auto w-full p-2 mb-3 bg-orange-100`,
  dialogue: `flex mb-3`,
  avatarContainer: `mr-2`,
  contentContainer: ``,
  nameContainer: `text-slate-500`,
  textContainer: `flex bg-white p-2 rounded-lg`,
  inputContainer: `flex items-center  min-w-fit h-1/6 border-2 pt-2 pb-2 pl-2 rounded  border-r-0`,
  inputField: `mr-2 w-5/6`,
  input: `border-none focus:outline-none`,
  submitButton: `bg-orange-100 p-2 rounded`,
  submitField: `w-1/6 flex justify-end`,
};

const ChatElement = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.dialoguesContainer}>
        <div className={style.dialogue}>
          <div className={style.avatarContainer}>
            <Avatar
              img={
                "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              }
            />
          </div>
          <div className={style.contentContainer}>
            <div className={style.nameContainer}>Name</div>
            <div className={style.textContainer}>TextContent</div>
          </div>
        </div>
        <div className={style.dialogue}>
          <div className={style.avatarContainer}>
            <Avatar
              img={
                "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              }
            />
          </div>
          <div className={style.contentContainer}>
            <div className={style.nameContainer}>Name</div>
            <div className={style.textContainer}>
              Hi this is Michael talking to Michael and his friend
            </div>
          </div>
        </div>
        <div className={style.dialogue}>
          <div className={style.avatarContainer}>
            <Avatar
              img={
                "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
              }
            />
          </div>
          <div className={style.contentContainer}>
            <div className={style.nameContainer}>Name</div>
            <div className={style.textContainer}>TextContent</div>
          </div>
        </div>
      </div>
      <div className={style.inputContainer}>
        <div className={style.inputField}>
          <input
            placeholder="Write the message..."
            className={style.input}
          ></input>
        </div>
        <div className={style.submitField}>
          <button className={style.submitButton}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default ChatElement;
