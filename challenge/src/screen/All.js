import React from "react";
import Card from "../components/Card";

const items = [
  {
    id: 1,
    created_at: "2006-10-09T18:21:51.000Z",
    author: "pg",
    title: "Y Combinator",
    url: "http://ycombinator.com",
    text: null,
    points: 57,
    parent_id: null,
    children: [
      {
        id: 15,
        created_at: "2006-10-09T19:51:01.000Z",
        author: "sama",
        text: "&#34;the rising star of venture capital&#34; -unknown VC eating lunch on SHR",
        points: 5,
        parent_id: 1,
        children: [
          {
            id: 17,
            created_at: "2006-10-09T19:52:45.000Z",
            author: "pg",
            text: "Is there anywhere to eat on Sandhill Road?",
            points: 5,
            parent_id: 15,
            children: [],
          },
        ],
      },
    ],
  },
];
export const All = () => {
  return (
    <div>
      <select className="rectangle-26">
        <option value="">Select your new</option>
        <option value="angular">Angular</option>
        <option value="react">React</option>
        <option value="vuejs">Vuejs</option>
      </select>
      <div>
        <Card items={items} />;
      </div>
    </div>
  );
};
