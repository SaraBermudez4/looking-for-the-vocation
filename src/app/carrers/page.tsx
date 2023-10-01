import ImageFallback from "@/helpers/ImageFallback";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

const Carrers = () => {
  const data: RegularPage = getListPage("carrers/_index.md");
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
              <div className="justify-center columns-1 md:columns-2 ">
                {items?.map((item, index) => (
                  <div className="container mx-auto flex flex-row " key={index}>
                    <div className="bg-white rounded-lg shadow-xl mt-4 w-100 mx-1 ">
                      <div className="px-4 py-2 text-center bg-theme-light dark:bg-darkmode-theme-light rounded-t-lg">
                        <h3 className="font-semibold text-xl">{item.name}</h3>
                      </div>

                      <div className="flex flex-col md:flex-row overflow-hidden  ">
                        <div className="h-64 w-auto md:w-10/12 self-center">
                          <ImageFallback
                            className="inset-0 h-full w-full object-cover object-center"
                            src={item.link}
                            width={100}
                            height={100}
                            alt="cta-image"
                          />
                        </div>

                        <div className="w-full py-4 px-6 text-gray-800 flex flex-col justify-between">
                          <p className="pb-2">{item.description}</p>
                          {item?.bulletpoints?.map((bullet: string) => (
                            <li className="relative pl-6" key={bullet}>
                              <span
                                dangerouslySetInnerHTML={markdownify(bullet)}
                              />
                            </li>
                          ))}
                        </div>
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

export default Carrers;
