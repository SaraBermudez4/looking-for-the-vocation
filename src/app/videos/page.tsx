import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Youtube from "@/shortcodes/Youtube";
import { RegularPage } from "@/types";

const Videos = () => {
  const data: RegularPage = getListPage("orientation/videos/_index.md");
  const { frontmatter } = data;
  const { title, meta_title, description, image, items, body } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section-sm">
        <div className="container">
          <div className="row justify-center">
            <div>
              {image && (
                <ImageFallback
                  className="mx-auto mb-6 rounded-lg"
                  src={image}
                  width={200}
                  height={200}
                  alt={title}
                />
              )}
              <h2
                dangerouslySetInnerHTML={markdownify(title)}
                className="h3 mb-6 text-center"
              />
              <p className="mb-8 text-lg">{body}</p>
              <div className="grid md:grid-cols-2">
                {items?.map((item, index) => (
                  <div className="container mx-auto" key={index}>
                    <div className="bg-white rounded-lg shadow-xl mt-4  mx-1">
                      <div className="px-4 py-2 text-center bg-theme-light dark:bg-darkmode-theme-light rounded-t-lg">
                        <h5 className="font-semibold text-xl">{item.name}</h5>
                      </div>
                      <div className="w-full">
                        <Youtube id={item.link || ""} title="Play:Youtube" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Videos;
