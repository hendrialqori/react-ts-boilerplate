import { ComponentProps } from "react";
import "./style.css";

type Props = ComponentProps<"input">;

export const Checkbox = ({ ...rest }: Props) => {
  return (
    <div className="checkbox-wrapper">
      <div className="round">
        <input {...rest} type="checkbox" id="checkbox" />
        <label htmlFor="checkbox"></label>
      </div>
    </div>
  );
};
