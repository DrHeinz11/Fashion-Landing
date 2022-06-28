import Cta from "../../../components/Cta";
import { Star, Circles, GaleryHero } from "../../../components/export";
import { Heading, Stack, Box } from "@chakra-ui/react";
export default function Hero() {
  return (
    <Stack>
      <Box 
      marginTop='55px'
      display="flex" alignItems="center" flexDirection="column">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50.662"
          height="50.662"
          viewBox="0 0 50.662 50.662"
        >
          <g id="estrella" transform="translate(-0.5 -0.5)">
            <g
              id="Grupo_11"
              data-name="Grupo 11"
              transform="translate(24.73 0.5)"
            >
              <path
                id="Trazado_15"
                data-name="Trazado 15"
                d="M12.6.5a243.61,243.61,0,0,1,1.1,25.331,243.61,243.61,0,0,1-1.1,25.331,243.61,243.61,0,0,1-1.1-25.331A243.61,243.61,0,0,1,12.6.5Z"
                transform="translate(-11.5 -0.5)"
                fill="#1d1d1b"
              />
            </g>
            <g
              id="Grupo_12"
              data-name="Grupo 12"
              transform="translate(0.5 24.73)"
            >
              <path
                id="Trazado_16"
                data-name="Trazado 16"
                d="M51.162,12.6a243.61,243.61,0,0,1-25.331,1.1A243.61,243.61,0,0,1,.5,12.6a243.61,243.61,0,0,1,25.331-1.1A243.61,243.61,0,0,1,51.162,12.6Z"
                transform="translate(-0.5 -11.5)"
                fill="#1d1d1b"
              />
            </g>
            <g
              id="Grupo_13"
              data-name="Grupo 13"
              transform="translate(13.937 14.377)"
            >
              <path
                id="Trazado_17"
                data-name="Trazado 17"
                d="M6.6,30.149c3.524-4.185,7.489-8.15,11.234-12.115C21.8,14.289,25.764,10.324,29.949,6.8c-3.524,4.185-7.489,8.15-11.234,12.115C14.75,22.66,11.005,26.4,6.6,30.149Z"
                transform="translate(-6.6 -6.8)"
                fill="#1d1d1b"
              />
            </g>
            <g
              id="Grupo_14"
              data-name="Grupo 14"
              transform="translate(14.157 14.157)"
            >
              <path
                id="Trazado_18"
                data-name="Trazado 18"
                d="M30.049,30.049c-4.185-3.524-8.15-7.489-12.115-11.234C14.189,14.85,10.224,10.885,6.7,6.7c4.185,3.524,8.15,7.489,12.115,11.234C22.559,21.9,26.524,25.864,30.049,30.049Z"
                transform="translate(-6.7 -6.7)"
                fill="#1d1d1b"
              />
            </g>
            <circle
              id="Elipse_7"
              data-name="Elipse 7"
              cx="2.203"
              cy="2.203"
              r="2.203"
              transform="translate(23.628 23.628)"
              fill="#1d1d1b"
              stroke="#1d1d1b"
              stroke-miterlimit="10"
              stroke-width="0.75"
            />
            <path
              id="Trazado_19"
              data-name="Trazado 19"
              d="M5.7,2.5l1.1,1.982L9.008,5.8l-2.2,1.1-1.1,2.2-1.1-2.2L2.4,5.8,4.6,4.482Z"
              transform="translate(2.285 2.405)"
              fill="#1d1d1b"
            />
            <path
              id="Trazado_20"
              data-name="Trazado 20"
              d="M22.1,4.2l.441.661L23.2,5.3l-.661.22L22.1,6.4l-.441-.881L21,5.3l.661-.441Z"
              transform="translate(24.656 4.45)"
              fill="#1d1d1b"
            />
            <path
              id="Trazado_21"
              data-name="Trazado 21"
              d="M21.3,5l.661,1.322,1.542.881-1.542.661L21.3,9.405l-.881-1.542L19.1,7.2l1.322-.881Z"
              transform="translate(22.37 5.412)"
              fill="#1d1d1b"
            />
          </g>
        </svg>

        <Heading>Explore more fashion and collection</Heading>

        <Cta copy="Show more" />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="57.15"
          height="111.075"
          viewBox="0 0 57.15 111.075"
        >
          <g id="circle" transform="translate(-5.649 -0.726)">
            <circle
              id="Elipse_4"
              data-name="Elipse 4"
              cx="27.5"
              cy="27.5"
              r="27.5"
              transform="translate(6.724 1.726)"
              fill="none"
              stroke="rgba(0,0,0,0.5)"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <ellipse
              id="Elipse_5"
              data-name="Elipse 5"
              cx="27.5"
              cy="28"
              rx="27.5"
              ry="28"
              transform="translate(6.724 27.726)"
              fill="none"
              stroke="rgba(0,0,0,0.75)"
              stroke-miterlimit="10"
              stroke-width="2"
            />
            <ellipse
              id="Elipse_6"
              data-name="Elipse 6"
              cx="27.5"
              cy="27"
              rx="27.5"
              ry="27"
              transform="translate(6.724 56.726)"
              fill="none"
              stroke="#000"
              stroke-miterlimit="10"
              stroke-width="2.15"
            />
          </g>
        </svg>
      </Box>
      <GaleryHero />
    </Stack>
  );
}
