import React from "react";

const Avatar = () => {
  return (
    <div>
      <img
        class="inline-block h-12 w-12 rounded-full ring-2 ring-white"
        src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50"
        alt="{user.handle}"
      />
    </div>
  );
};

export default Avatar;
