import React from "react";
import { ReactComponent as Close } from "../assets/close.svg";

export default function Toast({ msg }) {
  return (
    <div className="mt-4 bg-red-50 border-l-4 border-red-400 p-4 mb-8">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Close className="text-red-400" />
        </div>

        <div class="ml-3">
          <p class="text-sm leading-5 text-red-700">{msg}</p>
        </div>
      </div>
    </div>
  );
}
