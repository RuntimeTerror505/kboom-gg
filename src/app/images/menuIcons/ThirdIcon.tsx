import type { FunctionComponent, SVGProps } from 'react';

const ThirdIcon: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" { ...props }>
    <path
      d="M9.00006 3H15.0001L18.0001 10L12.0001 12M9.00006 3L6.00006 10L12.0001 12M9.00006 3L12.0001 12M12.0001 12L10.5001 15L7.50006 15.5L9.50006 17.5L9.00006 21L12.0001 19.5L15.0001 21L14.5001 17.5L16.5001 15.5L13.5001 15L12.0001 12ZM15.0001 11L12.0001 3"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);
export default ThirdIcon;
