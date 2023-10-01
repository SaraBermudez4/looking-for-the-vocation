"use client";

import ImageFallback from "@/helpers/ImageFallback";
import { markdownify } from "@/lib/utils/textConverter";
import { Call_to_action } from "@/types";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

interface PageData {
  notFound?: boolean;
  content?: string;
  frontmatter: Call_to_action;
}

const CallToAction = ({ data }: { data: PageData }) => {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const resolvedLogo =
    mounted && (theme === "dark" || resolvedTheme === "dark")
      ? data.frontmatter.imageDark
      : data.frontmatter.image;

  return (
    <>
      {data.frontmatter.enable && (
        <section className="mb-28 mt-20">
          <div className="container">
            <div className="rounded-xl bg-theme-light px-4 py-16 dark:bg-darkmode-theme-light xl:p-20">
              <div className="row items-center justify-between">
                <div className="mb-10 md:col-5 lg:col-4 md:order-2 md:mb-0">
                  <ImageFallback
                    className="w-full"
                    src={resolvedLogo}
                    width={392}
                    height={390}
                    alt="cta-image"
                  />
                </div>
                <div className="md:col-7 md:order-1">
                  <h2
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.title,
                    )}
                    className="mb-2"
                  />
                  <p
                    dangerouslySetInnerHTML={markdownify(
                      data.frontmatter.description,
                    )}
                    className="mb-6"
                  />
                  {data.frontmatter.button.enable && (
                    <a
                      className="btn btn-primary"
                      href={data.frontmatter.button.link}
                      target="_blank"
                    >
                      {data.frontmatter.button.label}
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CallToAction;
