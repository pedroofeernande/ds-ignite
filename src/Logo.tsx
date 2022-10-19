import {SVGAttributes}  from "react"

interface LogoProps extends SVGAttributes<HTMLOrSVGElement>{}

export function Logo(props: LogoProps) {
  return (
    <svg
      width={124}
      height={133}
      viewBox="0 0 124 133"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M124 66.512c0-7.732-10.287-15.06-26.059-19.604 3.64-15.132 2.022-27.17-5.105-31.024-1.643-.904-3.564-1.333-5.662-1.333v5.306c1.163 0 2.098.214 2.881.618 3.438 1.856 4.93 8.922 3.766 18.01-.278 2.237-.733 4.592-1.289 6.995-4.953-1.142-10.362-2.022-16.05-2.593-3.412-4.401-6.95-8.398-10.514-11.896 8.24-7.209 15.974-11.158 21.231-11.158v-5.305c-6.95 0-16.05 4.663-25.25 12.752-9.2-8.042-18.299-12.657-25.25-12.657v5.305c5.233 0 12.992 3.926 21.232 11.087a114.193 114.193 0 00-10.439 11.872c-5.712.571-11.121 1.451-16.075 2.617a67.977 67.977 0 01-1.314-6.9c-1.188-9.088.278-16.154 3.69-18.033.758-.429 1.744-.619 2.907-.619v-5.306c-2.124 0-4.044.429-5.713 1.333-7.102 3.854-8.694 15.869-5.03 30.953C10.238 51.498 0 58.803 0 66.511c0 7.732 10.287 15.06 26.059 19.604-3.64 15.131-2.022 27.17 5.105 31.024 1.643.904 3.564 1.332 5.687 1.332 6.95 0 16.05-4.663 25.25-12.752 9.2 8.042 18.3 12.657 25.25 12.657 2.123 0 4.044-.428 5.712-1.332 7.103-3.854 8.695-15.869 5.03-30.953C113.764 81.548 124 74.22 124 66.512zM91.092 50.643c-.936 3.07-2.098 6.233-3.412 9.398a110.676 110.676 0 00-3.312-5.71c-1.162-1.904-2.4-3.76-3.64-5.568 3.59.5 7.053 1.119 10.364 1.88zM79.516 75.981c-1.972 3.212-3.994 6.257-6.092 9.088-3.766.31-7.582.476-11.424.476-3.816 0-7.633-.166-11.374-.452a130.344 130.344 0 01-6.116-9.04 121.535 121.535 0 01-5.258-9.47 121.598 121.598 0 015.232-9.492c1.972-3.212 3.994-6.258 6.092-9.089A139.7 139.7 0 0162 47.526c3.817 0 7.633.167 11.374.452a130.317 130.317 0 016.116 9.041c1.921 3.117 3.665 6.281 5.258 9.47a130.613 130.613 0 01-5.232 9.492zm8.164-3.093a97.993 97.993 0 013.488 9.469c-3.312.761-6.8 1.404-10.414 1.903 1.239-1.832 2.477-3.711 3.64-5.638 1.162-1.904 2.25-3.83 3.286-5.734zM62.05 98.273a100.1 100.1 0 01-7.026-7.613c2.275.095 4.6.167 6.95.167 2.377 0 4.727-.048 7.027-.167a94.677 94.677 0 01-6.95 7.614zM43.247 84.26c-3.59-.5-7.052-1.118-10.363-1.88.935-3.068 2.098-6.233 3.412-9.397a110.75 110.75 0 003.311 5.71 156.244 156.244 0 003.64 5.567zm18.678-49.51a100.1 100.1 0 017.027 7.614c-2.275-.096-4.6-.167-6.951-.167-2.376 0-4.727.048-7.026.167a94.696 94.696 0 016.95-7.614zM43.221 48.764c-1.239 1.831-2.477 3.71-3.64 5.638a132.229 132.229 0 00-3.286 5.71 97.975 97.975 0 01-3.488-9.469c3.311-.737 6.8-1.38 10.414-1.88zM20.347 78.55C11.398 74.958 5.61 70.247 5.61 66.512c0-3.735 5.788-8.47 14.735-12.039 2.174-.88 4.55-1.665 7.002-2.402 1.44 4.663 3.336 9.516 5.687 14.489-2.326 4.948-4.196 9.778-5.611 14.417a79.95 79.95 0 01-7.078-2.427zm13.598 33.998c-3.438-1.855-4.93-8.921-3.766-18.01.278-2.236.733-4.592 1.289-6.995 4.954 1.142 10.362 2.023 16.05 2.594 3.411 4.401 6.95 8.398 10.514 11.895-8.24 7.209-15.974 11.159-21.231 11.159-1.138-.024-2.098-.238-2.856-.643zm59.952-18.129c1.188 9.089-.278 16.155-3.69 18.034-.758.428-1.744.619-2.907.619-5.231 0-12.991-3.926-21.23-11.087a114.205 114.205 0 0010.438-11.872c5.712-.571 11.121-1.451 16.075-2.617.581 2.403 1.036 4.71 1.314 6.923zm9.731-15.869c-2.173.88-4.55 1.666-7.001 2.403-1.44-4.663-3.336-9.516-5.687-14.489 2.325-4.948 4.196-9.778 5.611-14.417a83.416 83.416 0 017.102 2.426c8.948 3.593 14.736 8.304 14.736 12.039-.025 3.735-5.813 8.47-14.761 12.038z"
        fill="#61DAFB"
      />
      <path
        d="M61.975 77.385c6.379 0 11.55-4.868 11.55-10.873 0-6.005-5.171-10.873-11.55-10.873-6.38 0-11.551 4.868-11.551 10.873 0 6.005 5.171 10.873 11.55 10.873z"
        fill="#61DAFB"
      />
    </svg>
  )
}

