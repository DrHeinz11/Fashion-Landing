import * as React from "react"

const Circles = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={104.15}
    height={203.075}
    {...props}
  >
    <g transform="translate(-5.649 -.726)" fill="none" strokeMiterlimit={10}>
      <circle
        data-name="Elipse 4"
        cx={51}
        cy={51}
        r={51}
        transform="translate(6.724 1.726)"
        stroke="rgba(0,0,0,0.5)"
        strokeWidth={2}
      />
      <circle
        data-name="Elipse 5"
        cx={51}
        cy={51}
        r={51}
        transform="translate(6.724 50.726)"
        stroke="rgba(0,0,0,0.75)"
        strokeWidth={2}
      />
      <ellipse
        data-name="Elipse 6"
        cx={51}
        cy={49.5}
        rx={51}
        ry={49.5}
        transform="translate(6.724 103.726)"
        stroke="#000"
        strokeWidth={2.15}
      />
    </g>
  </svg>
)

export default Circles
