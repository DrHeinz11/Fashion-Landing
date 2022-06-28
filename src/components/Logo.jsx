import * as React from "react"

const Logo = (props,color) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={79} height={45} {...props}>
    <g data-name="Grupo 47">
      <path
        data-name="Trazado 33"
        d="M70.535 24.434a47.133 47.133 0 0 1 .352 7.034 47.133 47.133 0 0 1-.352 7.034 47.133 47.133 0 0 1-.352-7.034 44.839 44.839 0 0 1 .352-7.034Z"
      />
    </g>
    <g data-name="Grupo 48">
      <path
        data-name="Trazado 34"
        d="M77.569 31.468a47.133 47.133 0 0 1-7.034.352 47.133 47.133 0 0 1-7.034-.352 47.133 47.133 0 0 1 7.034-.352 47.133 47.133 0 0 1 7.034.352Z"
      />
    </g>
    <g data-name="Grupo 49">
      <path
        data-name="Trazado 35"
        d="M67.018 34.633a31.709 31.709 0 0 0 3.165-3.517 31.708 31.708 0 0 1 3.517-3.165 31.708 31.708 0 0 0-3.165 3.517 31.708 31.708 0 0 1-3.517 3.165Z"
      />
    </g>
    <g data-name="Grupo 50">
      <path
        data-name="Trazado 36"
        d="M73.7 34.633a31.708 31.708 0 0 0-3.517-3.165 31.708 31.708 0 0 1-3.165-3.517 31.707 31.707 0 0 0 3.517 3.165c1.055 1.055 2.11 2.462 3.165 3.517Z"
      />
    </g>
    <circle
      data-name="Elipse 10"
      cx={0.703}
      cy={0.703}
      r={0.703}
      transform="translate(69.831 30.764)"
      stroke="#575756"
      strokeMiterlimit={10}
      strokeWidth={0.25}
    />
    <text
      data-name="Fashion. Week"
      transform="translate(0 17)"
      fontSize={21}
      fontFamily="Runalto"
    >
      <tspan x={0} y={0}>
        {"Fashion."}
      </tspan>
      <tspan x={0} y={22}>
        {"Week"}
      </tspan>
    </text>
  </svg>
)

export default Logo;
