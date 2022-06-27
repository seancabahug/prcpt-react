/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { accentColor } from "../config";
import { Text } from "./Typography";

export default function ButtonLink(props) {
  return (
    <Link
      to={props.to}
      css={css`
        box-sizing: border-box;
        margin: 0;
        min-width: 0;
        min-height: 20px;
        outline: none;
        border-width: 2px;
        border-radius: 999px;
        border-color: white;
        font-family: Epilogue;
        font-weight: 500;
        font-size: 16px;
        line-height: 140%;
        text-transform: none;
        height: 42px;
        border-style: solid;
        color: #fff;
        padding: 10px 25px;
        text-decoration: none;
        flex-grow: 1;
        width: 211px;
        justify-content: center;
        transition: border-color 0.25s;
        transition: background-color 0.25s;

        :hover {
          background: ${accentColor};
          border-color: ${accentColor};
        }

        @media screen and (max-width: 992px) {
          width: 100%;
        }
      `}
    >
      <span>{props.text}</span>
    </Link>
  );
}
