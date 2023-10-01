import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Accordion from "@/shortcodes/Accordion";
import Button from "@/shortcodes/Button";
import { RegularPage } from "@/types";

const Universities = () => {
  const data: RegularPage = getListPage("universities/_index.md");
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
              <div className="content">
                {items?.map((item, index) => (
                  <Accordion
                    title={item.name}
                    key={index}
                    className="text-left"
                  >
                    <p
                      dangerouslySetInnerHTML={markdownify(
                        item.description || "",
                      )}
                      className="mb-6"
                    />

                    <Button
                      label="Más información"
                      link={item.link || ""}
                      style="solid"
                    />
                  </Accordion>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Universities;
