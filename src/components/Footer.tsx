import type { FunctionalComponent } from "preact";

interface IFooterProps {
  classes?: string;
}

export const Footer: FunctionalComponent<IFooterProps> = ({ classes }) => {
  return (
    <div class={classes + " flex justify-center p-8"}>
      <a
        rel="license"
        href="http://creativecommons.org/licenses/by-nc-sa/3.0/deed.en_GB"
      >
        <img
          alt="Creative Commons Licence"
          style="border-width:0"
          src="https://mirrors.creativecommons.org/presskit/buttons/80x15/svg/by-nc-sa.svg"
        />
      </a>
    </div>
  );
};
