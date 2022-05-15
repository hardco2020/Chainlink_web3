import React from "react";

const Avatar = ({ img }) => {
  return (
    <div>
      <img
        class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src={img}
        alt="{user.handle}"
      />
    </div>
  );
};

export default Avatar;
