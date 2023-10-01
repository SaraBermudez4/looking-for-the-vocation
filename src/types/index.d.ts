export type RegularPage = {
  frontmatter: {
    title: string;
    image?: string;
    description?: string;
    meta_title?: string;
    layout?: string;
    draft?: boolean;
    body?: string;
    items?: [
      {
        name: string;
        description?: string;
        link?: string;
        bulletpoints?: string[];
      },
    ];
  };
  content: string;
  slug?: string;
};

export type Feature = {
  button: button;
  image: string;
  bulletpoints: string[];
  content: string;
  title: string;
};

export type Call_to_action = {
  enable?: boolean;
  title: string;
  description: string;
  image: string;
  imageDark: string;
  button: Button;
};

export type Button = {
  enable: boolean;
  label: string;
  link: string;
};
