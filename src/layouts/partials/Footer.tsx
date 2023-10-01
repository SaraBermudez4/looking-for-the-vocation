import config from "@/config/config.json";
import { markdownify } from "@/lib/utils/textConverter";

const Footer = () => {
  const { copyright, gratulations } = config.params;

  return (
    <footer className="bg-theme_footer dark:bg-darkmode-theme_footer">
      <div className="container"></div>
      <div className="border-t border-theme_footer py-7 dark:border-darkmode-border">
        <div className="container text-center text-dark dark:text-darkmode-light">
          <p dangerouslySetInnerHTML={markdownify(copyright)} />
          <p dangerouslySetInnerHTML={markdownify(gratulations)} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
