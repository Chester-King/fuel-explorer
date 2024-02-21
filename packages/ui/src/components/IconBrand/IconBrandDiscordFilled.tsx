import { TablerIconsProps } from '@tabler/icons-react';

export const IconBrandDiscordFilled = ({
  fill = 'currentColor',
  size,
}: TablerIconsProps): JSX.Element => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
    >
      <path
        fill={fill}
        d="M20.33 4.228a19.556 19.556 0 0 0-4.951-1.556c-.213.385-.463.904-.634 1.317a18.16 18.16 0 0 0-5.488 0c-.191-.45-.405-.889-.642-1.317-1.738.3-3.401.83-4.955 1.56C.527 8.967-.323 13.584.102 18.137a19.798 19.798 0 0 0 6.073 3.111c.488-.673.925-1.388 1.3-2.142a12.787 12.787 0 0 1-2.048-.997c.172-.127.34-.26.502-.397 3.95 1.847 8.24 1.847 12.142 0 .164.137.332.27.502.398-.65.39-1.337.726-2.052.998.376.752.81 1.47 1.3 2.142a19.747 19.747 0 0 0 6.077-3.113c.498-5.277-.851-9.853-3.568-13.91ZM8.013 15.337c-1.185 0-2.157-1.107-2.157-2.454 0-1.348.951-2.457 2.157-2.457s2.179 1.107 2.158 2.457c.002 1.347-.952 2.454-2.158 2.454Zm7.974 0c-1.186 0-2.158-1.107-2.158-2.454 0-1.348.951-2.457 2.158-2.457 1.206 0 2.178 1.107 2.157 2.457 0 1.347-.951 2.454-2.157 2.454Z"
      />
    </svg>
  );
};
