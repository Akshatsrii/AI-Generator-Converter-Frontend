import React, { useState } from "react";
import Markdown from "react-markdown";

const CreationItem = ({ item }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      onClick={() => setExpanded(!expanded)}
      className="p-4 max-w-5xl text-sm bg-white border border-gray-200 rounded-lg cursor-pointer hover:shadow-md transition"
    >
      {/* HEADER */}
      <div className="flex justify-between items-center gap-4">
        <div>
          <h2 className="font-medium text-gray-900">{item.prompt}</h2>
          <p className="text-gray-500 text-xs mt-1">
            {item.type} •{" "}
            {new Date(item.created_at || item.createdAt).toLocaleDateString()}
          </p>
        </div>

        <button className="bg-[#EFF6FF] border border-[#BFDBFE] text-[#1E40AF] px-4 py-1 rounded-full text-xs font-medium">
          {item.type}
        </button>
      </div>

      {/* EXPANDED CONTENT */}
      {expanded && (
        <div className="mt-4">
          {item.type === "image" ? (
            <img
              src={item.content}
              alt="generated"
              className="w-full max-w-md rounded-md border"
            />
          ) : (
            <div className="mt-3 h-full max-h-64 overflow-y-auto text-sm text-slate-700">
              <div className="prose prose-sm max-w-none">
                <Markdown>{item.content}</Markdown>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CreationItem;
