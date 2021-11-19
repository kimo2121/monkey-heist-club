import React from "react";
import "./styles.css";
import { BsDashLg } from "react-icons/bs";
interface MemberType {
  name?: string;
  img?: string;
  data?: any;
}

const Member: React.FC<MemberType> = ({ img, name, data }) => {
  return (
    <div id="Team" className="member">
      <img src={img} alt="" />
      <h4>{name}</h4>
      <ul>
        {data.map((item: string, index: number) => (
          <li key={index}>
            <BsDashLg />
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Member;
